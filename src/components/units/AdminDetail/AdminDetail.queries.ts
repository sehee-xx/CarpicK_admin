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
      user {
        name
        phone
        email
      }
      imageCar {
        url
      }
      imageRegistration {
        url
      }
    }
  }
`;

export const CREATE_CAR = gql`
  mutation createCar($createCarInput: CreateCarInput!) {
    createCar(createCarInput: $createCarInput) {
      id
    }
  }
`;

export const UPDATE_RESERVATION_STATUS = gql`
  mutation updateReservationStatus($reservationId: String!, $status: String!) {
    updateReservationStatus(reservationId: $reservationId, status: $status)
  }
`;

export const FETCH_CAR_CATEGORY = gql`
  query fetchCarCategory {
    fetchCarCategory {
      id
      name
      carModel {
        name
      }
    }
  }
`;
