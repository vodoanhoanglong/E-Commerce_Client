import { CartProduct } from "./product";

export interface Bill {
  id: string;
  receiver: string;
  address: string;
}

export interface CheckoutState {
  cart: CartProduct[];
  activeStep: number;
  bill: Bill | null;
  subTotal: number;
  shipping: number;
  discount: number;
  totalItems: number;
}
