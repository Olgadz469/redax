import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 100,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

console.log(myValueSlice);

export const { increment, decrement } = myValueSlice.actions;
// export const increment = createAction('myValue/increment');
// // console.log(increment(100));
// export const decrement = createAction('myValue/decrement');

// const myReducer = createReducer(100, builder => {
//   builder
//     .addCase(increment, (state, action) => state + action.payload)
//     .addCase(decrement, (state, action) => state - action.payload);
// });

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    user: userSlice.reducer,
  },
});
