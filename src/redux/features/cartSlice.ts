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
      const product = action.payload;
      const duplicate = state.data.filter((item) => item.product.id === product.id);
      if (duplicate.length > 0) {
        state.data = state.data.filter((item) => item.product.id !== product.id);
        state.data = [
          ...state.data,
          {
            product,
            quantity: product.quantity + duplicate[0].quantity,
            subTotal: product.price * (product.quantity + duplicate[0].quantity),
          },
        ];
      } else {
        state.data = [
          ...state.data,
          {
            product,
            quantity: product.quantity,
            subTotal: product.price * product.quantity,
          },
        ];
      }
      localStorage.setItem("cart", JSON.stringify(state.data.sort((a, b) => a.product.id.localeCompare(b.product.id))));
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
