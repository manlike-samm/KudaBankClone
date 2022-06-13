import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transferAmount: 0,
  accountNumber: 0,
  accountName: "",
};

// const userInfo =
//   localStorage.getItem("user") !== "undefined"
//     ? JSON.parse(localStorage.getItem("user"))
//     : localStorage.clear();

// initialState.value = userInfo.accountBalance;

export const transactDetailsSlice = createSlice({
  name: "accountName",
  initialState,
  reducers: {
    accountName: (state, action) => {
      state.accountName = action.payload;
    },
    transferAmount: (state, action) => {
      state.transferAmount = action.payload;
    },
    accountNumber: (state, action) => {
      state.accountNumber = action.payload;
    },
  },
});
export const { accountName, transferAmount, accountNumber } =
  transactDetailsSlice.actions;

export default transactDetailsSlice.reducer;
