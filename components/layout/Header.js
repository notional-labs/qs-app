
import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import WalletModal from '../wallet/WalletModal';
import WalletPopover from '../wallet/WalletPopover';
import { useSelector, useDispatch } from 'react-redux';
import connectToWallet from '@/state/wallet/thunks/connectWallet';
import { SupportedWallets } from '@/state/config';
import connectToClient from '@/state/wallet/thunks/connectClient';
export default function Header() {
    const dispatch = useDispatch()
    const {connected, connecting} = useSelector(state => state.wallet)

    useEffect(() => {
        if (window && !connected && !connecting) {
            let oldWalletType = localStorage.getItem('WalletType');
            if (oldWalletType && SupportedWallets.includes(oldWalletType)) {
                dispatch(connectToWallet(oldWalletType))
            }
        }
    }, [])

    useEffect(() => {
        dispatch(connectToClient())
    }, [])
    
    return (
        <Flex w='full' justifyContent={'end'}>
            {connected ? <WalletPopover /> :
                <WalletModal />}
        </Flex>
    )
}