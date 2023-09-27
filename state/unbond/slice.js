import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUnbond: false,
    unbondAmount: 0,
    nativeAmount: 0,
}

export const slice = createSlice({
    name: 'unbond',
    initialState,
    reducers: {
        setProcessing: (state, action) => {
            state.isUnbond = action.payload.isUnbond
        },
        setUnbondAmout: (state, action) => {
            state.unbondAmount = action.payload.unbondAmount
            state.nativeAmount = action.payload.unbondAmount / action.payload.redemptionRate
        },
        setNativeAmout: (state, action) => {
            state.nativeAmount = action.payload.nativeAmount
            state.unbondAmount = action.payload.nativeAmount * action.payload.redemptionRate
        },
        resetData: (state, action) => {
            state.isUnbond = false
            state.unbondAmount = 0 
            state.nativeAmount = 0
        }
    },
})

export const {
    setProcessing,
    setUnbondAmout,
    setNativeAmout,
    resetData,
} = slice.actions;
export default slice.reducer;