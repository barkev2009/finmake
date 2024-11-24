import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import calcReducer from './calcSlice';
import adminReducer from './adminSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    calc: calcReducer,
    admin: adminReducer
  }
});
