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

export const FETCH_CARS = gql`
  query fetchCars($page: Int!, $carLocationId: String!) {
    fetchCars(page: $page, carLocationId: $carLocationId) {
      id
      carNumber
      carModel {
        name
      }
      isHipass
      price
      oil
      contractStart
      contractEnd
      status
      isAvailable
      user {
        name
      }
    }
  }
`;
