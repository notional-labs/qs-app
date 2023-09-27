import { Box, Center, Flex, Link, Spinner, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import finishAnimation from '@/public/imgs/finish.json'
import { DataMap } from "@/state/network/utils";
import { useSelector } from "react-redux";

const OperationProgress = (props) => {
    const { selectedDenom } = useSelector(state => state.network)
    return (
        <Center
            padding={'1em 2em'}
            gap={'30px'}
        >
            <Flex w={'100%'}>
                {
                    !props.isFinished ?
                        <Box padding='1em'>
                            <Spinner
                                size='xl'
                                speed='0.65s'
                                color='#39db77'
                            />
                        </Box> : <Box padding='1em'>
                            <Lottie animationData={finishAnimation} loop={false} />
                        </Box>
                }
                <Center>
                    <Box>
                        <Text fontWeight={'bold'} fontSize={'16px'}>
                            {props.mainText}
                        </Text>
                        <Text fontSize={'14px'} color='rgba(205, 205, 205, 1)' fontWeight={'400'}>
                            {props.subText}
                        </Text>
                        {
                            props.txHash && <Text fontSize={'14px'} marginTop={'10px'} color='rgba(205, 205, 205, 1)' fontWeight={'400'}>
                                Transaction Hash <Link color='rgba(62, 115, 240, 1)' href={`https://www.mintscan.io/${DataMap[selectedDenom]?.network_name.toLowerCase() / tx}/${props.txHash}`} isExternal>{props.txHash}</Link>
                            </Text>
                        }
                    </Box>
                </Center>
            </Flex>
        </Center>
    )
}

export default OperationProgress