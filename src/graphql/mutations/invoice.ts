import { gql } from "@apollo/client";

export const CREATE_BILLING = gql`
  mutation ($products: [String]!, $paymentMethod: String!, $address: String) {
    createOrder(form: { productIds: $products, paymentType: $paymentMethod, deliveryAddress: $address })
  }
`;
