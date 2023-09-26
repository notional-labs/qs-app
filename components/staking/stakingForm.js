import stakingStyles from '@/styles/Staking.module.css'
import {
    Button, ButtonGroup, Image, Checkbox,
    Center,
    Flex,
    NumberInput,
    NumberInputField,
    InputGroup,
    InputLeftElement,
    Text,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { nextStep, inputAmount } from '@/state/staking/slice'
import { DataMap } from '@/state/network/utils'
import { getAmountFromDenom, getDisplayDenom } from '@/services/string'
import { getNativeTokenBalance } from '@/services/account'
import { getInputPrefix,  } from './staking'

// Make sure user have enough for fee
const marginAmount = 0.03

const StakingForm = ({nativeBalance}) => {
    const dispatch = useDispatch()
    const { selectedDenom, connecting, balance } = useSelector(state => state.network)
    const { redemptionRate, stakeAmount, qAssetAmount } = useSelector(state => state.staking)

    const handlerInput = (amt, type) => {
        if (type === 'native') {
            dispatch(inputAmount({ stakeAmount: amt, qAssetAmount: amt / redemptionRate }))
        } else {
            dispatch(inputAmount({ stakeAmount: amt * redemptionRate, qAssetAmount: amt }))
        }
    }

    return (
        <div className={`${stakingStyles.panel_container}`}>
            <Text marginBottom={'10px'}>
                Amount to Stake
            </Text>
            <InputGroup>
                <InputLeftElement pointerEvents='none' w={100} h={'100%'}>
                    {getInputPrefix(DataMap[selectedDenom]?.base_logo, DataMap[selectedDenom]?.symbol, '24px')}
                </InputLeftElement>
                <NumberInput
                    defaultValue={0}
                    value={stakeAmount}
                    min={0}
                    max={getAmountFromDenom(nativeBalance)}
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
                        BALANCE: {getNativeTokenBalance(balance, selectedDenom).amount / Math.pow(10, 6)} {DataMap[selectedDenom]?.symbol}
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
                            handlerInput(getAmountFromDenom(nativeBalance) / 2, 'native')
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
                            const newAmount = getAmountFromDenom(nativeBalance) - marginAmount
                            if (newAmount < 0) {
                                handlerInput(0, 'native')
                            } else {
                                handlerInput(newAmount, 'native')
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
                    {getInputPrefix(DataMap[selectedDenom]?.local_logo, `q${DataMap[selectedDenom]?.symbol}`, '24px')}
                </InputLeftElement>
                <NumberInput
                    defaultValue={0}
                    value={qAssetAmount}
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
                    onChange={(val) => handlerInput(val, 'qAsset')}
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
                        {`${stakeAmount} ${getDisplayDenom(selectedDenom)}`}
                    </text>
                </Flex>
                <Flex justify={'space-between'} className={`${stakingStyles.stat_info}`}>
                    <text className={`${stakingStyles.stat_info_key}`}>
                        Redemption Rate
                    </text>
                    <text className={`${stakingStyles.stat_info_value}`}>
                        {`1 q${getDisplayDenom(selectedDenom, false)} = ${redemptionRate.toFixed(6)} ${getDisplayDenom(selectedDenom, false)}`}
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
            <Checkbox colorScheme='orange' margin={'1em 0'} borderColor={'#E77728'}>Proceed with Existing Intent</Checkbox>
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
                onClick={() => dispatch(nextStep())}
                isDisabled={!stakeAmount || stakeAmount === 0 || connecting}
            >
                Liquid Stake
            </Button>
        </div>
    )
}

export default StakingForm