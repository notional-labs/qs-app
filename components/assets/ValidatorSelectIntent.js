import stakingStyles from '@/styles/Staking.module.css'
import { useState } from 'react'
import {
    Grid,
    Center,
    Flex,
    Box,
    Checkbox,
    IconButton,
    Icon,
    Text,
    Avatar,
    useToast
} from '@chakra-ui/react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux'
import { DataMap } from '@/state/network/utils';
import { addIntOpts, removeIntOpts } from '@/state/assets/slice';
import { BaseLogoUrl } from '@/state/network/utils';

const ValidatorSelectIntent = ({
    address,
    name,
    votingPower,
    votingPowerPercentage,
    commission
}) => {
    const [isStar, setIsStar] = useState(false)
    const dispatch = useDispatch()

    const { selectedDenom } = useSelector(state => state.network)
    const { intentOptions } = useSelector(state => state.assets)

    const toast = useToast()

    const handleCheck = (e) => {
        if (e.target.checked) {
            if (intentOptions.length >= 8) {
                e.target.checked = false
                toast({
                    status: 'error',
                    title: 'Maximum validator can be setted is 8',
                    isClosable: true,
                    duration: 2000
                })
                return
            }
            dispatch(addIntOpts({ valoperAddress: address }))
        }
        else {
            dispatch(removeIntOpts({ valoperAddress: address }))
        }
    }

    return (
        <Grid
            templateColumns='60% 20% 20%'
            borderBottom={'solid 1px rgba(77, 77, 77, 1)'}
            w='full'
            px={2}
        >
            <Box
                padding={'1em 0'}
                borderRight={'solid 2px #4D4D4D'}
                w={'90%'}
            >
                <Flex>
                    <Center gap={'5px'} fontSize='15px'>
                        <Checkbox colorScheme='orange' borderColor={'#E77728'} onChange={handleCheck} isChecked={intentOptions.findIndex(iItem => iItem.valoperAddress === address) !== -1} />
                        <IconButton
                            variant='ghost'
                            colorScheme='teal'
                            aria-label='Done'
                            fontSize='20px'
                            icon={isStar ? <Icon as={AiFillStar} /> : <Icon as={AiOutlineStar} />}
                            onClick={() => setIsStar(!isStar)}
                            _hover={{
                                backgroundClip: 'transparent'
                            }}
                        />
                        <Avatar src={`${BaseLogoUrl}/${DataMap[selectedDenom].chainlist_prefix}/moniker/${address}.png`} boxSize={'32px'} borderRadius={'50%'} margin={'0 5px'} />
                        <Text>
                            {name}
                        </Text>
                    </Center>
                </Flex>
            </Box>
            <Box
                padding={'1em 0'}
            >
                <Text className={`${stakingStyles.tableMainText}`}>
                    {votingPower}
                </Text>
                <Text className={`${stakingStyles.tableSubText}`}>
                    {votingPowerPercentage}
                </Text>
            </Box>
            <Flex justify={'start'}>
                <Center
                    padding={'1em 0'}
                >
                    <Text className={`${stakingStyles.tableMainText}`}>
                        {commission}
                    </Text>
                </Center>
            </Flex>
        </Grid>
    )
}

export default ValidatorSelectIntent