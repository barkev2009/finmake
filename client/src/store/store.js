import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import calcReducer from './calcSlice';
import commitsReducer from './commitsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    calc: calcReducer,
    commits: commitsReducer
  }
});
