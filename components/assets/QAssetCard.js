
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
    Text,
    Link,
    HStack,
    Flex,
    Avatar,
    VStack,
    Button,
    Divider
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Dec } from "@keplr-wallet/unit";
import { useSelector } from "react-redux";
import { QuickSilverChainInfo } from "@/state/wallet/utils";

const tfmBaseUrl = "https://tfm.com/bridge?chainFrom="
export default function QAssetCard({ data, aprInfo }) {
    const { typeWallet, address } = useSelector(state => state.wallet)
    const [baseBalance, setBaseBalance] = useState("0")
    const [localBalance, setLocalBalance] = useState("0")

    const qBalance = useMemo(() => {
        return new Dec(data.balance, data.decimals).toString()
    }, [data.balance, data.decimals])


    const handleFetchLocalBalance = useCallback(async (restUrl, baseDenom, decimals, addr) => {
        let balanceReq = await fetch(`${restUrl}/cosmos/bank/v1beta1/balances/${addr}/by_denom?denom=${baseDenom}`)
        let balanceRes = await balanceReq.json()
        setLocalBalance(parseFloat(new Dec(balanceRes.balance.amount, decimals).toString()).toFixed(4))
    }, [])

    const handleFetchBaseBalance = useCallback(async (restUrl, baseDenom, decimals, chainId, walletType) => {
        let windowWallet;
        switch (walletType) {
            case "keplr":
                windowWallet = window.keplr
                break
            case "cosmostation":
                windowWallet = window.cosmostation.providers.keplr
                break
            case "leap":
                windowWallet = window.leap
                break
        }

        if (windowWallet) {
            let addr = await windowWallet?.getKey(chainId)
            let balanceReq = await fetch(`${restUrl}/cosmos/bank/v1beta1/balances/${addr.bech32Address}/by_denom?denom=${baseDenom}`)
            let balanceRes = await balanceReq.json()
            setBaseBalance(parseFloat(new Dec(balanceRes.balance.amount, decimals).toString()).toFixed(4))
        }
    }, [])

    useEffect(() => {
        if (typeWallet && data) {
            handleFetchBaseBalance(data.network.rest, data.zone.base_denom, data.decimals, data.network.chainId, typeWallet)
        }
    }, [typeWallet,data])

    useEffect(() => {
        if (address) {
            handleFetchLocalBalance(QuickSilverChainInfo.rest, data.zone.base_ibc_denom, data.decimals, address)
        }
    }, [address])
    return (
        <VStack border='2px solid gray' borderRadius={'4px'} p={3} my={2} gap={4} alignItems={'start'}>
            <Flex
                w='full'
                justifyContent={'space-between'}
            >
                <HStack>
                    <Avatar size='sm' src={data.local_logo} />
                    <Text>{data.local_symbol}</Text>
                </HStack>
                <VStack alignItems={'end'}>
                    <Text>{(aprInfo?.apr * 100).toFixed(2)} %</Text>
                    <Text fontSize={'12px'}>APR</Text>
                </VStack>
            </Flex>
            <Flex
                w='full'
                justifyContent={'space-between'}
            >
                <Text fontSize={'12px'}>Balance</Text>
                <Text fontSize={'12px'}>{parseFloat(qBalance).toFixed(4)}</Text>
            </Flex>
            <Flex gap={2} w='full'>
                <Button as={Link}
                    href={`${tfmBaseUrl}${data.zone.chain_id}&chainTo=${QuickSilverChainInfo.chainId}&token0=${data.zone.local_ibc_denom}`}
                    w='full'
                    h='37px'
                    isExternal
                    colorScheme='whiteAlpha'
                    fontSize={'16px'}
                    borderRadius={'4px'}
                    variant={'ghost'}
                >
                    Deposit <ExternalLinkIcon ml={2} />
                </Button>
                <Button as={Link}
                    href={`${tfmBaseUrl}${QuickSilverChainInfo.chainId}&chainTo=${data.zone.chain_id}&token0=${data.zone.local_denom}`}
                    w='full'
                    h='37px'
                    isExternal
                    colorScheme='whiteAlpha'
                    fontSize={'16px'}
                    borderRadius={'4px'}
                    variant={'ghost'}
                >
                    Withdraw <ExternalLinkIcon ml={2} />
                </Button>
            </Flex>
            <Divider />
            <HStack>
                <Avatar size='sm' src={data.base_logo} />
                <Text>{data.base_symbol}</Text>
            </HStack>
            <Flex
                w='full'
                justifyContent={'space-between'}
            >
                <Text fontSize={'12px'}>Quicksilver Balance</Text>
                <Text fontSize={'12px'}>{localBalance}</Text>
            </Flex>
            <Flex
                w='full'
                justifyContent={'space-between'}
            >
                <Text fontSize={'12px'}>{data.network_name} Balance</Text>
                <Text fontSize={'12px'}>{baseBalance}</Text>
            </Flex>
            <Flex gap={2} w='full'>
                <Button as={Link}
                    href={`${tfmBaseUrl}${data.zone.chain_id}&chainTo=${QuickSilverChainInfo.chainId}&token0=${data.zone.base_denom}`}
                    w='full'
                    h='37px'
                    isExternal
                    colorScheme='whiteAlpha'
                    fontSize={'16px'}
                    borderRadius={'4px'}
                    variant={'ghost'}
                >
                    Deposit <ExternalLinkIcon ml={2} />
                </Button>
                <Button as={Link}
                    href={`${tfmBaseUrl}${QuickSilverChainInfo.chainId}&chainTo=${data.zone.chain_id}&token0=${data.zone.base_ibc_denom}`}
                    w='full'
                    h='37px'
                    isExternal
                    colorScheme='whiteAlpha'
                    fontSize={'16px'}
                    borderRadius={'4px'}
                    variant={'ghost'}
                >
                    Withdraw <ExternalLinkIcon ml={2} />
                </Button>
            </Flex>
        </VStack>
    );
}