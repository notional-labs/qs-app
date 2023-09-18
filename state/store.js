import { configureStore } from '@reduxjs/toolkit'
import walletReducer from "./wallet/slice";
import networkReducer from "./network/slice";

export const store = configureStore({
    reducer: {
        wallet: walletReducer,
        network: networkReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})