import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice";
import { authSlice } from "./authSlice";
import { calculatorSlice } from "./calculatorSlice";

export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [calculatorSlice.name]: calculatorSlice.reducer,
  },
});
