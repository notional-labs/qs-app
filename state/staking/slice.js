import { createSlice } from "@reduxjs/toolkit";
import fetchRemdemtionRate from "./thunks/fetchRedemptionRate";

const initialState = {
    isFetching: false,
    stakingStep: 1,
    stakeAmount: 0,
    redemptionRate: 1,
    qAssetAmount: 0,
    apr: {},
    validatorSelect: []
}

export const slice = createSlice({
    name: 'staking',
    initialState,
    reducers: {
        nextStep: (state, action) => {
            state.stakingStep += 1
        },
        prevStep: (state, action) => {
            state.stakingStep -= 1
        },
        addVals: (state, action) => {
            state.validatorSelect.push({
                address: action.payload.valAddress,
                moniker: action.payload.moniker,
                intent: 0
            })
        },
        removeVals: (state, action) => {
            const filter = state.validatorSelect.filter(val => {
                return val.address !== action.payload.valAddress
            })
            state.validatorSelect = filter.map(val => {
                return {
                    address: val.address,
                    moniker: val.moniker,
                    intent: 0
                }
            })
        },
        inputAmount: (state, action) => {
            state.stakeAmount = action.payload.stakeAmount
            state.qAssetAmount = action.payload.qAssetAmount
        },
        calculateIntent: (state, action) => {
            const equalDistributedIntent = state.validatorSelect.length > 0 ? 100 / state.validatorSelect.length : 100
            const calculateIntent = 100 - ( equalDistributedIntent * ( state.validatorSelect.length - 1 ))
            state.validatorSelect = state.validatorSelect.map((val, i) => {
                return {
                    address: val.address,
                    moniker: val.moniker,
                    intent: i === state.validatorSelect.length - 1 ? calculateIntent : equalDistributedIntent
                }
            })
        },
        editIntent: (state, action) => {
            let validator = state.validatorSelect[action.payload.index]
            state.validatorSelect[action.payload.index] = {
                ...validator,
                intent: action.payload.intent
            }
        },
        setApr: (state, action) => {
            state.apr = action.payload.apr
        },
        clearData: (state, action) => {
            state.stakingStep = 1
            state.stakeAmount = 0
            state.qAssetAmount = 0
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchRemdemtionRate.pending, (state) => {
            state.isFetching = true
        })
        builder.addCase(fetchRemdemtionRate.fulfilled, (state, action) => {
            state.isFetching = false
            state.redemptionRate = action.payload.redemptionRate
        })
    }
})

export const {
    nextStep,
    prevStep,
    addVals,
    inputAmount,
    removeVals,
    calculateIntent,
    editIntent,
    setApr,
    clearData,
} = slice.actions;
export default slice.reducer;