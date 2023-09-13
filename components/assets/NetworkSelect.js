import React, { useState } from 'react'
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
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

export default function NetworkSelect() {
    const { isOpen, onToggle, onClose } = useDisclosure()

    const networks = [
        {
            title: 'Cosmos',
            image:
                '/assets/Cosmos.png',
        },
        {
            title: 'Osmosis',
            image:
                '/assets/Juno.png',
        },
        {
            title: 'Regen',
            image:
                '/assets/Osmosis.png',
        },
    ]

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
                    leftIcon={<Image src={networks[0].image} w='32px' h='32px' />}
                >
                    Cosmos
                </Button>
            </PopoverTrigger>
            <PopoverContent bgColor={'#202020'} w='full'>
                <PopoverBody>
                    <VStack gap={8} w='full'>
                        <Button
                            w='full'
                            colorScheme='blackAlpha'
                            fontWeight={500}
                            borderRadius={'4px'}
                            h='50px'
                            fontSize='22px'
                            _hover={{
                                opacity: 0.8
                            }}
                            leftIcon={<Image src={networks[0].image} w='32px' h='32px' />}
                        >
                            Cosmos
                        </Button>
                    </VStack>

                </PopoverBody>
            </PopoverContent>
        </Popover>

    )
}