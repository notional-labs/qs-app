
import { createAsyncThunk } from "@reduxjs/toolkit";
import { quicksilver } from "@hoangdv2429/quicksilverjs";
import { QuickSilverChainInfo } from "../utils";

const connectToClient = createAsyncThunk("wallet/connect-client", async () => {
    let result
    try {
        const { createGrpcGateWayClient } = quicksilver.ClientFactory; 
        result = await createGrpcGateWayClient({ endpoint: QuickSilverChainInfo.rest });
    } catch (e) {
        console.log("connect client err: ", e)
    }
    return result
})

export default connectToClient;