import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";
import checkoutReducer from "./features/checkoutSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
