import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import StakingPannel from '@/components/staking/staking';
import ValidatorPanel from '@/components/staking/validator';
import PageHead from '@/components/layout/PageHead';
import { useDispatch, useSelector } from 'react-redux'
import { getAPYs } from '@/services/zone';
import { clearData, setApr } from '@/state/staking/slice';
import fetchRemdemtionRate from '@/state/staking/thunks/fetchRedemptionRate';
import { DataMap } from '@/state/network/utils';
import { resetData } from '@/state/unbond/slice';

export async function getServerSideProps() {
    const res = await getAPYs()
    return { props: { apr: res } }
  }

export default function Staking(props) {
    const dispatch = useDispatch()
    const { stakingStep } = useSelector(state => state.staking)
    const { selectedDenom, connecting } = useSelector(state => state.network)
    const router = useRouter();

    useEffect(() => {
        dispatch(fetchRemdemtionRate(DataMap[selectedDenom]?.network.chainId))
    }, [connecting, selectedDenom, stakingStep])
    
    // Reset state when exit page
    useEffect(() => {
      const exitingFunction = () => {
        console.log('exiting')
      };
  
      router.events.on("routeChangeStart", exitingFunction);
  
      return () => {
        dispatch(clearData())
        dispatch(resetData())
        router.events.off("routeChangeStart", exitingFunction);
      };
    }, []);

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
