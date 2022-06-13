import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: 0,
};

const userInfo =
  localStorage.getItem("user") !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : localStorage.clear();

initialState.value = userInfo.accountBalance;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += parseInt(action.payload);
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
