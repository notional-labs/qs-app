import React from "react";
import {
    VStack,
    Flex,
    Text,
    HStack,
    Divider,
    Progress,
    Avatar,
} from "@chakra-ui/react";

export default function Portfolio() {
    return (
        <VStack
            alignItems={'start'}
            gap={4}
            w='35%'
        >
            <Text fontSize={'18px'}>MY QUICKSILVER PORTFOLIO</Text>
            <Flex w='full' justifyContent={'space-between'}>
                <VStack alignItems={'start'}>
                    <Text fontSize={'12px'}>TOTAL</Text>
                    <Text fontSize={'12px'}>----</Text>
                </VStack>
                <VStack alignItems={'end'}>
                    <Text fontSize={'12px'}>AVG APY: ----</Text>
                    <Text fontSize={'12px'}>Yearly Yield: ----</Text>
                </VStack>
            </Flex>
            <Divider />
            <VStack w='full' maxH='180px' overflowY={'scroll'} pr={2} gap={3}
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '3px',
                        h: "90%",
                        borderRadius: '8px',
                        backgroundColor: `#FF850033`,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: `#FF8500`,
                    },
                }}
            >
                <Flex w='full' justifyContent={'space-between'}>
                    <HStack>
                        <Avatar src={"/assets/qOsmo.svg"} w='36px' h='36px' />
                        <Text fontSize={'14px'} color='#CDCDCD'>qOSMO</Text>
                    </HStack>
                    <HStack>
                        <Progress w='120px' h='8px' colorScheme={'orange'} bgColor="#FF984D33" value={20} borderRadius='20px' />
                        <Text fontSize={'12px'} fontWeight={700}>20.00%</Text>
                    </HStack>
                </Flex>
                <Flex w='full' justifyContent={'space-between'}>
                    <HStack>
                        <Avatar src={"/assets/qOsmo.svg"} w='36px' h='36px' />
                        <Text fontSize={'14px'} color='#CDCDCD'>qOSMO</Text>
                    </HStack>
                    <HStack>
                        <Progress w='120px' h='8px' colorScheme={'orange'} bgColor="#FF984D33" value={20} borderRadius='20px' />
                        <Text fontSize={'12px'} fontWeight={700}>20.00%</Text>
                    </HStack>
                </Flex>
                <Flex w='full' justifyContent={'space-between'}>
                    <HStack>
                        <Avatar src={"/assets/qOsmo.svg"} w='36px' h='36px' />
                        <Text fontSize={'14px'} color='#CDCDCD'>qOSMO</Text>
                    </HStack>
                    <HStack>
                        <Progress w='120px' h='8px' colorScheme={'orange'} bgColor="#FF984D33" value={20} borderRadius='20px' />
                        <Text fontSize={'12px'} fontWeight={700}>20.00%</Text>
                    </HStack>
                </Flex>
                <Flex w='full' justifyContent={'space-between'}>
                    <HStack>
                        <Avatar src={"/assets/qOsmo.svg"} w='36px' h='36px' />
                        <Text fontSize={'14px'} color='#CDCDCD'>qOSMO</Text>
                    </HStack>
                    <HStack>
                        <Progress w='120px' h='8px' colorScheme={'orange'} bgColor="#FF984D33" value={20} borderRadius='20px' />
                        <Text fontSize={'12px'} fontWeight={700}>20.00%</Text>
                    </HStack>
                </Flex>
                <Flex w='full' justifyContent={'space-between'}>
                    <HStack>
                        <Avatar src={"/assets/qOsmo.svg"} w='36px' h='36px' />
                        <Text fontSize={'14px'} color='#CDCDCD'>qOSMO</Text>
                    </HStack>
                    <HStack>
                        <Progress w='120px' h='8px' colorScheme={'orange'} bgColor="#FF984D33" value={20} borderRadius='20px' />
                        <Text fontSize={'12px'} fontWeight={700}>20.00%</Text>
                    </HStack>
                </Flex>
                <Flex w='full' justifyContent={'space-between'}>
                    <HStack>
                        <Avatar src={"/assets/qOsmo.svg"} w='36px' h='36px' />
                        <Text fontSize={'14px'} color='#CDCDCD'>qOSMO</Text>
                    </HStack>
                    <HStack>
                        <Progress w='120px' h='8px' colorScheme={'orange'} bgColor="#FF984D33" value={20} borderRadius='20px' />
                        <Text fontSize={'12px'} fontWeight={700}>20.00%</Text>
                    </HStack>
                </Flex>
            </VStack>
        </VStack>
    );
}