import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataMap } from "@/state/network/utils";
import { getNativeValidators } from "@/services/zone";
const fetchValidators = createAsyncThunk("network/fetch-validators", async (_, {getState}) => {
    const state = await getState();
    const { selectedDenom, valStatus } = state.network

    try {
        const vals = await getNativeValidators(DataMap[selectedDenom].network.rpc, valStatus)
        let valMap = {}
        vals.forEach(val => {
            valMap[val.operatorAddress] = val
        })
        return { valMap: valMap, valArr: vals, error: false}
    } catch (e) {
        console.log(e)
        return { valMap: {}, valArr: [], error: true}
    }
})

export default fetchValidators;