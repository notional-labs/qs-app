import { configureStore } from '@reduxjs/toolkit'
import walletReducer from "./wallet/slice";
import networkReducer from "./network/slice";
import proposalReducer from "./proposals/slice"

export const store = configureStore({
    reducer: {
        wallet: walletReducer,
        network: networkReducer,
        proposals: proposalReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})