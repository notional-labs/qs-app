import React from "react";
import {
    Box,
    Text,
    SimpleGrid,
} from "@chakra-ui/react";
import QAssetCard from "./QAssetCard";

export default function QAssets({assets, aprList}) {
    return (
        <Box w='full'>
            <Text mb={4} fontWeight={700} fontSize={'22px'} textTransform={'uppercase'}>
                Assets (qAssets + Other Chain Assets)
            </Text>
            <SimpleGrid columns={4} gap={6} w='full'>
                {assets.map((item, index) =>
                    <QAssetCard key={"qasset" + index} data={item} aprInfo={aprList.find(aprItem => item.network.chainId === aprItem.chain_id)} />
                )}
            </SimpleGrid>
        </Box>
    );
}