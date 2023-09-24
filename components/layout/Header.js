
import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import WalletModal from '../wallet/WalletModal';
import WalletPopover from '../wallet/WalletPopover';
import { useSelector, useDispatch } from 'react-redux';
import connectToWallet from '@/state/wallet/thunks/connectWallet';
import { SupportedWallets } from '@/state/config';
import connectToClient from '@/state/wallet/thunks/connectClient';
import connectToNetwork from '@/state/network/thunks/connectNetwork';
import fetchValidators from '@/state/network/thunks/fetchValidators';
export default function Header() {
    const dispatch = useDispatch()
    const {connected, connecting} = useSelector(state => state.wallet)
    const {connected: networkConnected, connecting: networkConnecting, selectedDenom} = useSelector(state => state.network)

    useEffect(() => {
        if (window && !connected && !connecting) {
            let oldWalletType = localStorage.getItem('WalletType');
            if (oldWalletType && SupportedWallets.includes(oldWalletType)) {
                dispatch(connectToWallet(oldWalletType))
            }
        }
    }, [])

    useEffect(() => {
        if (window && !networkConnected && !networkConnecting) {
            let oldNetwork = localStorage.getItem('NetworkDenom');
            if (oldNetwork) {
                dispatch(connectToNetwork(oldNetwork))
            } else {
                dispatch(connectToNetwork("uatom"))
            }
        }
    }, [])

    useEffect(() => {
        dispatch(connectToClient())
    }, [])
    
    useEffect(() => {
        if (selectedDenom && networkConnected && !networkConnecting) {
            dispatch(fetchValidators())
        }
    }, [selectedDenom])

    return (
        <Box position={'fixed'} top={10} right={10} zIndex={10}>
            {connected ? <WalletPopover /> :
                <WalletModal />}
        </Box>
    )
}