import { CartProduct } from "./product";

export interface BillAddress {
  fullName: string;
  phoneNumber: string;
  address: string;
  isDefault: boolean;
}

export interface CheckoutState {
  cart: CartProduct[];
  activeStep: number;
  bill: BillAddress | null;
  subTotal: number;
  shipping: number;
  discount: number;
  totalItems: number;
}
