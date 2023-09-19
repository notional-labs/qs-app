import { createSlice } from "@reduxjs/toolkit";
import { fetchProposal, fetchSingleProposal } from "./thunks/connectProposal";
const initialState = {
    proposals: [],
    proposal: {},
    loadingProposals: false,
    loadingProposal: true,
    error: null
}

const slice = createSlice({
    name: 'proposals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProposal.fulfilled, (state, action) => {
            state.proposals = action.payload;
            state.loadingProposals = false;
            state.loadingProposal = true
        })
        .addCase(fetchProposal.pending, (state) => {
            state.loadingProposals = true;
        })
        .addCase(fetchProposal.rejected, (state, action) => {
            state.loadingProposals = false;
            state.error = action.error.message;
        })
        .addCase(fetchSingleProposal.fulfilled, (state, action) => {
            state.proposal = action.payload;
            state.loadingProposal = false;
        })
        .addCase(fetchSingleProposal.pending, (state) => {
            state.loadingProposal = true;
        })
        .addCase(fetchSingleProposal.rejected, (state, action) => {
            state.loadingProposal = false;
            state.error = action.error.message;
        });
    }
})

export default slice.reducer;