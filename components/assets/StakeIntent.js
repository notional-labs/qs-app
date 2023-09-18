import React from "react";
import {
    VStack,
    Flex,
    Text,
    HStack,
    Divider,
    useDisclosure,
    Avatar,
    Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NetworkSelect from "./NetworkSelect";
import IntentModal from "./IntentModal";

export default function StakeIntent() {
    const {isOpen, onClose, onOpen} = useDisclosure()

    return (
        <VStack
            alignItems={'start'}
            gap={4}
            w='35%'
        >
            <HStack w='full' justifyContent={'space-between'}>
                <Text fontSize={'18px'}>Stake Intent</Text>
                <Button onClick={onOpen} color='#FF8500' p={0} h={'min'} variant='ghost' rightIcon={<ChevronRightIcon />} fontSize={'14px'}
                    _hover={{textDecoration: 'underline'}}
                >
                    Edit / Reset Intent
                </Button>
            </HStack>
            <NetworkSelect />
            <Divider />
            <VStack w='full' maxH='180px' overflowY={'scroll'} pr={2} gap={3}
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '3px',
                        h: "90%",
                        borderRadius: '8px',
                        backgroundColor: `#FF850033`,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: `#FF8500`,
                    },
                }}
            >
                <Flex w='full' justifyContent={'space-between'}>
                    <HStack>
                        <Avatar src={"/assets/qOsmo.svg"} w='36px' h='36px' />
                        <Text fontSize={'14px'} color='#CDCDCD'>qOSMO</Text>
                    </HStack>
                    <Text fontSize={'12px'} fontWeight={700}>20.00%</Text>

                </Flex>
                <Flex w='full' justifyContent={'space-between'}>
                    <HStack>
                        <Avatar src={"/assets/qOsmo.svg"} w='36px' h='36px' />
                        <Text fontSize={'14px'} color='#CDCDCD'>qOSMO</Text>
                    </HStack>
                    <Text fontSize={'12px'} fontWeight={700}>20.00%</Text>

                </Flex>
                <Flex w='full' justifyContent={'space-between'}>
                    <HStack>
                        <Avatar src={"/assets/qOsmo.svg"} w='36px' h='36px' />
                        <Text fontSize={'14px'} color='#CDCDCD'>qOSMO</Text>
                    </HStack>
                    <Text fontSize={'12px'} fontWeight={700}>20.00%</Text>

                </Flex>
                <Flex w='full' justifyContent={'space-between'}>
                    <HStack>
                        <Avatar src={"/assets/qOsmo.svg"} w='36px' h='36px' />
                        <Text fontSize={'14px'} color='#CDCDCD'>qOSMO</Text>
                    </HStack>
                    <Text fontSize={'12px'} fontWeight={700}>20.00%</Text>

                </Flex>
                <Flex w='full' justifyContent={'space-between'}>
                    <HStack>
                        <Avatar src={"/assets/qOsmo.svg"} w='36px' h='36px' />
                        <Text fontSize={'14px'} color='#CDCDCD'>qOSMO</Text>
                    </HStack>
                    <Text fontSize={'12px'} fontWeight={700}>20.00%</Text>

                </Flex>
                <Flex w='full' justifyContent={'space-between'}>
                    <HStack>
                        <Avatar src={"/assets/qOsmo.svg"} w='36px' h='36px' />
                        <Text fontSize={'14px'} color='#CDCDCD'>qOSMO</Text>
                    </HStack>
                    <Text fontSize={'12px'} fontWeight={700}>20.00%</Text>

                </Flex>
            </VStack>
            <IntentModal isOpen={isOpen} onClose={onClose} />
        </VStack>
    );
}