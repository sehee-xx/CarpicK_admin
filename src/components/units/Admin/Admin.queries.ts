import { gql } from "@apollo/client";

export const FETCH_CAR_REGISTRATIONS = gql`
  query fetchCarRegistrations($page: Float!) {
    fetchCarRegistrations(page: $page) {
      id
      carNumber
      isHipass
      model
      oil
      address
      status
      user {
        name
        phone
      }
      imageCar {
        url
      }
      imageRegistration {
        url
      }
      status
      createdAt
    }
  }
`;

export const FETCH_CAR_REGISTRATION_COUNT = gql`
  query fetchCarRegistrationCount {
    fetchCarRegistrationCount
  }
`;
