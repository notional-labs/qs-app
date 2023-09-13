import SideBar from "@/components/sidebar";
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

function Assets() {
    return (
        <Layout pageTitle="Assets | Quicksilver">
            <Center className="dashboard h-screen bg-center bg-background bg-cover bg-no-repeat flex items-center">
                <Center
                    border='1px solid white'
                    bgColor={'rgba(211,211,211, 0.1)'}
                    borderRadius={'10px'}
                    color='white'
                    p={10}
                >
                    <VStack opacity='unset' gap={6}>
                        <Flex gap={20}>
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
            </Center>
        </Layout >
    );
}

export default Assets;
