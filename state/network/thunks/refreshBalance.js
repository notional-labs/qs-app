import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataMap } from "@/state/network/utils";
import { getBalances } from "@/services/account";

const refreshBalance = createAsyncThunk("network/fetch-balance", async (_, {getState}) => {
    const state = await getState();
    const { selectedDenom, address } = state.network

    try {
        const balances = await getBalances(DataMap[selectedDenom].network.rest, address)

        return { result: balances, error: false}
    } catch (e) {
        console.log(e)
        return { result: [], error: true}
    }
})

export default refreshBalance;