import React, { useMemo } from "react";
import {
    Flex,
    Text,
    HStack,
    Progress,
    Avatar,
} from "@chakra-ui/react";
import { Dec } from "@keplr-wallet/unit";

export default function PortfolioItem({ data, total }) {
    const percentAsset = useMemo(() => {
        if (total == 0) {
            return 0
        }
        let decBalance = new Dec(data.balance, data.decimals).toString()
        return parseFloat(decBalance) * parseFloat(data.price) / total * 100
    }, [data, total])
    return (
        <Flex w='full' justifyContent={'space-between'}>
            <HStack>
                <Avatar src={data.local_logo} w='36px' h='36px' />
                <Text fontSize={'14px'} color='#CDCDCD'>{data.local_symbol}</Text>
            </HStack>
            <HStack>
                <Progress w='120px' h='8px' colorScheme={'orange'} bgColor="#FF984D33" value={percentAsset} borderRadius='20px' />
                <Text w='50px' fontSize={'12px'} fontWeight={700}>{percentAsset.toFixed(2)} %</Text>
            </HStack>
        </Flex>
    );
}