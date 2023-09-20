import {
    Flex,
    Image,
    Text,
    Center,
    Box,
} from '@chakra-ui/react'
import stakingStyles from '@/styles/Staking.module.css'

const ValidatorIntentCard = (props) => {
    return (
        <Flex
            padding={'1em'}
            justify={'space-between'}
        >
            <Center gap={'10px'}>
                <Image src='/atom.svg' boxSize={'32px'} />
                <Text className={`${stakingStyles.switch_network_modal_sub_text}`}>
                    {props.validator.moniker}
                </Text>
            </Center>
            <Box>
                <Text className={`${stakingStyles.tableMainText}`}>
                    {props.validator.intent.toFixed(3)} %
                </Text>
            </Box>
        </Flex>
    )
}

export default ValidatorIntentCard