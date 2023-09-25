import stakingStyles from '@/styles/Staking.module.css'
import { useEffect, useState } from 'react'
import {
    Grid,
    Center,
    Flex,
    Box,
    Checkbox,
    IconButton,
    Icon,
    Image,
    Text,
} from '@chakra-ui/react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { getLogo } from '@/services/zone'
import { useSelector } from 'react-redux'


const ValidatorCard = (props) => {
    const [isStar, setIsStar] = useState(false)
    const [logoUrl, setLogoUrl] = useState(null)
    const { validatorSelect } = useSelector(state => state.staking)

    useEffect(() => {
        const url = getLogo(props.address, props.chainName)
        setLogoUrl(url)
    }, [props.address])

    const handleCheck = (e) => {
        if (e.target.checked) {
            if (validatorSelect.length >= 8) {
                e.target.checked = false
                return
            }
            props.setSelectVals([...props.selectVals, {
                address: props.address,
                moniker: props.name,
                intent: 0
            }])
        }
        else {
            const filter = props.selectVals.filter(val => {
                return val.address !== props.address
            })
            props.setSelectVals([...filter])
        }
    }

    const isChecked = () => {
        const filter = props.selectVals.filter(val => {
            return val.address === props.address
        })
        return filter.length > 0
    }

    return (
        <Grid
            templateColumns='50% 15% 15% 20%'
            borderBottom={'solid 1px rgba(77, 77, 77, 1)'}
        >
            <Box
                padding={'1em 0'}
                borderRight={'solid 2px #4D4D4D'}
                w={'90%'}
            >
                <Flex>
                    <Center gap={'5px'} fontSize='15px'>
                        <Checkbox colorScheme='orange' borderColor={'#E77728'} onChange={handleCheck} isChecked={isChecked()} />
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
                        <Center boxSize={'30px'}>
                            <Text>
                                {props.index}
                            </Text>
                        </Center>
                        <Image src={logoUrl} boxSize={'24px'} borderRadius={'50%'} margin={'0 5px'} fallbackSrc='/icons/no_profile.svg' />
                        <Text>
                            {props.name}
                        </Text>
                    </Center>
                </Flex>
            </Box>
            <Box
                padding={'1em 0'}
            >
                <Text className={`${stakingStyles.tableMainText}`}>
                    {props.votingPower}
                </Text>
                <Text className={`${stakingStyles.tableSubText}`}>
                    {props.votingPowerPercentage}
                </Text>
            </Box>
            <Flex justify={'start'}>
                <Center
                    padding={'1em 0'}
                >
                    <Text className={`${stakingStyles.tableMainText}`}>
                        {props.commission}
                    </Text>
                </Center>
            </Flex>
            <Flex justify={'start'} padding={'1em 0'}>
                <Center borderRadius={'10px'} backgroundColor={'#1E421E'} w={'70%'} padding={'.5em'}>
                    <Text className={`${stakingStyles.tableMainText}`}>
                        {`Level 0${props.prScore}`}
                    </Text>
                </Center>
            </Flex>
        </Grid>
    )
}

export default ValidatorCard