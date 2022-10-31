import { createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "./../../models/product";

const cartItems: CartProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");

const initialState = {
  data: cartItems,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity, subTotal } = action.payload;
      const item = state.data.find((item) => item.product.id === product.id);
      if (item) {
        item.quantity += quantity;
        item.subTotal += subTotal;
      } else {
        state.data.push({ product, quantity, subTotal });
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
