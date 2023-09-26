import React from "react";
import {
    Box,
    Text,
    HStack,
    Flex,
    Avatar,
    Badge,
} from "@chakra-ui/react";

export default function UnbondingItem() {
    return (
        <Flex w='full' alignItems={'stretch'}>
            <Flex
                w='22%'
                justifyContent={'space-between'}
                pr={8}
            >
                <HStack>
                    <Avatar size='sm' src="/assets/qAtom.svg" />
                    <Text>12.34 qATOM</Text>
                </HStack>
                <Box w='1px' h='full' bgColor={'gray'}/>
            </Flex>
            <Box w='12%'>
                <Badge colorScheme="green">Complete</Badge>
            </Box>
            <Box w='22%'>
                <Text>12.3456 ATOM</Text>
            </Box>
            <Box w='22%'>
                <Text>22/02/2023, 08:55:12</Text>
            </Box>
            <Box w='22%'>
                <Text>22/02/2023, 08:55:12</Text>
            </Box>
        </Flex>
    );
}