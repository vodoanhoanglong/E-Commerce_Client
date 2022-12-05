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
      state.totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);
      state.subTotal = state.cart.reduce((acc, item) => acc + item.subTotal, 0);
    },
    nextStep: (state) => {
      state.activeStep++;
    },
    backStep: (state) => {
      state.activeStep--;
    },
    createBilling: (state, action) => {
      state.bill = action.payload;
    },
  },
});

export const { getCart, backStep, nextStep, createBilling } = checkoutSlice.actions;
export default checkoutSlice.reducer;
