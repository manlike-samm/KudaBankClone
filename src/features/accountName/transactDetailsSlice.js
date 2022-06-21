import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  transferAmount: 0,
  accountNumber: 0,
  accountName: "",
  sendersAcntNumber: 0,
  sendersAcntBal: 0,
  receiversAcntBal: 0,
  description: "",
  idReceiver: "",
  idSender: "",
  transactHistory: [],
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
    users: (state, action) => {
      state.users = action.payload;
    },
    accountName: (state, action) => {
      state.accountName = action.payload;
    },
    transferAmount: (state, action) => {
      state.transferAmount = action.payload;
    },
    accountNumber: (state, action) => {
      state.accountNumber = action.payload;
    },
    sendersAcntNumber: (state, action) => {
      state.sendersAcntNumber = action.payload;
    },
    sendersAcntBal: (state, action) => {
      state.sendersAcntBal = action.payload;
    },
    receiversAcntBal: (state, action) => {
      state.receiversAcntBal = action.payload;
    },

    debitSender: (state, action) => {
      state.sendersAcntBal -= action.payload;
    },
    creditReceiver: (state, action) => {
      state.receiversAcntBal += action.payload;
    },
    description: (state, action) => {
      state.description = action.payload;
    },
    idSender: (state, action) => {
      state.idSender = action.payload;
    },

    idReceiver: (state, action) => {
      state.idReceiver = action.payload;
    },
    transactHistory: (state, action) => {
      state.transactHistory.push(action.payload);
    },
  },
});
export const {
  accountName,
  transferAmount,
  accountNumber,
  sendersAcntBal,
  sendersAcntNumber,
  receiversAcntBal,
  debitSender,
  creditReceiver,
  description,
  users,
  idReceiver,
  idSender,
  transactHistory,
} = transactDetailsSlice.actions;

export default transactDetailsSlice.reducer;
