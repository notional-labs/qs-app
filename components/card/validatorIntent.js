import {
    Flex,
    Image,
    Text,
    Center,
    Box,
    NumberInput,
    NumberInputField,
    InputGroup,
    InputRightAddon,
} from '@chakra-ui/react'
import stakingStyles from '@/styles/Staking.module.css'
import { useDispatch } from 'react-redux'
import { editIntent } from '@/state/staking/slice'

const ValidatorIntentCard = (props) => {
    const handleChangeIntent = (value) => {
        const newList = props.selectVals.map((val, i) => {
            if (i === props.index) {
                return {
                    ...val,
                    intent: parseFloat(value)
                }
            }
            return val
        })
        props.setSelectVals([...newList])
    }

    return (
        <Flex
            padding={'1em'}
            justify={'space-between'}
            w={'100%'}
        >
            <Center gap={'10px'}>
                <Text className={`${stakingStyles.switch_network_modal_sub_text}`}>
                    {props.validator.moniker}
                </Text>
            </Center>
            <Flex justify={'end'}>
                {
                    props.isEdit ?
                        <InputGroup size={'sm'} alignSelf={'right'} w={'50%'}>
                            <NumberInput
                                value={props.validator.intent}
                                onChange={handleChangeIntent}
                                defaultValue={props.validator.intent}
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
                        </InputGroup> : <Text className={`${stakingStyles.tableMainText}`}>
                            {props.validator.intent.toFixed(3)} %
                        </Text>
                }
            </Flex>
        </Flex>
    )
}

export default ValidatorIntentCard