import Layout from "@/components/layout";
import React, { useEffect, useState } from "react";
import {
    Center,
    VStack,
    Flex,
    Box,
    Text,
    Button,
    Link,
    Checkbox,
    Tooltip,
    Divider,
    HStack
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

function Assets() {
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
                            <StakingInfo />
                            <GradientDivider orientation="vertical" />
                            <Portfolio />
                            <GradientDivider orientation="vertical" />
                            <StakeIntent />
                        </Flex>
                        <GradientDivider />
                        <QAssets />
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
