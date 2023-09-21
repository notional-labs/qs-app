import { createSlice } from "@reduxjs/toolkit";
import connectToNetwork from "./thunks/connectNetwork";

const initialState = {
    connecting: false,
    connected: false,
    selectedDenom: "",
    address: "",
    balance: "",
    signer: {},
    zoneData: {}
}

export const slice = createSlice({
    name: 'network',
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
            state.signer = action.payload.signer
        })
    }
})

export const {
    disconnectWallet,
} = slice.actions;
export default slice.reducer;