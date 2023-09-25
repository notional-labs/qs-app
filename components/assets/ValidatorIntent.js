import {
    Flex,
    Avatar,
    Text,
    Center,
    NumberInput,
    NumberInputField,
    InputGroup,
    InputRightAddon,
} from '@chakra-ui/react'
import stakingStyles from '@/styles/Staking.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { editIntent } from '@/state/assets/slice'
import { BaseLogoUrl, DataMap } from '@/state/network/utils';

const ValidatorIntent = ({index, valoperAddress, weight}) => {
    const dispatch = useDispatch()

    const { valMap, selectedDenom } = useSelector(state => state.network)
    const handleChangeIntent = (val) => {
        dispatch(editIntent({ index: index, intent: val }))
    }

    return (
        <Flex
            padding={'1em'}
            justify={'space-between'}
            w={'100%'}
        >
            <Center gap={'10px'}>
                <Avatar src={`${BaseLogoUrl}/${DataMap[selectedDenom].chainlist_prefix}/moniker/${valoperAddress}.png`} boxSize={'32px'} borderRadius={'50%'} margin={'0 5px'} />
                <Text className={`${stakingStyles.switch_network_modal_sub_text}`}>
                    {valMap[valoperAddress]?.description.moniker}
                </Text>
            </Center>
            <Flex justify={'end'}>
                <InputGroup size={'sm'} alignSelf={'right'} w={'50%'}>
                    <NumberInput
                        value={weight}
                        onChange={handleChangeIntent}
                        min={0}
                        max={100}
                        backgroundColor='white'
                        color='black'
                        borderRadius={'5px 0 0 5px'}
                        focusBorderColor={'transparent'}
                        borderColor={'transparent'}
                        variant={'flushed'}
                        _focus={{ borderColor: '#E77728' }}
                    >
                        <NumberInputField textAlign="end" />
                    </NumberInput>
                    <InputRightAddon children='%' color='black' backgroundColor={'#E77728'} borderRadius={'0 5px 5px 0'} />
                </InputGroup>
            </Flex>
        </Flex>
    )
}

export default ValidatorIntent