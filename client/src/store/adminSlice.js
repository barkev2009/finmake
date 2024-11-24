import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCommitAPI, fetchCommitsAPI } from '../api/commitsAPI';

export const fetchCommits = createAsyncThunk(
  'admin/fetchCommits',
  fetchCommitsAPI
)
export const fetchCommit = createAsyncThunk(
  'admin/fetchCommit',
  fetchCommitAPI
)

const initialState = {
  commits: {
    total: 0,
    refs: [],
    data: []
  },
  currentTab: {}
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommits.fulfilled, (state, action) => {
        state.commits.total = action.payload.length;
        state.commits.refs = action.payload.map(({ sha }) => ({ ref: sha }));
      })
      .addCase(fetchCommit.fulfilled, (state, action) => {
        if (state.commits.data.filter(({ sha }) => sha === action.payload.sha).length === 0) {
          state.commits.data.push(action.payload);
        }
        state.commits.data.sort((a, b) => new Date(b.commit.author.date) - new Date(a.commit.author.date));
      })
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Extract the action creators object and the reducer
const { reducer } = adminSlice
export const { setCurrentTab } = adminSlice.actions
// Export the reducer, either as a default or named export
export default reducer
