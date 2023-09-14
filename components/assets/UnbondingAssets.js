import React from "react";
import {
    Box,
    Text,
    SimpleGrid,
    Flex,
    VStack,
    Divider,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import UnbondingItem from "./UnbondingItem";

export default function UnbondingAssets() {
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
                {[1, 2, 3, 4].map((item, index) =>
                    <>
                        <UnbondingItem key={item} />
                        {(index!== 3) && <Divider />}
                    </>
                )}
            </VStack>
        </Box>
    );
}