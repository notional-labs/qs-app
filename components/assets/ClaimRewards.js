import React from "react";
import {
    VStack,
    Flex,
    Text,
    Button,
    Checkbox,
    Tooltip,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

export default function ClaimRewards() {
    return (
        <Flex
            bgColor={'rgba(0, 0, 0, 0.6)'}
            borderRadius={'10px'}
            justifyContent={'space-between'}
            minW={'500px'}
            p={4}
        >
            <VStack alignItems={'start'}>
                <Text fontWeight={700} fontSize={'20px'}>Available Rewards</Text>
                <Text fontWeight={700} fontSize={'25px'}>0.00 QCK</Text>
                <Checkbox disabled size='sm'>
                    <Text as={'i'} fontSize={'13px'} color={'#FBFBFB'}>
                        Enable Automatic Claiming of Rewards {" "}
                        <Tooltip label='Coming soon' fontSize='md'>
                            <InfoIcon />
                        </Tooltip>
                    </Text>
                </Checkbox>
            </VStack>
            <Button
                px={4}
                size='sm'
                fontWeight={400}
                bgColor={'#FF850096'}
                _hover={{
                    bgColor: '#FF850054'
                }}
                borderRadius={4}>
                Claim Rewards
            </Button>
        </Flex>
    );
}