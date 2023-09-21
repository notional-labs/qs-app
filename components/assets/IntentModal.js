import React, { useState } from "react";
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
import { useSelector } from "react-redux";
import ValidatorIntent from "./ValidatorIntent";
export default function IntentModal({ isOpen, onClose, intents }) {
    const { selectedDenom } = useSelector(state => state.network)
    const [selectedIntents, setSelectedIntents] = useState(intents)
    const [openListValidator, setOpenListValidator] = useState(false)
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
                            Set Intent Summary
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
                    <HStack w='full' justifyContent={'space-between'}>
                        <Text fontSize={'24px'} fontWeight={700} mt={4} mb={2}>
                            VALIDATOR LIST
                        </Text>
                        <Button onClick={() => setOpenListValidator(true)} color='#FF8500' p={0} h={'min'} variant='ghost' fontSize={'14px'}
                            _hover={{ textDecoration: 'underline' }}
                        >
                            Edit / Set Intent
                        </Button>
                    </HStack>

                    <VStack w='full' border='1px gray solid' borderRadius={'12px'} gap={2} py={2}>
                        {selectedIntents.length ? selectedIntents.map((item, index) =>
                            <>
                                <ValidatorIntent key={"intent-select" + index} valoperAddress={item.valoperAddress} weight={item.weight} />
                                {index != (selectedIntents.length - 1) && <Divider />}
                            </>
                        ) : <Center p='20px' textAlign={'center'}>
                            <Text color='#FBFBFB' fontSize={'16px'} >
                                You have not set the intent yet. Please click on the button to 'Set Intent'
                            </Text>
                        </Center>
                        }
                    </VStack>
                    <Text fontSize={'16px'} color='#CDCDCD' mt={2}>
                        Aggregate staking intent for all stakers is calculated at the end of each epoch. Given limitations in concurrent redelegations, redelegation to the new intent may take up to 21 days.
                    </Text>
                    <Checkbox disabled size='sm' mt={2}>
                        <Text as={'i'} fontSize={'13px'} color={'#FBFBFB'}>
                            Enable Automatic Claiming of Rewards {" "}
                            <Tooltip label='Coming soon' fontSize='md'>
                                <InfoIcon />
                            </Tooltip>
                        </Text>
                    </Checkbox>

                    <Button w='full'
                        my={4}
                        isDisabled={selectedIntents.length == 0}
                        fontWeight={400}
                        bgColor={'#FF8500'}
                        _hover={{
                            bgColor: '#FF850096'
                        }}
                        color='black'>
                        Confirm Your Staking Intent
                    </Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}