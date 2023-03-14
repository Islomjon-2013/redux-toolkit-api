import { configureStore } from "@reduxjs/toolkit";
import post from "../redux-toolkit/Number";
export const store = configureStore({
  reducer: { post },
});
