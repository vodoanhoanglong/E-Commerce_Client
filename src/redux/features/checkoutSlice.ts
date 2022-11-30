import { createSlice } from "@reduxjs/toolkit";
import { CheckoutState } from "~/models/cart";
const initialState: CheckoutState = {
  cart: [],
  activeStep: 1,
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
    getCart: (state) => {
      state.cart = JSON.parse(localStorage.getItem("cart") || "[]");
      state.totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    nextStep: (state) => {
      state.activeStep++;
    },
    backStep: (state) => {
      state.activeStep--;
    },
  },
});

export const { getCart, backStep, nextStep } = checkoutSlice.actions;
export default checkoutSlice.reducer;
