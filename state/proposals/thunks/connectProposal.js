import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProposal = createAsyncThunk('proposal/fetchProposals', async() => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_QUICKSILVER_API}/cosmos/gov/v1/proposals?pagination.reverse=true`);
        return res.data.proposals;     
    } catch (error) {
        console.log(error);
        throw error;
    }
});

// Fetch a specific proposal by its ID
export const fetchSingleProposal = createAsyncThunk('proposal/fetchSingleProposal', async(proposalId) => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_QUICKSILVER_API}/cosmos/gov/v1/proposals/${proposalId}`);
        return res.data.proposal;
    } catch (error) {
        console.log(error);
        throw error;
    }
});
