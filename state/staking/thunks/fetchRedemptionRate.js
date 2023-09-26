import { createAsyncThunk } from "@reduxjs/toolkit";
import { getKeplrFromWindow } from '@keplr-wallet/stores';
import { getSigningQuicksilverClient } from "quicksilverjs";
import { DataMap } from "@/state/network/utils";
import { getRedemptionRate } from "@/services/zone";

const fetchRemdemtionRate = createAsyncThunk("staking/connect", async (chainId) => {
    let result = {redemptionRate: 1}
    try {
        let rate = await getRedemptionRate(chainId)
        result.redemptionRate = parseFloat(rate)
    } catch (e) {
        console.log(e.message)
    }
    return result
})

export default fetchRemdemtionRate