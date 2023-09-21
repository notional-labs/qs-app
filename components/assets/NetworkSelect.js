import React, { useCallback, useMemo, useState } from 'react'
import {

    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    useDisclosure,
    Button,
    VStack,
    Image
} from '@chakra-ui/react'
import { AssetList, DataMap } from '@/state/network/utils'
import { useDispatch, useSelector } from 'react-redux'
import connectToNetwork from '@/state/network/thunks/connectNetwork'

export default function NetworkSelect() {
    const dispatch = useDispatch()
    const { isOpen, onToggle, onClose } = useDisclosure()

    const { selectedDenom, connecting } = useSelector(state => state.network)

    const handleSelectNetwork = useCallback((denom) => {
        onClose()
        dispatch(connectToNetwork(denom))
    }, [])
    return (
        <Popover
            isOpen={isOpen}
            onClose={onClose}
            w='full'
            matchWidth
        >
            <PopoverTrigger>
                <Button
                    w='full'
                    onClick={onToggle}
                    colorScheme='blackAlpha'
                    fontWeight={500}
                    borderRadius={'4px'}
                    h='50px'
                    fontSize='22px'
                    _hover={{
                        opacity: 0.8
                    }}
                    isLoading={connecting}
                    leftIcon={<Image src={DataMap[selectedDenom]?.base_logo} w='32px' h='32px' />}
                >
                    {DataMap[selectedDenom]?.base_symbol}
                </Button>
            </PopoverTrigger>
            <PopoverContent bgColor={'#202020'} w='full'>
                <PopoverBody bg='rgba(0, 0, 0, 0.36)' px={0}>
                    <VStack gap={0} w='full' >
                        {AssetList.map(([key, value]) =>
                            <Button
                                w='full'
                                key={`network-${key}`}
                                colorScheme='blackAlpha'
                                fontWeight={500}
                                borderRadius={'4px'}
                                h='60px'
                                p={'5px'}
                                fontSize='22px'
                                _hover={{
                                    opacity: 0.8,
                                    bgColor:'gray.800'
                                }}
                                onClick={() => handleSelectNetwork(key)}
                                leftIcon={<Image src={value.base_logo} w='32px' h='32px' />}
                            >
                                {value.base_symbol}
                            </Button>
                        )}
                    </VStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}