import stakingStyles from '@/styles/Staking.module.css'
import {
    Button, Image, Box, 
    Center,
    Flex,
    Text,
    Link,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { useState, useCallback, useEffect } from 'react'
import SelectNetwork from '@/components/modal/selectNetwork'
import { ProdZoneInfos } from '@/state/chains/prod'
import { useDispatch, useSelector } from 'react-redux'
import connectToNetwork from '@/state/network/thunks/connectNetwork'
import fetchRemdemtionRate from '@/state/staking/thunks/fetchRedemptionRate'
import { DataMap } from '@/state/network/utils'
import { getAmountFromDenom, getDisplayDenom } from '@/services/string'
import { getNativeTokenBalance } from '@/services/account'
import StakingForm from './stakingForm'
import UnbondForm from './unbondForm'

// Make sure user have enough for fee

export const getInputPrefix = (logo = '/atom.svg', text = 'ATOM', imgSize = '100%') => {
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

export const getOption = (chainInfo) => {
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

const StakingPannel = () => {
    const [nativeBalance, setNativeBalance] = useState({amount: 0, denom: 'uatom'})
    const [qAsset, setQAsset] = useState({amount: 0, denom: 'uqatom'})
    const [pannelMode, setPannelMode] = useState(0)
    const [isOpenNetworkSelect, setIsOpenNetworkSelect] = useState(false)
    const dispatch = useDispatch()
    const { selectedDenom, connecting, balance } = useSelector(state => state.network)
    const walletState = useSelector(state => state.wallet)
    const { redemptionRate } = useSelector(state => state.staking)

    const handleSelectNetwork = useCallback((denom) => {
        dispatch(connectToNetwork(denom))
    }, [])

    useEffect(() => {
        if (selectedDenom) {
            setNativeBalance(getNativeTokenBalance(balance, selectedDenom))
        }
    }, [connecting, selectedDenom, balance])

    useEffect(() => {
        if (selectedDenom) {
            setQAsset(getNativeTokenBalance(walletState.balance, DataMap[selectedDenom]?.zone.local_denom))
        }
    }, [selectedDenom, walletState.balance, walletState.connecting])

    useEffect(() => {
        dispatch(fetchRemdemtionRate(DataMap[selectedDenom]?.network.chainId))
    }, [pannelMode])


    return (
        <Center w={'100%'}>
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
                        {DataMap[selectedDenom]?.base_symbol}
                    </Button>
                </Flex>
                <Flex justify={'space-between'}>
                    {
                        pannelMode === 0 ? <StakingForm nativeBalance={nativeBalance}/> 
                        : <UnbondForm nativeBalance={nativeBalance} qAsset={qAsset}/>
                    }
                    <Center>
                        <div className={`${stakingStyles.verticalLine}`} />
                    </Center>
                    <div className={`${stakingStyles.panel_container}`}>
                        <Text fontSize={'1.25em'}>
                            About {DataMap[selectedDenom]?.base_symbol} on Quicksilver
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
                                <Text>Value of 1 {`${DataMap[selectedDenom]?.local_symbol}`}</Text>
                            </Center>
                            <text className={`${stakingStyles.in_color}`}>
                                {`1 ${DataMap[selectedDenom]?.local_symbol} = ${redemptionRate.toFixed(6)} ${DataMap[selectedDenom]?.base_symbol}`}
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
                                            {`${getAmountFromDenom(nativeBalance).toFixed(6)} ${getDisplayDenom(selectedDenom, false)}`}
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
                                            {`${getAmountFromDenom(nativeBalance).toFixed(6)} ${getDisplayDenom(selectedDenom, false)}`}
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
                                            {`${getAmountFromDenom(qAsset).toFixed(6)} q${getDisplayDenom(selectedDenom, false)}`}
                                        </Center>
                                    </Flex>
                                    <AccordionIcon color={'#E77728'} />
                                </AccordionButton>

                                <AccordionPanel pb={3} padding={'0 20px 20px 30px'} fontSize={'16px'}>
                                    <Flex justify={'space-between'} w={'100%'}>
                                        <Box>
                                            Quicksilver
                                        </Box>
                                        <Center>
                                            {`${getAmountFromDenom(qAsset).toFixed(6)} q${getDisplayDenom(selectedDenom, false)}`}
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