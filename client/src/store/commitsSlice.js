import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCommitAPI, fetchCommitsAPI } from '../api/commitsAPI';

export const fetchCommits = createAsyncThunk(
  'commits/fetchCommits',
  fetchCommitsAPI
)
export const fetchCommit = createAsyncThunk(
  'commits/fetchCommit',
  fetchCommitAPI
)

const initialState = {
  total: {},
  refs: [],
  commits: []
};

export const commitsSlice = createSlice({
  name: 'commits',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommits.fulfilled, (state, action) => {
        state.total = action.payload.length;
        state.refs = action.payload.map(({ sha }) => ({ ref: sha }));
      })
      .addCase(fetchCommit.fulfilled, (state, action) => {
        if (state.commits.filter(({ sha }) => sha === action.payload.sha).length === 0) {
          state.commits.push(action.payload);
        }
        state.commits.sort((a, b) => new Date(b.commit.author.date) - new Date(a.commit.author.date));
      })
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Extract the action creators object and the reducer
const { reducer } = commitsSlice
// export const { setCalcParams } = calcSlice.actions
// Export the reducer, either as a default or named export
export default reducer
