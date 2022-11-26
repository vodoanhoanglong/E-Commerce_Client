import { createSlice } from "@reduxjs/toolkit";
import { CheckoutState } from "~/models/cart";

const initialState: CheckoutState = {
  cart: [],
  activeStep: 0,
  bill: null,
  subTotal: 0,
  shipping: 0,
  discount: 0,
  totalItems: 0,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    getCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { getCart } = checkoutSlice.actions;
export default checkoutSlice.reducer;
