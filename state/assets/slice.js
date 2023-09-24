import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFetching: false,
    intentOptions: []
}

export const slice = createSlice({
    name: 'staking',
    initialState,
    reducers: {
        setIntOpts: (state, action) => {
            state.intentOptions = action.payload
        },
        addIntOpts: (state, action) => {
            state.intentOptions.push({
                valoperAddress: action.payload.valoperAddress,
                weight: 0
            })
        },
        removeIntOpts: (state, action) => {
            const filter = state.intentOptions.filter(val => {
                return val.valoperAddress !== action.payload.valoperAddress
            })
            state.intentOptions = filter.map(val => {
                return {
                    valoperAddress: val.valoperAddress,
                    weight: 0
                }
            })
        },
        inputAmount: (state, action) => {
            state.stakeAmount = action.payload.stakeAmount
            state.qAssetAmount = action.payload.qAssetAmount
        },
        calculateIntent: (state, action) => {
            let equalDistributedIntent = (state.intentOptions.length > 0 ? 100 / state.intentOptions.length : 100)
            equalDistributedIntent = Math.round(equalDistributedIntent * 1000) / 1000
            let calculateIntent = 100 - ( equalDistributedIntent * ( state.intentOptions.length - 1 ))
            calculateIntent = Math.round(calculateIntent * 1000) / 1000
            state.intentOptions = state.intentOptions.map((val, i) => {
                return {
                    valoperAddress: val.valoperAddress,
                    weight: i === state.intentOptions.length - 1 ? calculateIntent : equalDistributedIntent
                }
            })
        },
        editIntent: (state, action) => {
            console.log(action.payload.intent)
            let validator = state.intentOptions[action.payload.index]
            state.intentOptions[action.payload.index] = {
                ...validator,
                weight: action.payload.intent
            }
        }
    },
    extraReducers(builder) {
    }
})

export const {
    setIntOpts,
    addIntOpts,
    removeIntOpts,
    inputAmount,
    calculateIntent,
    editIntent,
} = slice.actions;
export default slice.reducer;