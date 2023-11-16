import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataMap } from "@/state/network/utils";
import { getBalances } from "@/services/account";

const refreshBalance = createAsyncThunk("network/fetch-balance", async (_, {getState}) => {
    const state = await getState();
    const { selectedDenom, address } = state.network

    try {
        const res = await getBalances(DataMap[selectedDenom].network.rest, address)
        const {balances} = res
        if (!balances) {
            return { balance: [], error: true}
        }
        return { balance: balances, error: false}
    } catch (e) {
        console.log(e)
        return { balance: [], error: true}
    }
})

export default refreshBalance;