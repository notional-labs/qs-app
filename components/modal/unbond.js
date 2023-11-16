import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Flex,
    Image,
    Text,
    Center,
    Box,
    Button,
    VStack,
    Collapse,
    useToast,
} from "@chakra-ui/react"
import stakingStyles from '@/styles/Staking.module.css'
import { useEffect, useState } from "react"
import OperationProgress from "../progress/operationProgress"
import { useDispatch, useSelector } from 'react-redux'
import { unbond } from "@/services/staking"
import { DataMap } from "@/state/network/utils"
<<<<<<< HEAD
import refreshBalance from "@/state/network/thunks/refreshBalance"
=======
import refreshBalance from "@/state/wallet/thunks/refreshBalance"
>>>>>>> main
import { setProcessing } from "@/state/unbond/slice"
import { ProdQuickSilverChainInfo } from "@/state/chains/prod"

const UnbondModal = () => {
    const dispatch = useDispatch()
    const [isProcessing, setIsProcessing] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const { selectedDenom, address } = useSelector(state => state.network)
    const { redemptionRate } = useSelector(state => state.staking)
    const walletState = useSelector(state => state.wallet)
    const { unbondAmount, isUnbond } = useSelector(state => state.unbond)
    const [txHash, setTxHash] = useState('')
    const toast = useToast()

    const liquidStake = async () => {
        setIsProcessing(true)
        try {
            const result = await unbond(ProdQuickSilverChainInfo.rpc,
                address, walletState.address,
                unbondAmount,
                DataMap[selectedDenom]?.zone.local_denom,
                walletState.signer)
            if (result.code === 0) {
                setIsFinished(true)
                setTxHash(result.transactionHash)
            } else {
                throw new Error(`Transaction failed, log: ${result.rawLog}`)
            }
<<<<<<< HEAD
=======
            dispatch(refreshBalance())
>>>>>>> main
        } catch (e) {
            toast({
                position: 'top',
                status: 'error',
                isClosable: true,
                duration: 9000,
                title: `Fail to execute transaction: ${e.message}`
            })
            setIsFinished(false)
            setIsProcessing(false)
            dispatch(setProcessing({ isUnbond: false }))
        }
    }

<<<<<<< HEAD
    useEffect(() => {
        if (isFinished) {
            dispatch(refreshBalance())
        }
    }, [isFinished])

=======
>>>>>>> main
    return (
        <Modal
            isOpen={isUnbond}
            onClose={() => {
                dispatch(setProcessing({ isUnbond: false }))
                setIsFinished(false)
                setIsProcessing(false)
            }}
            size='4xl'
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
                            Unbond Summary
                        </Text>
                    </Center>
                    <ModalCloseButton
                        color='#E77728'
                        boxSize={'3em'}
                        fontSize={'1em'}
                        _hover={{
                            backgroundColor: 'transparent'
                        }}
                    />
                </ModalHeader>
                <ModalBody padding={'0'}>
                    <Box
                        backgroundColor={'rgba(14, 14, 14, 0.6)'}
                        borderRadius={'0 0 20px 20px'}
                        paddingTop={'10px'}
                    >
                        <Text className={`${stakingStyles.modal_m_size}`} padding={'0 2em'} borderTop={'none'}>
                            {
                                isFinished ? 'Transaction successful'
                                    : isProcessing ? 'Approve the transaction in your wallet.'
                                        : 'Confirm your unbond amount.'
                            }
                        </Text>
                        <div
                            style={{
                                width: '100%',
                                margin: '20px 0',
                                borderTop: '0.5px solid var(--neutral-stroke, rgba(255, 255, 255, 0.20))',
                                padding: '1em 2em 0 2em'
                            }}
                        >
                            <Flex justify={'space-between'} className={`${stakingStyles.stat_info}`}>
                                <text className={`${stakingStyles.modal_stat_key}`}>
                                    Total Unbond:
                                </text>
                                <text className={`${stakingStyles.stat_info_value}`}>
                                    {unbondAmount} {DataMap[selectedDenom]?.local_symbol}
                                </text>
                            </Flex>
                            <Flex justify={'space-between'} className={`${stakingStyles.stat_info}`}>
                                <text className={`${stakingStyles.modal_stat_key}`}>
                                    Redemption Rate:
                                </text>
                                <text className={`${stakingStyles.stat_info_value}`}>
                                    {`1 ${DataMap[selectedDenom]?.local_symbol} = ${redemptionRate.toFixed(6)} ${DataMap[selectedDenom]?.base_symbol}`}
                                </text>
                            </Flex>
                            <Flex justify={'space-between'} className={`${stakingStyles.stat_info}`}>
                                <text className={`${stakingStyles.modal_stat_key}`}>
                                    {`${DataMap[selectedDenom]?.base_symbol}`} Received:
                                </text>
                                <text className={`${stakingStyles.stat_info_value}`}>
                                    {`${unbondAmount * redemptionRate} ${DataMap[selectedDenom]?.base_symbol}`}
                                </text>
                            </Flex>
                        </div>
                        <VStack w={'100%'} align={'stretch'}>
                            {
                                isFinished ? <OperationProgress
                                    mainText={'Transaction Successful'}
                                    subText={'The updated qAsset balance will be reflected in your Quicksilver wallet in approximately 30 to 60 seconds. This dialogue will auto-refresh.'}
                                    txHash={txHash}
                                    isFinished={isFinished}
                                /> : isProcessing ? <OperationProgress
                                    mainText={'Approving Transaction'}
                                    subText={'Please wait until your transaction is confirmed on the blockchain.'}
                                    isFinished={isFinished}
                                /> : <Button
                                    color={'black'}
                                    backgroundColor={'rgba(231, 119, 40, 1)'}
                                    padding={'1.5em 2em'}
                                    margin={'1em 2em'}
                                    borderRadius={10}
                                    _hover={{
                                        backgroundColor: '#ba5c1a'
                                    }}
                                    onClick={liquidStake}
                                >
                                    Confirm Unbond
                                </Button>
                            }
                        </VStack>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default UnbondModal