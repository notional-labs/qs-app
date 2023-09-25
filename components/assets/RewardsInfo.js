import React from "react";
import {
    Box,
    Text,
    Link,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function RewardsInfo() {
    return (
        <Box>
            <Text mb={4} fontWeight={700} fontSize={'22px'}>PARTICIPATION REWARDS</Text>
            <Text fontSize={'16px'} color={'#CDCDCD'}>
                Stake with validators with a high PR score to earn QCK rewards.
                Automatic claiming of rewards is <Link textDecor={'underline'}>required</Link>  for the protocol to consider
                your validator staking intent.
            </Text>
            <Link href='#' fontSize={'16px'} color={'#CDCDCD'} isExternal>
                Learn more about Participation Rewards
                <ChevronRightIcon boxSize={'24px'} color={'#FF8500'} mx='2px' />
            </Link>
        </Box>
    );
}