import React, { useEffect, useState, useCallback } from "react";
import {
    Center,
    VStack,
    Flex,
    Box,
    Image,
} from "@chakra-ui/react";
import GradientDivider from "@/components/layout/GradientDivider";
import ClaimRewards from "@/components/assets/ClaimRewards";
import RewardsInfo from "@/components/assets/RewardsInfo";
import StakingInfo from "@/components/assets/StakingInfo";
import Portfolio from "@/components/assets/Portfolio";
import StakeIntent from "@/components/assets/StakeIntent";
import QAssets from "@/components/assets/QAssets";
import UnbondingAssets from "@/components/assets/UnbondingAssets";
import PageHead from "@/components/layout/PageHead";
import { AssetList } from "@/state/network/utils";
import { useSelector } from "react-redux";
import { QuickSilverChainInfo } from "@/state/wallet/utils";
import { Int } from "@keplr-wallet/unit";

function LoadingBox({height}) {
    return (
        <Center w='full' py={8} gap={2} h={'100%'}>
            <Image src='/icons/loading.gif' h={height} />
        </Center>
    )
}
function Assets() {
    const { address } = useSelector(state => state.wallet)
    const [assetList, setAssetList] = useState([])
    const [aprList, setAprList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const handleFetchBalance = useCallback(async (addr) => {
        try {
            if (addr) {
                let promises = []
                AssetList.forEach(([key, value]) => {
                    promises.push(fetch(`${process.env.NEXT_PUBLIC_QUICKSILVER_API}/cosmos/bank/v1beta1/balances/${addr}/by_denom?denom=${value.zone.local_denom}`))
                    promises.push(fetch(`${process.env.NEXT_PUBLIC_OSMOSIS_API}/tokens/v2/${value.base_symbol.toLowerCase()}`, {
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        }
                    }))
                })
                let apiRes = await Promise.all(promises)
                let apiResJson = await Promise.all(apiRes.map(item => item.json()))

                let assetResult = []
                for (let i = 0; i < AssetList.length; i++) {
                    assetResult.push({ ...AssetList[i][1], balance: apiResJson[2 * i].balance.amount, price: apiResJson[2 * i + 1][0].price })
                }
                setAssetList(assetResult)
                setIsLoading(false)
            }
        } catch (e) {
            console.log(e)
            setIsLoading(false)
        }
    }, [])

    const handleFetchApr = useCallback(async () => {
        try {
            let aprListRes = await fetch("https://data.quicksilver.zone/apr")
            let aprListJson = await aprListRes.json()
            setAprList(aprListJson.chains)

        } catch (e) {
            console.log(e)
        }
    }, [])


    useEffect(() => {
        handleFetchBalance(address)
    }, [address])

    useEffect(() => {
        handleFetchApr()
    }, [])

    return (
        <>
            <PageHead pageTitle="Assets | Quicksilver" />
            <Box my={'12vh'} mx={20} w='full'>
                <Center
                    w='full'
                    border='1px solid white'
                    bgColor={'rgba(211,211,211, 0.1)'}
                    borderRadius={'10px'}
                    color='white'
                    p={10}
                    mb={10}
                >
                    <VStack opacity='unset' gap={6} w='full'>
                        <Flex gap={20} w='full' justifyContent={'space-between'}>
                            <RewardsInfo />
                            <ClaimRewards />
                        </Flex>
                        <GradientDivider />
                        <Flex w='full' gap={4} justifyContent={'space-between'} alignItems={'stretch'}>
                            <StakingInfo aprInfo={aprList.find(item => item.chain_id === QuickSilverChainInfo.chainId)} />
                            <GradientDivider orientation="vertical" />
                            {isLoading ? <Box w='35%'><LoadingBox height={'50%'}/></Box> : <Portfolio assets={assetList.filter(item => !(new Int(item.balance).isZero()))} />}
                            <GradientDivider orientation="vertical" />
                            <StakeIntent />
                        </Flex>
                        <GradientDivider />
                        {isLoading ? <LoadingBox height={'10em'}/> : <QAssets assets={assetList} aprList={aprList} />}
                    </VStack>
                </Center>
                <Center
                    w='full'
                    border='1px solid white'
                    bgColor={'rgba(211,211,211, 0.1)'}
                    borderRadius={'10px'}
                    color='white'
                    p={10}
                >
                    <UnbondingAssets />
                </Center>
            </Box></>
    );
}

export default Assets;
