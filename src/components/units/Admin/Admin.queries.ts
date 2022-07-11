import { gql } from "@apollo/client";

export const FETCH_CAR_REGISTRATIONS = gql`
  query fetchCarRegistrations($page: Int!) {
    fetchCarRegistrations(page: $page) {
      id
      carNumber
      isHipass
      model
      oil
      address
      status
    }
  }
`;
