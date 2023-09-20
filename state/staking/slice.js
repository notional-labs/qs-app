import { createSlice } from "@reduxjs/toolkit";
import connectToNetwork from "./thunks/connectNetwork";

const initialState = {
    stakeAmount: 0,
    redemptionRate: 0,
    qAssetAmount: 0,
    validatorSelect: []
}

export const slice = createSlice({
    name: 'staking',
    initialState,
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(connectToNetwork.pending, (state) => {
            state.connecting = true
        })
        builder.addCase(connectToNetwork.fulfilled, (state, action) => {
            state.connecting = false
            state.address = action.payload.address
            state.balance = action.payload.balance
            state.selectedDenom = action.payload.denom
            state.connected = action.payload.connected
        })
    }
})

export const {
    disconnectWallet,
} = slice.actions;
export default slice.reducer;