import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import calcReducer from './calcSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    calc: calcReducer
  },
  // middleware: (getDefaultMiddleware) => 
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: ['ratings/sortRatings']
  //     }
  //   })
});
