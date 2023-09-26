import React, { useMemo } from "react";
import {
    VStack,
    Flex,
    Text,
    Button,
    Link,
    HStack,
    Image,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";

export default function StakingInfo({aprInfo}) {
    const { balance, typeWallet } = useSelector(state => state.wallet)

    const stakeLink = useMemo(() => {
        switch(typeWallet) {
            case "keplr":
                return "https://wallet.keplr.app/chains/quicksilver"
            case "leap":
                return "https://cosmos.leapwallet.io/transact/stake/plain"
            case "cosmostation":
                return "https://wallet.cosmostation.io/quick-silver/delegate"
        }
        return "#"
    }, [typeWallet])

    return (
        <VStack
            alignItems={'start'}
            gap={4}
            w='25%'
        >
            <HStack>
                <Image src={"/assets/quicksilver-logo.png"} w='44px' h='44px' />
                <Text fontSize={'32px'}>QCK</Text>
            </HStack>
            <HStack>
                <Text fontSize={'32px'}>{(aprInfo?.apr *100).toFixed(2)} %</Text>
                <Text fontSize={'12px'} color={'#9E9E9E'}>STAKING APR</Text>
            </HStack>
            <Flex w='full' justifyContent={'space-between'}>
                <Text fontSize={'12px'} color={'#9E9E9E'}>Quicksilver Balance</Text>
                <Text fontSize={'12px'} color={'#9E9E9E'}>{parseFloat(balance).toFixed(4)}</Text>
            </Flex>

            <Button as={Link}
                href={stakeLink}
                w='full'
                h='37px'
                isExternal
                bgColor={'#E7772860'}
                _hover={{ bgColor: '#E47A07' }}
                color='white'
                fontSize={'12px'}
                borderRadius={'4px'}
            >
                Stake <ExternalLinkIcon ml={2}/>
            </Button>
            <Button as={Link}
                href="https://tfm.com/bridge?chainFrom=osmosis-1&chainTo=quicksilver-2&token0=ibc%2F635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D&token1=uqck"
                w='full'
                h='37px'
                isExternal
                bgColor={'#E7772860'}
                _hover={{ bgColor: '#E47A07' }}
                color='white'
                fontSize={'12px'}
                borderRadius={'4px'}
            >
                Deposit <ExternalLinkIcon ml={2}/>
            </Button>
            <Button as={Link}
                href="https://tfm.com/bridge?chainTo=osmosis-1&chainFrom=quicksilver-2&token0=uqck&token1=ibc%2F635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D"
                w='full'
                h='37px'
                isExternal
                bgColor={'#E7772860'}
                _hover={{ bgColor: '#E47A07' }}
                color='white'
                fontSize={'12px'}
                borderRadius={'4px'}
            >
                Withdraw <ExternalLinkIcon ml={2}/>
            </Button>
        </VStack>
    );
}