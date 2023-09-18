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

const NetworkCard = (props) => {
    return (
        <Flex
            background='linear-gradient(93deg, rgba(0, 0, 0, 0.39) 41.57%, rgba(0, 0, 0, 0.39) 102.36%, rgba(165, 162, 162, 0.29) 105.28%, rgba(120, 117, 117, 0.40) 108.95%, rgba(231, 227, 227, 0.14) 110.37%, rgba(171, 171, 171, 0.09) 123.66%)'
            borderRadius={'8px'}
            border='1px solid var(--neutral-stroke, rgba(255, 255, 255, 0.20))'
            padding={'1em 2em'}
            justify={'space-between'}
            onClick={() => {
                props.setChainId(props.zone.chain_id)
                props.setIsShow(false)
            }}
        >
            <Center gap={'10px'}>
                <Image src='/atom.svg' boxSize={'100%'} />
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
                    25%
                </Heading>
                <Text className={`${stakingStyles.switch_network_modal_sub_text}`}>
                    APY
                </Text>
            </Box>
        </Flex>
    )
}

export default NetworkCard