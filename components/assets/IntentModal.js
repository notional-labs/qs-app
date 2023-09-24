import React, { useState, useMemo, useEffect } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Center,
    Button,
    Image,
    Text,
    Tooltip,
    Checkbox,
    Divider,
    HStack,
    VStack,
    Spinner
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import ValidatorIntent from "./ValidatorIntent";
import ValidatorList from "./ValidatorList";
import { calculateIntent } from "@/state/assets/slice";

export default function IntentModal({ isOpen, onClose, completedFetch }) {
    const dispatch = useDispatch()
    const { valArr, isFetching } = useSelector(state => state.network)
    const { intentOptions } = useSelector(state => state.assets)

    const [openListValidator, setOpenListValidator] = useState(false)

    const totalSum = useMemo(() => {
        let sum = 0
        valArr.forEach(val => {
            sum += parseInt(val.delegatorShares) / Math.pow(10, 24)
        })
        return sum
    }, [valArr])

    const getIntentSum = () => {
        let sum = 0
        intentOptions.map(val => {
            sum += parseFloat(val.weight)
        })
        return sum
    }

    const checkIntent = () => {
        return getIntentSum() !== 100
    }

    useEffect(() => {
        if(!openListValidator) {
            dispatch(calculateIntent())
        }
    }, [openListValidator])

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
                        <Button onClick={() => setOpenListValidator(open => !open)} color='#FF8500' p={0} h={'min'} variant='ghost' fontSize={'14px'}
                            _hover={{ textDecoration: 'underline' }}
                        >
                            {openListValidator ? "Finish Editing" : "Edit / Set Intent"}
                        </Button>
                    </HStack>
                    {isFetching || !completedFetch ? <Center w='full' py={8} boxShadow={"0px 0px 5px 0px rgba(255, 255, 255, 0.6)"} border='1px gray solid' borderRadius={'12px'} gap={2}>
                        <Spinner color='white' boxSize={'4em'} />
                    </Center>
                        : openListValidator ? <ValidatorList totalSum={totalSum} /> :
                            <VStack w='full' boxShadow={"0px 0px 5px 0px rgba(255, 255, 255, 0.6)"} border='1px gray solid' borderRadius={'12px'} gap={2} py={2}>
                                {intentOptions.length ? intentOptions.map((item, index) =>
                                    <>
                                        <ValidatorIntent key={"intent-select" + index} index={index} valoperAddress={item.valoperAddress} weight={item.weight} />
                                        {index != (intentOptions.length - 1) && <Divider />}
                                    </>
                                ) : <Center p='20px' textAlign={'center'}>
                                    <Text color='#FBFBFB' fontSize={'16px'} >
                                        You have not set the intent yet. Please click on the button to 'Set Intent'
                                    </Text>
                                </Center>
                                }
                            </VStack>
                    }
                    {
                        checkIntent() &&
                        <Center margin={'1em 0'} w='full'>
                            <Text color='#ff5242'>
                                Total Intent sum not 100% please set the percentage of other validators
                            </Text>
                        </Center>
                    }
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
                        isDisabled={intentOptions.length == 0}
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