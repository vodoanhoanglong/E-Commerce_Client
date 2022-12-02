import { gql } from "@apollo/client";

export const GET_PRODUCT_CATEGORY = gql`
  query getProducts($categoryAliases: [String]!, $page: Int, $size: Int) {
    getProducts(filter: { categoryAliases: $categoryAliases, paginate: { page: $page, size: $size } }) {
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
      pagination {
        perPage
        currentPage
        totalPages
        totalElements
      }
    }
    getCategory {
      alias
      name
      description
    }
  }
`;
