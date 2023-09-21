import React, { useCallback, useEffect, useState } from "react";
import {
    VStack,
    Flex,
    Text,
    HStack,
    Divider,
    Progress,
    Avatar,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Dec } from "@keplr-wallet/unit";
import PortfolioItem from "./PortfolioItem";
export default function Portfolio({assets}) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let preTotal = 0
        assets.forEach(item => {
            let decBalance = new Dec(item.balance, item.decimals).toString()
            preTotal += parseFloat(decBalance) * parseFloat(item.price)
        })
        setTotal(preTotal)
    }, [assets])


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
                    <Text fontSize={'12px'}>$ {total.toFixed(2)}</Text>
                </VStack>
                {/* <VStack alignItems={'end'}>
                    <Text fontSize={'12px'}>AVG APY: ----</Text>
                    <Text fontSize={'12px'}>Yearly Yield: ----</Text>
                </VStack> */}
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
                {assets.map((item, index) =>  
                    <PortfolioItem key={"portfolio"+index} data={item} total={total}/>
                )}
            </VStack>
        </VStack>
    );
}