import React from "react";
import {
    VStack,
    Flex,
    Text,
    Button,
    Link,
    HStack,
    Image,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function StakingInfo() {
    return (
        <VStack
            alignItems={'start'}
            gap={4}
            w='25%'
        >
            <HStack>
                <Image src={"/assets/quicksilver-logo.png"} w='44px' h='44px' />
                <Text fontSize={'32px'}>QCK</Text>
            </HStack>
            <HStack>
                <Text fontSize={'32px'}>12.34%</Text>
                <Text fontSize={'12px'} color={'#9E9E9E'}>STAKING APY</Text>
            </HStack>
            <Flex w='full' justifyContent={'space-between'}>
                <Text fontSize={'12px'} color={'#9E9E9E'}>Quicksilver Balance</Text>
                <Text fontSize={'12px'} color={'#9E9E9E'}>----</Text>
            </Flex>

            <Link as={Button}
                href="#"
                w='full'
                h='37px'
                isExternal
                bgColor={'#E7772860'}
                _hover={{ bgColor: '#E47A07' }}
                color='white'
                fontSize={'12px'}
                borderRadius={'4px'}
            >
                Stake <ExternalLinkIcon ml={2}/>
            </Link>
            <Link as={Button}
                href="#"
                w='full'
                h='37px'
                isExternal
                bgColor={'#E7772860'}
                _hover={{ bgColor: '#E47A07' }}
                color='white'
                fontSize={'12px'}
                borderRadius={'4px'}
            >
                Deposit <ExternalLinkIcon ml={2}/>
            </Link>
            <Link as={Button}
                href="#"
                w='full'
                h='37px'
                isExternal
                bgColor={'#E7772860'}
                _hover={{ bgColor: '#E47A07' }}
                color='white'
                fontSize={'12px'}
                borderRadius={'4px'}
            >
                Withdraw <ExternalLinkIcon ml={2}/>
            </Link>
        </VStack>
    );
}