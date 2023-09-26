import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBalances } from "@/services/account";
import { QuickSilverChainInfo } from "../utils";

const refreshBalance = createAsyncThunk("wallet/fetch-balance", async (_, {getState}) => {
    const state = await getState();
    const { address } = state.network

    try {
        const balances = await getBalances(QuickSilverChainInfo.rest, address)

        return { result: balances, error: false}
    } catch (e) {
        console.log(e)
        return { result: [], error: true}
    }
})

export default refreshBalance;