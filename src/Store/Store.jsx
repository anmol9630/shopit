import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cartslice";

const store = configureStore({
  reducer: {
    productstore: cartSlice,
  },
});

export default store;
 