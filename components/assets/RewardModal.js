import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Center,
    Button,
    Flex,
    Image,
    Text,
    Tooltip,
    Checkbox,
    Divider,
    HStack,
    VStack,
    Avatar
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

export default function RewardModal({ isOpen, onClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size='2xl'
        >
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px)'
            />
            <ModalContent
                color='#FBFBFB'
                background={'linear-gradient(207deg, rgba(255, 255, 255, 0.09) -46.03%, rgba(255, 255, 255, 0.00) 128.13%), #0E0E0E'}
                borderRadius={'20px'}
            >
                <ModalHeader>
                    <Center justifyContent={'start'} gap={'10px'}>
                        <Image src='/logo/qs_logo.svg' />
                        <Text fontSize={'24px'}>
                            Claim Participation Rewards
                        </Text>
                    </Center>
                    <ModalCloseButton
                        color='#E77728'
                        boxSize={'2em'}
                        fontSize={'0.8em'}
                        _hover={{
                            backgroundColor: 'transparent'
                        }}
                    />
                </ModalHeader>
                <ModalBody px={8}>
                    <Divider my={3} />
                    <HStack w='full' justifyContent={'space-between'}>
                        <Text fontSize={'16px'} color='#CDCDCD'>Total Claim Amount</Text>
                        <Text>1234.1234 QCK</Text>
                    </HStack>
                    <HStack w='full' justifyContent={'space-between'}>
                        <Text fontSize={'16px'} color='#CDCDCD'>Claim Reward Date</Text>
                        <Text>12th April 2023, 12:34:56</Text>
                    </HStack>
                    <Divider my={3} />
                    <Text fontSize={'16px'} color='#CDCDCD'>Your claims are measured against your qAsset balances from the previous epoch.</Text>
                    <Text fontSize={'24px'} mt={4} mb={2}>
                        EXISTING QASSET BALANCES
                    </Text>
                    <VStack w='full' border='1px gray solid' borderRadius={'12px'} gap={2} py={2}>
                        <Flex w='full' justifyContent='space-between' p={2}>
                            <HStack px={2}>
                                <Avatar src='/assets/Cosmos.png' size='xs' />
                                <Text fontSize={'16px'} color='#CDCDCD'>Osmosis</Text>
                            </HStack>
                            <Text>1234.56 qOSMO</Text>
                        </Flex>
                        <Divider />
                        <Flex w='full' justifyContent='space-between' p={2}>
                            <HStack px={2}>
                                <Avatar src='/assets/Cosmos.png' size='xs' />
                                <Text fontSize={'16px'} color='#CDCDCD'>Osmosis</Text>
                            </HStack>
                            <Text>1234.56 qOSMO</Text>
                        </Flex>
                        <Divider />
                        <Flex w='full' justifyContent='space-between' p={2}>
                            <HStack px={2}>
                                <Avatar src='/assets/Cosmos.png' size='xs' />
                                <Text fontSize={'16px'} color='#CDCDCD'>Osmosis</Text>
                            </HStack>
                            <Text>1234.56 qOSMO</Text>
                        </Flex>
                    </VStack>
                    <Checkbox disabled size='sm' m={2}>
                        <Text as={'i'} fontSize={'13px'} color={'#FBFBFB'}>
                            Enable Automatic Claiming of Rewards {" "}
                            <Tooltip label='Coming soon' fontSize='md'>
                                <InfoIcon />
                            </Tooltip>
                        </Text>
                    </Checkbox>
                    <Text fontSize={'16px'} color='#CDCDCD'>
                        Make sure to auto-claim your participation rewards to have your staking intent respected by the protocol.
                    </Text>
                    <Text fontSize={'16px'} color='#CDCDCD'>
                        You will need to approve 2 transactions on your wallet to enable automatic claiming of rewards and to claim these rewards.
                    </Text>
                    <Button w='full'
                        my={4}
                        fontWeight={400}
                        bgColor={'#FF8500'}
                        _hover={{
                            bgColor: '#FF850096'
                        }}
                        color='black'>
                            Claim Rewards
                    </Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}