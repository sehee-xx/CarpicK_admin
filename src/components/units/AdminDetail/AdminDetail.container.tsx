import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import AdminDetailUI from "./AdminDetail.presenter";
import {
  CREATE_CAR,
  FETCH_CAR_CATEGORY,
  FETCH_CAR_REGISTRATION,
  UPDATE_RESERVATION_STATUS,
} from "./AdminDetail.queries";

export default function AdminDetailPage() {
  const carCategoryOp = [
    { value: "전기", label: "전기" },
    { value: "경형", label: "경형" },
    { value: "세단", label: "세단" },
    { value: "SUV", label: "SUV" },
  ];

  const router = useRouter();
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [latLng, setLatlng] = useState([]);
  const [addressDetail, setAddressDetail] = useState("");
  const [price, setPrice] = useState("");
  const [contractPeriod, setContractPeriod] = useState("");
  const [selected, setSelected] = useState(carCategoryOp[0].value);
  const [fixCarName, setFixCarName] = useState("");

  const [createCar] = useMutation(CREATE_CAR);
  const [updateReservationStatus] = useMutation(UPDATE_RESERVATION_STATUS);
  const { data } = useQuery(FETCH_CAR_REGISTRATION, {
    variables: { carRegistrationId: router.query.carId },
  });

  useEffect(() => {
    setAddress(data?.fetchCarRegistration.address);
  }, [data]);

  const { data: carModel } = useQuery(FETCH_CAR_CATEGORY);

  const selectedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  const fixCarNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFixCarName(event.target.value);
  };

  const handleComplete = (data) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
    console.log(addressDetail);
  };

  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
    console.log(price);
  };

  const onChangeContractPeriod = (event: ChangeEvent<HTMLInputElement>) => {
    setContractPeriod(event.target.value);
    console.log(contractPeriod);
  };

  const onClickApprove = async () => {
    try {
      const resultCreateCar = await createCar({
        variables: {
          createCarInput: {
            carNumber: data?.fetchCarRegistration.carNumber,
            isHipass: data?.fetchCarRegistration.isHipass,
            price: Number(price),
            oil: data?.fetchCarRegistration.oil,
            contractPeriod: contractPeriod,
            ownerEmail: String(data?.fetchCarRegistration.ownerEmail),
            carModelName: fixCarName,
            carLocation: {
              address: address,
              addressDetail: addressDetail,
              lat: Number(latLng[0]),
              lng: Number(latLng[1]),
            },
            carUrl: data?.fetchCarRegistration.imageCar.map((el) => el.url),
            registrationUrl: data?.fetchCarRegistration.imageRegistration.url,
          },
        },
      });
      console.log(resultCreateCar);

      const resultUpdateReservationStatus = await updateReservationStatus({
        variables: {
          carRegistrationId: data?.fetchCarRegistration.id,
          status: "PASS",
        },
      });
      console.log(resultUpdateReservationStatus);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickRefuse = async () => {
    const resultUpdateReservationStatus = await updateReservationStatus({
      variables: {
        carRegistrationId: data?.fetchCarRegistration.id,
        status: "FAIL",
      },
    });
    console.log(resultUpdateReservationStatus);
  };

  return (
    <AdminDetailUI
      data={data}
      address={address}
      zipcode={zipcode}
      latLng={latLng}
      selected={selected}
      carCategoryOp={carCategoryOp}
      carModel={carModel}
      fixCarName={fixCarName}
      setSelected={setSelected}
      handleComplete={handleComplete}
      selectedChange={selectedChange}
      fixCarNameChange={fixCarNameChange}
      setLatlng={setLatlng}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangePrice={onChangePrice}
      onChangeContractPeriod={onChangeContractPeriod}
      onClickApprove={onClickApprove}
      onClickRefuse={onClickRefuse}
    />
  );
}
