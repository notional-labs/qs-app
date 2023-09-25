import React from "react";
import {
    Box,
    Text,
    Flex,
    HStack,
    SimpleGrid,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import QAssetCard from "./QAssetCard";

export default function QAssets() {
    return (
        <Box w='full'>
            <Text mb={4} fontWeight={700} fontSize={'22px'} textTransform={'uppercase'}>
                Assets (qAssets + Other Chain Assets)
            </Text>
            <SimpleGrid columns={4} gap={6} w='full'>
                {[1, 2, 3, 4].map((item, index) =>
                    <QAssetCard key={item} />
                )}
            </SimpleGrid>
        </Box>
    );
}