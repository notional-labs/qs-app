import stakingStyles from '@/styles/Staking.module.css'
import { useState, useEffect } from 'react'
import {
    Button, Grid,
    Center,
    Flex,
    InputGroup,
    InputLeftElement,
    Text,
    Input,
    Switch,
    Box,
    Icon,
    Spinner} from '@chakra-ui/react'
import { ChevronLeftIcon, SearchIcon } from '@chakra-ui/icons'
import ValidatorCard from '@/components/card/validator'
import { GoPencil } from "react-icons/go";
import StakingModal from '../modal/staking'
import { useSelector, useDispatch } from 'react-redux'
import { DataMap } from '@/state/network/utils'
import { getValidatorsFromAPI } from '@/services/zone'
import { prevStep } from '@/state/staking/slice'
import ButtonList from '../list/pagination'

const statuses = [
    'active',
    'inactive'
]

const ValidatorPanel = () => {
    const [pannelMode, setPannelMode] = useState(0)
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const { selectedDenom, connecting } = useSelector(state => state.network)
    const { stakeAmount } = useSelector(state => state.staking)
    const [validators, setValidators] = useState([])
    const [filterVals, setFilterVals] = useState([])
    const [viewVals, setViewVals] = useState([])
    const [totalSum, setTotalSum] = useState(0)
    const [status, setStatus] = useState(0)
    const [isLoading, setIsloading] = useState(false)
    const [selectVals, setSelectVals] = useState([])
    const [params, setParams] = useState({
        page: 1,
        limit: 10,
        total: 0,
    })

    useEffect(() => {
        (async () => {
            try {
                setIsloading(true)
                let res = await getValidatorsFromAPI(DataMap[selectedDenom]?.zone.chain_id)
                setValidators([...res])
                if (status === 0) {
                    res = res.filter(val => {
                        return val.status === 'BOND_STATUS_BONDED'
                    })
                }
                setFilterVals([...res])
                setParams({
                    ...params,
                    total: res.length,
                    page: 1
                })
                setIsloading(false)
            } catch (e) {
                setIsloading(false)
                console.log(e.message)
            }
        })()
    }, [connecting, selectedDenom, status])

    useEffect(() => {
        const pagingList = filterVals.slice((params.page - 1) * params.limit, params.page * params.limit)
        setViewVals([...pagingList])
    }, [params])

    useEffect(() => {
        const pagingList = filterVals.slice((params.page - 1) * params.limit, params.page * params.limit)
        setViewVals([...pagingList])
        setParams({
            ...params,
            total: filterVals.length,
            page: 1
        })
    }, [filterVals])

    useEffect(() => {
        let sum = 0
        validators.map(val => {
            sum += parseInt(val.delegator_shares)
        })
        setTotalSum(sum)
    }, [validators])

    const wrapSetParams = (index) => {
        setParams({ ...params, page: index })
    }

    const handleSwitch = (e) => {
        if (e.target.checked) {
            setStatus(1)
        } else {
            setStatus(0)
        }
    }

    const handleSearch = (e) => {
        if (e.target.value === '') {
            setFilterVals([...validators])
            return
        }
        const fiterVals = validators.filter(val => {
            return val.description.moniker.toLowerCase().includes(e.target.value)
        })
        setFilterVals([...fiterVals])
    }

    const calculateIntent = () => {
        const equalDistributedIntent = selectVals.length > 0 ? 100 / selectVals.length : 100
        const calculateIntent = 100 - (equalDistributedIntent * (selectVals.length - 1))
        const newList = selectVals.map((val, i) => {
            return {
                address: val.address,
                moniker: val.moniker,
                intent: i === selectVals.length - 1 ? calculateIntent : equalDistributedIntent
            }
        })
        setSelectVals([...newList])
    }

    return (
        <Center w={'100%'} padding={'10vh'} minH={'100%'}>
            <Box className={`${stakingStyles.staking_container}`} w={'100%'} h={'100%'}>
                <Flex direction={'column'} justify={'space-between'} h={'100%'}>
                    <Box h={'100%'}>
                        <Flex justify={'space-between'}>
                            <Flex justify={'start'}>
                                <Button variant={'ghost'} padding={0} _hover={{ backgroundColor: 'Boxansparent' }} onClick={() => dispatch(prevStep())}>
                                    <ChevronLeftIcon boxSize={'100%'} color={'#E77728'} />
                                </Button>
                                <button
                                    className={`${stakingStyles.pannel_mode_btn} ${pannelMode === 0 && stakingStyles.in_color}`}
                                    id={`${stakingStyles.stake_btn}`}
                                    onClick={() => setPannelMode(0)}
                                >
                                    All Validators
                                </button>
                                <Center>
                                    <div className={`${stakingStyles.verticalLine}`} style={{ height: '80%' }} />
                                </Center>
                                <button
                                    className={`${stakingStyles.pannel_mode_btn} ${pannelMode === 1 && stakingStyles.in_color}`}
                                    id={`${stakingStyles.unstake_btn}`}
                                    onClick={() => setPannelMode(1)}
                                >
                                    Favourites
                                </button>
                            </Flex>
                            <InputGroup w={'30%'}>
                                <InputLeftElement pointerEvents='none'>
                                    <SearchIcon color='gray.300' />
                                </InputLeftElement>
                                <Input
                                    type='tel'
                                    placeholder='Search validator'
                                    borderRadius={'20px'}
                                    _focus={{ borderColor: '#E77728', boxShadow: 'none' }}
                                    onChange={handleSearch}
                                />
                            </InputGroup>
                            <Center gap={'10px'} >
                                <Switch size={'lg'} colorScheme='orange' onChange={handleSwitch} isLoading={isLoading} />
                                <Text>
                                    Show inactive validators
                                </Text>
                            </Center>
                        </Flex>
                        <Box margin={'3em 0'} h={'100%'}>
                            <Grid templateColumns='50% 15% 15% 20%' padding={'0 1em'} fontWeight='bold' fontSize={'14px'}>
                                <Box>VALIDATOR</Box>
                                <Box>VOTING POWER</Box>
                                <Box>COMMISSION</Box>
                                <Box>PR SCORE</Box>
                            </Grid>
                            <Box
                                bg={'rgba(20, 20, 20, 1)'}
                                borderRadius='10px'
                                padding={'0 1em'}
                                boxShadow={'0px 0px 5px 0px rgba(255, 255, 255, 0.50)'}
                                h={'100%'}
                                maxH={'calc(48vh - 2em)'}
                                overflowY={'scroll'}
                                sx={{
                                    '&::-webkit-scrollbar': {
                                        width: '5px',
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        background: '#E77728',
                                        borderRadius: '20px',
                                    },
                                }}
                            >
                                {
                                    isLoading ? <Center h={'100%'}>
                                        <Spinner color='white' boxSize={'4em'} />
                                    </Center> : viewVals.map((val, i) => {
                                        return (
                                            <ValidatorCard
                                                index={params.limit * ( params.page - 1 ) + i  + 1}
                                                address={val.operator_address}
                                                name={val.description.moniker}
                                                votingPower={(parseInt(val.delegator_shares)).toFixed(0)}
                                                votingPowerPercentage={`${totalSum > 0 ? parseFloat(((parseInt(val.delegator_shares)) / totalSum) * 100).toFixed(2) : 0} %`}
                                                commission={`${(parseFloat(val.commission.commission_rates.rate)).toFixed(2)} %`}
                                                prScore={0}
                                                chainName={DataMap[selectedDenom]?.network_name?.toLowerCase()}
                                                selectVals={selectVals}
                                                setSelectVals={setSelectVals}
                                            />
                                        )
                                    })
                                }
                            </Box>
                            {
                                params.total > 10 && (
                                    <ButtonList
                                        currentPage={params.page}
                                        total={Math.ceil(params.total / params.limit)}
                                        wrapSetParams={wrapSetParams}
                                    />
                                )
                            }
                        </Box>
                    </Box>
                    <Center w={'100%'}>
                        <Box
                            bg={'rgba(20, 20, 20, 1)'}
                            borderRadius='10px'
                            padding={'2em 1em'}
                            boxShadow={'0px 0px 5px 0px rgba(255, 255, 255, 0.50)'}
                            h={'100%'}
                            w={'100%'}
                        >
                            <Flex justify={'space-between'}>
                                <Center gap={'10px'}>
                                    <Text className={`${stakingStyles.tableMainText}`} fontSize={'20px'}>
                                        {stakeAmount} {DataMap[selectedDenom]?.symbol}
                                    </Text>
                                    <Center>
                                        <Icon as={GoPencil} color={'#E77728'} boxSize={'19px'} />
                                    </Center>
                                    <div className={`${stakingStyles.verticalLine}`} style={{ height: '100%', margin: '0 10px' }} />
                                    <Box>
                                        <Text className={`${stakingStyles.tableMainText}`}>
                                            {selectVals.length} Validators Selected
                                        </Text>
                                        <Text className={`${stakingStyles.tableSubText}`}>
                                            Select between 1 to 8 validators.
                                        </Text>
                                    </Box>
                                </Center>
                                <Button
                                    w={'20%'}
                                    padding={'1.5em 0'}
                                    color={'black'}
                                    backgroundColor={'rgba(255, 133, 0, 1)'}
                                    _hover={{
                                        backgroundColor: '#ba5c1a'
                                    }}
                                    onClick={() => {
                                        calculateIntent()
                                        setShow(true)
                                    }}
                                >
                                    Next
                                </Button>
                            </Flex>
                        </Box>
                    </Center>
                </Flex>
            </Box>

            <StakingModal
                isShow={show}
                setIsShow={setShow}
                selectVals={selectVals}
                setSelectVals={setSelectVals}
            />
        </Center>
    )
}

export default ValidatorPanel