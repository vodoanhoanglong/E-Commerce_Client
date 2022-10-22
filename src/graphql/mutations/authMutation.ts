import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(form: { email: $email, password: $password }) {
      token
      error
    }
  }
`;

export const REGISTER = gql`
  mutation ($email: String!, $password: String!, $fullName: String!) {
    createUser(form: { email: $email, password: $password, fullName: $fullName }) {
      token
      error
    }
  }
`;
