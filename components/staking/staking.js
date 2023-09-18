import stakingStyles from '@/styles/Staking.module.css'
import {
    Button, ButtonGroup, Image, Box, Checkbox,
    Center,
    Flex,
    NumberInput,
    NumberInputField,
    InputGroup,
    InputLeftElement,
    Text,
    Link,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { useState, useCallback } from 'react'
import SelectNetwork from '@/components/modal/selectNetwork'
import { ProdZoneInfos } from '@/state/chains/prod'
import { useDispatch, useSelector } from 'react-redux'
import connectToNetwork from '@/state/network/thunks/connectNetwork'
import { DataMap } from '@/state/network/utils'
import { getDisplayDenom } from '@/services/string'

const getInputPrefix = (logo = '/atom.svg', text = 'ATOM', imgSize = '100%') => {
    return (
        <Center className={`${stakingStyles.input_prefix}`} gap={1}>
            <Image
                src={logo}
                alt='native token logo'
                boxSize={imgSize}
            />
            <text>
                {text}
            </text>
        </Center>
    )
}

const getOption = (chainInfo) => {
    return (
        <div className={`${stakingStyles.input_prefix}`}>
            <Image
                src={chainInfo?.base_logo}
                alt='native token logo'
                boxSize={'32px'}
            />
        </div>
    )
}

const StakingPannel = (props) => {
    const [pannelMode, setPannelMode] = useState(0)
    const [balances, setBalances] = useState([])
    const [isOpenNetworkSelect, setIsOpenNetworkSelect] = useState(false)
    const dispatch = useDispatch()
    const { selectedDenom, connecting } = useSelector(state => state.network)

    const handleSelectNetwork = useCallback((denom) => {
        dispatch(connectToNetwork(denom))
    }, [])

    return (
        <Center w={'100%'} margin={'10vh'}>
            <Box className={`${stakingStyles.staking_container}`}>
                <Flex justify={'space-between'} padding={'.5em 2em'}>
                    <Flex justify={'start'}>
                        <button
                            className={`${stakingStyles.pannel_mode_btn} ${pannelMode === 0 && stakingStyles.chosen}`}
                            id={`${stakingStyles.stake_btn}`}
                            onClick={() => setPannelMode(0)}
                        >
                            Stake
                        </button>
                        <Center>
                            <div className={`${stakingStyles.verticalLine}`} style={{ height: '60%' }} />
                        </Center>
                        <button
                            className={`${stakingStyles.pannel_mode_btn} ${pannelMode === 1 && stakingStyles.chosen}`}
                            id={`${stakingStyles.unstake_btn}`}
                            onClick={() => setPannelMode(1)}
                        >
                            Unstake
                        </button>
                    </Flex>
                    <Button
                        leftIcon={getOption(DataMap[selectedDenom])} onClick={() => setIsOpenNetworkSelect(true)}
                        backgroundColor='#222'
                        color={'#FBFBFB'}
                        _hover={{
                            backgroundColor: '#000000'
                        }}
                        padding={'1.5em 4em'}
                        boxShadow='0px 0px 5px 0px rgba(255, 255, 255, 0.50)'
                        isLoading={connecting}
                    >
                        {DataMap[selectedDenom]?.symbol}
                    </Button>
                </Flex>
                <Flex justify={'space-between'}>
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
                            >
                                <NumberInputField textAlign="right" />
                            </NumberInput>
                        </InputGroup>
                        <div className={`${stakingStyles.amount_input_balance}`}>
                            <Center>
                                <text>
                                    BALANCE: {32423423432} {DataMap[selectedDenom]?.symbol}
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
                            >
                                <NumberInputField textAlign="right" />
                            </NumberInput>
                        </InputGroup>
                        <div className={`${stakingStyles.amount_input_balance}`}>
                            <Center>
                                <text>
                                    BALANCE: {32423423432} {`q${DataMap[selectedDenom]?.symbol}`}
                                </text>
                            </Center>
                        </div>
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
                                    14103.28 {getDisplayDenom(selectedDenom)}
                                </text>
                            </Flex>
                            <Flex justify={'space-between'} className={`${stakingStyles.stat_info}`}>
                                <text className={`${stakingStyles.stat_info_key}`}>
                                    Redemption Rate
                                </text>
                                <text className={`${stakingStyles.stat_info_value}`}>
                                    {`1 ${getDisplayDenom(selectedDenom, false)} = 1.243 q${getDisplayDenom(selectedDenom, false)}`}
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
                            onClick={() => props.setStep(2)}
                        >
                            Liquid Stake
                        </Button>
                    </div>
                    <Center>
                        <div className={`${stakingStyles.verticalLine}`} />
                    </Center>
                    <div className={`${stakingStyles.panel_container}`}>
                        <Text fontSize={'1.25em'}>
                            About {DataMap[selectedDenom]?.symbol} on Quicksilver
                        </Text>
                        <br />
                        <Flex justify={'space-between'} className={`${stakingStyles.stat_info}`} >
                            <Center gap={2}>
                                <Image src='/icons/icon1.svg' boxSize={'20px'} />
                                <Text>Rewards</Text>
                            </Center>
                            <text className={`${stakingStyles.in_color}`}>
                                33%
                            </text>
                        </Flex>
                        <div className={`${stakingStyles.horizontalLine}`} />
                        <Flex justify={'space-between'} className={`${stakingStyles.stat_info}`}>
                            <Center gap={2}>
                                <Image src='/icons/icon2.svg' boxSize={'20px'} />
                                <Text>Fees</Text>
                            </Center>
                            <text className={`${stakingStyles.in_color}`}>
                                Low
                            </text>
                        </Flex>
                        <div className={`${stakingStyles.horizontalLine}`} />
                        <Flex justify={'space-between'} className={`${stakingStyles.stat_info}`}>
                            <Center gap={2}>
                                <Image src='/icons/icon3.svg' boxSize={'20px'} />
                                <Text>Unbonding</Text>
                            </Center>
                            <text className={`${stakingStyles.in_color}`}>
                                7 days
                            </text>
                        </Flex>
                        <div className={`${stakingStyles.horizontalLine}`} />
                        <Flex justify={'space-between'} className={`${stakingStyles.stat_info}`}>
                            <Center gap={2}>
                                <Image src='/icons/icon4.svg' boxSize={'20px'} />
                                <Text>Value of 1 {`q${getDisplayDenom(selectedDenom, false)}`}</Text>
                            </Center>
                            <text className={`${stakingStyles.in_color}`}>
                                {`1 ${getDisplayDenom(selectedDenom, false)} = 1.243 q${getDisplayDenom(selectedDenom, false)}`}
                            </text>
                        </Flex>
                        <Box
                            backgroundColor={'rgba(14, 14, 14, 0.8)'}
                            padding={'2em 3em'}
                            borderRadius={10}
                            margin={'2em 0'}
                            fontSize={'14px'}
                            opacity={0.9}
                        >
                            <p>
                                Want to learn more about rewards, fees and
                                unbonding on Quicksilver? Check out the <Link style={{ color: '#E77728' }} isExternal>docs</Link>.
                            </p>
                        </Box>
                        <Text fontSize={'1.25em'}>
                            Assets
                        </Text>
                        <Accordion allowToggle>
                            <AccordionItem border={'none'}>

                                <AccordionButton padding={'1em 0'} style={{ fontSize: '16px' }}>
                                    <Flex justify={'space-between'} w={'100%'}>
                                        <Box>
                                            {getInputPrefix(DataMap[selectedDenom]?.base_logo, 'Available to stake', '30px')}
                                        </Box>
                                        <Center className={`${stakingStyles.in_color}`}>
                                            0.34 {getDisplayDenom(selectedDenom, false)}
                                        </Center>
                                    </Flex>
                                    <AccordionIcon color={'#E77728'} />
                                </AccordionButton>

                                <AccordionPanel pb={3} padding={'0 20px 20px 30px'} fontSize={'16px'}>
                                    <Flex justify={'space-between'} w={'100%'}>
                                        <Box>
                                            {DataMap[selectedDenom]?.network_name}
                                        </Box>
                                        <Center>
                                            0.34 {getDisplayDenom(selectedDenom, false)}
                                        </Center>
                                    </Flex>
                                </AccordionPanel>
                                <div className={`${stakingStyles.horizontalLine}`} style={{ margin: '0' }} />
                            </AccordionItem>
                            <AccordionItem border={'none'}>

                                <AccordionButton padding={'1em 0'} style={{ fontSize: '16px' }}>
                                    <Flex justify={'space-between'} w={'100%'}>
                                        <Box>
                                            {getInputPrefix(DataMap[selectedDenom]?.local_logo, 'Liquid staked', '30px')}
                                        </Box>
                                        <Center className={`${stakingStyles.in_color}`}>
                                            0.34 {getDisplayDenom(selectedDenom, false)}
                                        </Center>
                                    </Flex>
                                    <AccordionIcon color={'#E77728'} />
                                </AccordionButton>

                                <AccordionPanel pb={3} padding={'0 20px 20px 30px'} fontSize={'16px'}>
                                    <Flex justify={'space-between'} w={'100%'}>
                                        <Box>
                                            Stride
                                        </Box>
                                        <Center>
                                            0.34 {`q${getDisplayDenom(selectedDenom, false)}`}
                                        </Center>
                                    </Flex>
                                </AccordionPanel>
                                <div className={`${stakingStyles.horizontalLine}`} style={{ margin: '0' }} />
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Flex>

                {/* Modal for network selecting */}
                <SelectNetwork
                    isShow={isOpenNetworkSelect}
                    setIsShow={setIsOpenNetworkSelect}
                    zones={ProdZoneInfos}
                    setChainId={handleSelectNetwork}
                />
            </Box>
        </Center>
    )
}

export default StakingPannel