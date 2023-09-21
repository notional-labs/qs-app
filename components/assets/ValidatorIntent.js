import React, { useEffect, useState } from "react";
import {
    Flex,
    Text,
    HStack,
    Avatar,
} from "@chakra-ui/react";

export default function ValidatorIntent({ valoperAddress, weight }) {


    return (
        <Flex w='full' justifyContent={'space-between'}>
            <HStack>
                <Avatar src={"/assets/qOsmo.svg"} w='36px' h='36px' />
                <Text fontSize={'14px'} color='#CDCDCD'>qOSMO</Text>
            </HStack>
            <Text fontSize={'12px'} fontWeight={700}>20.00%</Text>
        </Flex>
    );
}