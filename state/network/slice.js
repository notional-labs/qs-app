import { createSlice } from "@reduxjs/toolkit";
import connectToNetwork from "./thunks/connectNetwork";
import fetchValidators from "./thunks/fetchValidators";

const initialState = {
    connecting: false,
    connected: false,
    selectedDenom: "",
    address: "",
    balance: "",
    zoneData: {},
    isFetching: false,
    valStatus: 0,
    valArr: [],
    valMap: {},
    signer: {},
    zoneData: {}
}

export const slice = createSlice({
    name: 'network',
    initialState,
    reducers: {
        setValStatus: (state, action) => {
            state.valStatus = action.payload
        },
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
        builder.addCase(fetchValidators.pending, (state) => {
            state.isFetching = true
        })
        builder.addCase(fetchValidators.fulfilled, (state, action) => {
            state.isFetching = false
            state.valMap = action.payload.valMap
            state.valArr = action.payload.valArr
        })
    }
})

export const {
    setValStatus
} = slice.actions;
export default slice.reducer;