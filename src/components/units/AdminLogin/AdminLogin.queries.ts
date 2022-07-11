import { gql } from "@apollo/client";

export const ADMIN_LOGIN = gql`
  mutation adminLogin($adminId: String!, $password: String!) {
    adminLogin(adminId: $adminId, password: $password)
  }
`;
