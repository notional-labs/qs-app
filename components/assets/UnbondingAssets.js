import React, { useCallback, useEffect, useState } from "react";
import {
    Box,
    Text,
    SimpleGrid,
    Flex,
    VStack,
    Divider,
    Center,
} from "@chakra-ui/react";
import UnbondingItem from "./UnbondingItem";
import { useSelector } from "react-redux";

export default function UnbondingAssets() {
    const {address, client} = useSelector(state => state.wallet)
    const [unbondingList, setUnbondingList] = useState([])

    const handleFetchUnbondingList = useCallback((grpcClient, addr) => {
        if (grpcClient, addr) {
            // TODO: query unbonding asset by address
        }
    }, [])

    useEffect(() => {
        handleFetchUnbondingList(client, address)
    }, [address && client])

    return (
        <Box w='full'>
            <Text mb={4} fontWeight={700} fontSize={'22px'} textTransform={'uppercase'}>
                Current unbonding assets
            </Text>
            <Flex w='full' py={6} px={4}>
                <Box w='22%'>
                    <Text mb={4} fontWeight={700} fontSize={'18px'} textTransform={'uppercase'}>
                        Asset
                    </Text>
                </Box>
                <Box w='12%'>
                    <Text mb={4} fontWeight={700} fontSize={'18px'} textTransform={'uppercase'}>
                        Status
                    </Text>
                </Box>
                <Box w='22%'>
                    <Text mb={4} fontWeight={700} fontSize={'18px'} textTransform={'uppercase'}>
                        Redemption amount
                    </Text>
                </Box>
                <Box w='22%'>
                    <Text mb={4} fontWeight={700} fontSize={'18px'} textTransform={'uppercase'}>
                        Unstaked on
                    </Text>
                </Box>
                <Box w='22%'>
                    <Text mb={4} fontWeight={700} fontSize={'18px'} textTransform={'uppercase'}>
                        Completion time
                    </Text>
                </Box>
            </Flex>
            <VStack w='full' py={6} px={4}
                bgColor={'rgba(0, 0, 0, 0.6)'}
                borderRadius={'10px'}>
                {unbondingList.length ? unbondingList.map((item, index) =>
                    <Box w='full' key={"unbond" + item}>
                        <UnbondingItem  />
                        {(index!== 3) && <Divider  />}
                    </Box>
                ) : <Center py={10} px={2}>No assets staked on Quicksilver are currently unbonding</Center> }
            </VStack>
        </Box>
    );
}