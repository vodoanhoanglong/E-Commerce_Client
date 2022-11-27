import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query {
    getProducts {
      data {
        id
        name
        description
        images {
          url
        }
        price
        quantityStore
      }
    }
  }
`;
