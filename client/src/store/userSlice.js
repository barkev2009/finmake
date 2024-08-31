import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  user: {}
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload
    },
    setUser(state, action) {
        state.user = action.payload
    }
  },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginAPI.pending, (state) => {
//         state.status = 'loading';
//       })
//   },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Extract the action creators object and the reducer
const { reducer } = userSlice
export const { setIsAuth, setUser } = userSlice.actions
// Export the reducer, either as a default or named export
export default reducer
