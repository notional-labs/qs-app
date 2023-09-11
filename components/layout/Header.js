
import React, { useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import useWallet from '@/state/wallet';
import WalletModal from '../wallet/WalletModal';
import WalletPopover from '../wallet/WalletPopover';

export default function Header() {
    const { connected } = useWallet()
    useEffect(() => {
        console.log(connected)
    }, [connected])
    if (!connected) return <WalletModal />

    return (
        <Flex w='full' justifyContent={'end'}>
            <WalletPopover />
        </Flex>
    )
}