import { configureStore } from '@reduxjs/toolkit'
import walletReducer from "./wallet/slice";
import networkReducer from "./network/slice";
import stakingReducer from './staking/slice'
import assetsReducer from './assets/slice'

export const store = configureStore({
    reducer: {
        wallet: walletReducer,
        network: networkReducer,
        staking: stakingReducer,
        assets: assetsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})