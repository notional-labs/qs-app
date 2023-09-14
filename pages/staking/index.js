import { Inter } from 'next/font/google'
import { useState } from 'react'
import {
    Flex,
} from '@chakra-ui/react'
import SideBar from "@/components/sidebar";
import Layout from "@/components/layout";
import StakingPannel from '@/components/staking/staking';
import ValidatorPanel from '@/components/staking/validator';

export default function Staking() {
    const [balances, setBalances] = useState([])
    const [step, setStep] = useState(1)

    return (
        <Layout pageTitle="Staking | Quicksilver">
            <Flex minH={'100vh'} >
                <SideBar currentPath={"Staking"} />
                {
                    step === 1 ? <StakingPannel setStep={setStep}/> 
                    : <ValidatorPanel setStep={setStep}/>
                }
            </Flex>
        </Layout >
    )
}
