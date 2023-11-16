import stakingStyles from '@/styles/Staking.module.css'
import {
    Button, ButtonGroup, Image, 
    Center,
    Flex,
    NumberInput,
    NumberInputField,
    InputGroup,
    InputLeftElement,
    Text,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setUnbondAmout, setNativeAmout, setProcessing } from '@/state/unbond/slice'
import { DataMap } from '@/state/network/utils'
import { getAmountFromDenom } from '@/services/string'
import { getInputPrefix, } from './staking'
import UnbondModal from '../modal/unbond'

// Make sure user have enough for fee
const marginAmount = 0.03

const UnbondForm = ({ qAsset }) => {
    const dispatch = useDispatch()
    const { selectedDenom, connecting } = useSelector(state => state.network)
    const { redemptionRate } = useSelector(state => state.staking)
    const { unbondAmount, nativeAmount } = useSelector(state => state.unbond)

    const handlerInput = (amt, type) => {
        if (type === 'qAsset') {
            dispatch(setUnbondAmout({ unbondAmount: amt, redemptionRate: redemptionRate }))
        } else {
            dispatch(setNativeAmout({ nativeAmount: amt, redemptionRate: redemptionRate }))
        }
    }

    return (
        <>
        <div className={`${stakingStyles.panel_container}`}>
            <Text marginBottom={'10px'}>
                Amount to Unbond
            </Text>
            <InputGroup>
                <InputLeftElement pointerEvents='none' w={100} h={'100%'}>
                    {getInputPrefix(DataMap[selectedDenom]?.local_logo, `${DataMap[selectedDenom]?.local_symbol}`, '24px')}
                </InputLeftElement>
                <NumberInput
                    defaultValue={0}
                    value={unbondAmount}
                    min={0}
                    max={getAmountFromDenom(qAsset)}
                    backgroundColor='#141414'
                    w={'full'}
                    borderRadius={10}
                    colorScheme="whiteAlpha"
                    focusBorderColor={'transparent'}
                    borderColor={'transparent'}
                    padding={'10px'}
                    _focus={{
                        borderColor: 'transparent'
                    }}
                    onChange={(val) => handlerInput(val, 'native')}
                    variant={'flushed'}
                    boxShadow={'0px 0px 5px 0px rgba(255, 255, 255, 0.50)'}
                >
                    <NumberInputField textAlign="right" />
                </NumberInput>
            </InputGroup>
            <div className={`${stakingStyles.amount_input_balance}`}>
                <Center>
                    <text>
                        BALANCE: {qAsset?.amount / Math.pow(10, 6)} {DataMap[selectedDenom]?.local_symbol}
                    </text>
                </Center>
                <ButtonGroup gap='1'>
                    <Button
                        backgroundColor={'rgba(231, 119, 40, 0.20)'}
                        color={'#FBFBFB'}
                        padding={'0 2em'}
                        _hover={{
                            backgroundColor: '#e77728'
                        }}
                        fontSize={'1em'}
                        onClick={() => {
                            handlerInput(getAmountFromDenom(qAsset) / 2, 'qAsset')
                        }}
                    >
                        Half
                    </Button>
                    <Button
                        backgroundColor={'rgba(231, 119, 40, 0.20)'}
                        color={'#FBFBFB'}
                        padding={'0 2em'}
                        _hover={{
                            backgroundColor: '#e77728'
                        }}
                        fontSize={'1em'}
                        onClick={() => {
                            const newAmount = getAmountFromDenom(qAsset) - marginAmount
                            if (newAmount < 0) {
                                handlerInput(0, 'qAsset')
                            } else {
                                handlerInput(newAmount, 'qAsset')
                            }
                        }}
                    >
                        Max
                    </Button>
                </ButtonGroup>
            </div>
            <Center margin={'10px 0'}>
                <Image
                    src='/arrow.svg'
                    alt='native token logo'
                    boxSize={'50px'}
                />
            </Center>
            <Text marginBottom={'10px'}>
                Amount Received
            </Text>
            <InputGroup>
                <InputLeftElement pointerEvents='none' w={100} h={'100%'}>
                    {getInputPrefix(DataMap[selectedDenom]?.base_logo, DataMap[selectedDenom]?.base_symbol, '24px')}
                </InputLeftElement>
                <NumberInput
                    defaultValue={0}
                    value={nativeAmount}
                    min={0}
                    backgroundColor='#141414'
                    w={'full'}
                    borderRadius={10}
                    colorScheme="whiteAlpha"
                    focusBorderColor={'transparent'}
                    borderColor={'transparent'}
                    padding={'10px'}
                    _focus={{
                        borderColor: 'transparent'
                    }}
                    variant={'flushed'}
                    boxShadow={'0px 0px 5px 0px rgba(255, 255, 255, 0.50)'}
                    onChange={(val) => handlerInput(val, 'native')}
                >
                    <NumberInputField textAlign="right" />
                </NumberInput>
            </InputGroup>
            <div className={`${stakingStyles.horizontalLine}`} style={{ margin: '2em 0' }} />
            <div
                style={{
                    width: '100%',
                    margin: '20px 0'
                }}
            >
                <Flex justify={'space-between'} className={`${stakingStyles.stat_info}`}>
                    <text className={`${stakingStyles.stat_info_key}`}>
                        Transaction Cost
                    </text>
                    <text className={`${stakingStyles.stat_info_value}`}>
                        {`${unbondAmount} ${DataMap[selectedDenom]?.local_symbol}`}
                    </text>
                </Flex>
                <Flex justify={'space-between'} className={`${stakingStyles.stat_info}`}>
                    <text className={`${stakingStyles.stat_info_key}`}>
                        Redemption Rate
                    </text>
                    <text className={`${stakingStyles.stat_info_value}`}>
                        {`1 ${DataMap[selectedDenom]?.local_symbol} = ${redemptionRate.toFixed(6)} ${DataMap[selectedDenom]?.base_symbol}`}
                    </text>
                </Flex>
                <Flex justify={'space-between'} className={`${stakingStyles.stat_info}`}>
                    <text className={`${stakingStyles.stat_info_key}`}>
                        Unbonding Period
                    </text>
                    <text className={`${stakingStyles.stat_info_value}`}>
                        7 days
                    </text>
                </Flex>
            </div>
            <br />
            <Button
                width={'100%'}
                color={'black'}
                backgroundColor={'rgba(231, 119, 40, 1)'}
                padding={'1.5em 2em'}
                borderRadius={10}
                _hover={{
                    backgroundColor: '#ba5c1a'
                }}
                onClick={() => dispatch(setProcessing({isUnbond: true}))}
                isDisabled={!unbondAmount || unbondAmount === 0 || connecting}
            >
                Unbond
            </Button>
        </div>
        <UnbondModal/>
        </>
    )
}

export default UnbondForm