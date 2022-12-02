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

    removeFromCart: (state, action) => {
      const product = action.payload;
      state.data = state.data.filter((e) => e.product.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(state.data.sort((a, b) => a.product.id.localeCompare(b.product.id))));
    },

    updateQuantity: (state, action) => {
      const { product, value } = action.payload;
      const index = state.data.findIndex((item) => item.product.id === product.id);
      if (index > -1) {
        state.data[index].quantity = value;
        state.data[index].subTotal = product.price * state.data[index].quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.data.sort((a, b) => a.product.id.localeCompare(b.product.id))));
    },
  },
});
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
