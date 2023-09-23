import { useEffect, useState } from 'react'
import StakingPannel from '@/components/staking/staking';
import ValidatorPanel from '@/components/staking/validator';
import PageHead from '@/components/layout/PageHead';
import { useDispatch, useSelector } from 'react-redux'
import { getAPYs } from '@/services/zone';
import { setApr } from '@/state/staking/slice';

export async function getServerSideProps() {
    const res = await getAPYs()
    return { props: { apr: res } }
  }

export default function Staking(props) {
    const dispatch = useDispatch()
    const { stakingStep } = useSelector(state => state.staking)

    useEffect(() => {
        dispatch(setApr({apr: props.apr}))
    }, [])

    return (
        <>
            <PageHead pageTitle="Staking | Quicksilver" />
            {
                stakingStep === 1 ? <StakingPannel />
                    : <ValidatorPanel />
            }
        </>
    )
}
