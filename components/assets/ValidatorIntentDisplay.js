import {
    Flex,
    Avatar,
    Text,
    Center,
} from '@chakra-ui/react'
import stakingStyles from '@/styles/Staking.module.css'
import { useSelector } from 'react-redux';
import { BaseLogoUrl, DataMap } from '@/state/network/utils';

const ValidatorIntentDisplay = ({ valoperAddress, weight }) => {
    const { valMap, selectedDenom } = useSelector(state => state.network)

    return (
        <Flex
            gap={4}
            justify={'space-between'}
            w={'100%'}
        >
            <Center gap={'10px'}>
                <Avatar src={`${BaseLogoUrl}/${DataMap[selectedDenom].chainlist_prefix}/moniker/${valoperAddress}.png`} boxSize={'32px'} borderRadius={'50%'} margin={'0 5px'} />
                <Text className={`${stakingStyles.switch_network_modal_sub_text}`}>
                    {valMap[valoperAddress].description.moniker}
                </Text>
            </Center>
            <Flex justify={'end'}>
                <Text className={`${stakingStyles.tableMainText}`}>
                    {parseFloat(weight).toFixed(2)} %
                </Text>
            </Flex>
        </Flex>
    )
}

export default ValidatorIntentDisplay