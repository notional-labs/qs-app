import { useState } from 'react'
import StakingPannel from '@/components/staking/staking';
import ValidatorPanel from '@/components/staking/validator';
import PageHead from '@/components/layout/PageHead';
import { useDispatch, useSelector } from 'react-redux'


export default function Staking() {
    const { stakingStep } = useSelector(state => state.staking) 

    return (
        <>
            <PageHead pageTitle="Staking | Quicksilver" />
            {
                stakingStep === 1 ? <StakingPannel/>
                    : <ValidatorPanel/>
            }
        </>
    )
}
