import {
    Flex,
    Text,
    Center,
    Button,
    VStack,
    StackDivider,
} from "@chakra-ui/react"
import ValidatorIntentCard from "../card/validatorIntent"
import { useState } from "react"

const ValidatorIntent = (props) => {
    const [isEdit, setIsEdit] = useState(false)

    const getIntentSum = () => {
        let sum = 0
        props.selectVals.map(val => {
            sum += parseFloat(val.intent)
        })
        return sum
    }

    const checkIntent = () => {
        return getIntentSum() !== 100
    }

    return (
        <>
            <Flex justify={'space-between'} padding={'1em 2em'}>
                <Center>
                    <Text fontSize={'20px'}>
                        Validator List
                    </Text>
                </Center>
                {
                    isEdit ? (
                        <Button
                            variant={'ghost'}
                            color={'rgba(255, 133, 0, 1)'}
                            _hover={{ backgroundColor: 'transparent' }}
                            fontWeight={'400'}
                            fontSize={'14px'}
                            onClick={() => {
                                setIsEdit(false)
                            }}
                        >
                            Finish
                        </Button>

                    ) : (
                        <Button
                            variant={'ghost'}
                            color={'rgba(255, 133, 0, 1)'}
                            _hover={{ backgroundColor: 'transparent' }}
                            fontWeight={'400'}
                            fontSize={'14px'}
                            onClick={() => {
                                setIsEdit(true)
                            }}
                        >
                            Edit Stake Allocation
                        </Button>
                    )
                }
            </Flex >
            <VStack
                margin={'0 2em 1em 2em'}
                divider={<StackDivider height={'1px'} borderColor='rgba(255, 255, 255, 0.20)' />}
                align='stretch'
                borderRadius={'10px'}
                border='0.5px solid var(--neutral-stroke, rgba(255, 255, 255, 0.20))'
                backgroundColor={'#171717'}
                maxHeight={'325px'}
                gap={0}
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
                    props.selectVals.map((val, i) => {
                        return (
                            <ValidatorIntentCard validator={val} isEdit={isEdit} index={i} selectVals={props.selectVals} setSelectVals={props.setSelectVals}/>
                        )
                    })
                }
            </VStack>
            {
                checkIntent() &&
                <Center margin={'1em 0'}>
                    <Text color='#ff5242'>
                        Total Intent sum not 100% please set the percentage of other validators
                    </Text>
                </Center>
            }
        </>
    )
}

export default ValidatorIntent