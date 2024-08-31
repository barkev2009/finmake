import { createSlice } from '@reduxjs/toolkit';
import { SELECT_BLOCKS, SLIDERS } from '../const';
import { calculate } from '../utils/calculator';

const initialState = {
    params: {},
    result: 0
};
SELECT_BLOCKS.forEach(item => Object.assign(initialState.params, { [item.id]: 'select' }));
SLIDERS.forEach(item => Object.assign(initialState.params, { [item.id]: 0 }));

export const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    setCalcParams(state, action) {
      state.params[action.payload.id] = action.payload.value
      state.result = calculate(state.params);
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
const { reducer } = calcSlice
export const { setCalcParams } = calcSlice.actions
// Export the reducer, either as a default or named export
export default reducer
