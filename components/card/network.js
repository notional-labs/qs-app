import {
    Flex,
    Image,
    Text,
    Center,
    Heading,
    Box,
    Button,
} from '@chakra-ui/react'
import stakingStyles from '@/styles/Staking.module.css'
import { getDisplayDenom } from '@/services/string'
import { useDispatch, useSelector } from 'react-redux'
import connectToNetwork from '@/state/network/thunks/connectNetwork'
import { DataMap } from '@/state/network/utils'
import { useCallback, useEffect, useState } from 'react'
import { getAPY } from '@/services/zone'

const NetworkCard = (props) => {
    const dispatch = useDispatch()
    const { apr } = useSelector(state => state.staking)

    const handleSelectNetwork = useCallback((denom) => {
        dispatch(connectToNetwork(denom))
    }, [])
    
    return (
        <Flex
            background='linear-gradient(93deg, rgba(0, 0, 0, 0.39) 41.57%, rgba(0, 0, 0, 0.39) 102.36%, rgba(165, 162, 162, 0.29) 105.28%, rgba(120, 117, 117, 0.40) 108.95%, rgba(231, 227, 227, 0.14) 110.37%, rgba(171, 171, 171, 0.09) 123.66%)'
            borderRadius={'8px'}
            border='1px solid var(--neutral-stroke, rgba(255, 255, 255, 0.20))'
            padding={'1em 2em'}
            justify={'space-between'}
            onClick={() => {
                handleSelectNetwork(props.zone.base_denom)
                props.setIsShow(false)
            }}
            cursor={'pointer'}
        >
            <Center gap={'10px'}>
                <Image src={props.zone.base_logo} boxSize={'40px'} />
                <Box>
                    <Heading as='h6' size={'md'}>
                        {props.zone.name}
                    </Heading>
                    <Text className={`${stakingStyles.switch_network_modal_sub_text}`}>
                        {getDisplayDenom(props.zone.base_denom)}
                    </Text>
                </Box>
            </Center>
            <Box>
                <Heading as='h6' size={'md'}>
                    {`${(apr && apr[props.zone.chain_id]? apr[props.zone.chain_id] * 100 : 0 ).toFixed(2)} %`}
                </Heading>
                <Text className={`${stakingStyles.switch_network_modal_sub_text}`} textAlign={'end'}>
                    APY
                </Text>
            </Box>
        </Flex>
    )
}

export default NetworkCard