import React from "react";
import {
    Box,
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

export default function QAssetCard() {
    return (
        <VStack border='2px solid gray' borderRadius={'4px'} p={3} my={2} gap={4} alignItems={'start'}>
            <Flex
                w='full'
                justifyContent={'space-between'}
            >
                <HStack>
                    <Avatar size='sm' src="/assets/qAtom.svg" />
                    <Text>qATOM</Text>
                </HStack>
                <VStack alignItems={'end'}>
                    <Text>12.34%</Text>
                    <Text fontSize={'12px'}>QUICKSILVER APY</Text>
                </VStack>
            </Flex>
            <Flex
                w='full'
                justifyContent={'space-between'}
            >
                <Text fontSize={'12px'}>Balance</Text>
                <Text fontSize={'12px'}>----</Text>
            </Flex>
            <Flex gap={2} w='full'>
                <Button as={Link}
                    href="#"
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
                    href="#"
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
                <Avatar size='sm' src="/assets/Cosmos.png" />
                <Text>ATOM</Text>
            </HStack>
            <Flex
                w='full'
                justifyContent={'space-between'}
            >
                <Text fontSize={'12px'}>Balance</Text>
                <Text fontSize={'12px'}>----</Text>
            </Flex>
            <Flex gap={2} w='full'>
                <Button as={Link}
                    href="#"
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
                    href="#"
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