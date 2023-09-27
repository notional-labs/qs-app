import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBalances } from "@/services/account";
import { QuickSilverChainInfo } from "../utils";

const refreshBalance = createAsyncThunk("wallet/fetch-balance", async (_, {getState}) => {
    const state = await getState();
    const { address } = state.network

    try {
        const res = await getBalances(QuickSilverChainInfo.rest, address)
        const {balances} = res
        if (!balances) {
            return { balance: [], error: true}
        }
        return { balance: balances, error: false}
    } catch (e) {
        console.log(e)
        return { result: [], error: true}
    }
})

export default refreshBalance;