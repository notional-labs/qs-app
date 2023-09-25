import { configureStore } from '@reduxjs/toolkit'
import walletReducer from "./wallet/slice";
import networkReducer from "./network/slice";
import stakingReducer from './staking/slice'
import proposalReducer from "./proposals/slice"

export const store = configureStore({
    reducer: {
        wallet: walletReducer,
        network: networkReducer,
        staking: stakingReducer,
        proposals: proposalReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})