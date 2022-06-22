import { configureStore } from "@reduxjs/toolkit";
import transactReducer from "../features/accountName/transactDetailsSlice";

export const store = configureStore({
  reducer: {
    transact: transactReducer,
  },
});
