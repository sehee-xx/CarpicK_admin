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

export const FETCH_CARS_WITH_DELETED_COUNT = gql`
  query fetchCarCount {
    fetchCarCount
  }
`;

export const FETCH_CARS_WITH_DELETED = gql`
  query fetchCarsWithDeleted($page: Int) {
    fetchCarsWithDeleted(page: $page) {
      id
      carNumber
      carModel {
        name
      }
      isHipass
      price
      oil
      carLocation {
        addressDetail
      }
      contractStart
      contractEnd
      user {
        name
        phone
      }
      isValid
      updatedAt
    }
  }
`;
