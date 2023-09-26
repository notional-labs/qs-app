import React, { useState, useMemo, useEffect, useCallback } from "react";
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
    Divider,
    HStack,
    VStack,
    Spinner
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import ValidatorIntent from "./ValidatorIntent";
import ValidatorList from "./ValidatorList";
import { calculateIntent, setIntOpts } from "@/state/assets/slice";
import { signalIntent } from "@/services/intent";
import OperationProgress from "../progress/operationProgress";
import { DataMap } from "@/state/network/utils";

export default function IntentModal({ isOpen, onClose, completedFetch, isFinished, setIsFinished }) {
    const dispatch = useDispatch()
    const { valArr, isFetching, selectedDenom } = useSelector(state => state.network)
    const { address, signer } = useSelector(state => state.wallet)

    const { intentOptions } = useSelector(state => state.assets)

    const [openListValidator, setOpenListValidator] = useState(false)
    const [isProcessing, setIsProcessing] = useState(false)
    const [txHash, setTxHash] = useState('')

    const totalSum = useMemo(() => {
        let sum = 0
        valArr.forEach(val => {
            sum += parseInt(val.delegatorShares) / Math.pow(10, 24)
        })
        return sum
    }, [valArr])

    const checkIntent = useMemo(() => {
        let sum = 0
        intentOptions.map(val => {
            sum += parseFloat(val.weight)
        })
        return sum !== 100
    }, [intentOptions])

    const handleSignalIntent = async () => {
        setIsProcessing(true)
        try {
            const result = await signalIntent(DataMap[selectedDenom].zone, address, intentOptions, signer)
            if (result.code === 0) {
                setIsFinished(true)
                setTxHash(result.transactionHash)
            } else {
                throw new Error(`Transaction failed, log: ${result.rawLog}`)
            }
            dispatch(setIntOpts([]))
        } catch (e) {
            setIsFinished(false)
            setIsProcessing(false)
            console.log(e)
        }
    }

    useEffect(() => {
        if (!openListValidator) {
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
                            isDisabled={isProcessing}
                        >
                            {openListValidator ? "Finish" : "Edit / Set Intent"}
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
                        !openListValidator && checkIntent && intentOptions.length > 0 &&
                        <Center margin={'1em 0'} w='full'>
                            <Text color='#ff5242'>
                                Total Intent sum not 100% please set the percentage of other validators
                            </Text>
                        </Center>
                    }
                    <Text fontSize={'16px'} color='#CDCDCD' mt={2}>
                        Aggregate staking intent for all stakers is calculated at the end of each epoch. Given limitations in concurrent redelegations, redelegation to the new intent may take up to 21 days.
                    </Text>
                    <VStack w={'100%'} align={'stretch'}>
                        {
                            isFinished ? <OperationProgress
                                mainText={'Transaction Successful'}
                                txHash={txHash}
                                isFinished={isFinished}
                            /> : isProcessing ? <OperationProgress
                                mainText={'Approving Transaction'}
                                subText={'Please wait until your transaction is confirmed on the blockchain.'}
                                isFinished={isFinished}
                            /> :
                                <Button
                                    onClick={handleSignalIntent}
                                    w='full'
                                    my={4}
                                    isDisabled={intentOptions.length == 0 || checkIntent || openListValidator || isProcessing}
                                    fontWeight={400}
                                    bgColor={'#FF8500'}
                                    _hover={{
                                        bgColor: '#FF850096'
                                    }}
                                    color='black'>
                                    Confirm Your Staking Intent
                                </Button>
                        }
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}