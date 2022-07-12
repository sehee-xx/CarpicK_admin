import { gql } from "@apollo/client";

export const FETCH_CAR_REGISTRATION = gql`
  query fetchCarRegistration($carRegistrationId: String!) {
    fetchCarRegistration(carRegistrationId: $carRegistrationId) {
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
