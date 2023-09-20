import { useState } from 'react'
import StakingPannel from '@/components/staking/staking';
import ValidatorPanel from '@/components/staking/validator';
import PageHead from '@/components/layout/PageHead';

export default function Staking() {
    const [step, setStep] = useState(1)

    return (
        <>
            <PageHead pageTitle="Staking | Quicksilver" />
            {
                step === 1 ? <StakingPannel setStep={setStep} step={step} />
                    : <ValidatorPanel setStep={setStep} step={step} />
            }
        </>
    )
}
