import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import transactReducer from "../features/accountName/transactDetailsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    transact: transactReducer,
  },
});
