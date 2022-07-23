import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import AdminDetailUI from "./AdminDetail.presenter";
import {
  CREATE_CAR,
  CREATE_CAR_CATEGORY,
  CREATE_CAR_MODEL,
  DELETE_CAR_CATEGORY,
  DELETE_CAR_MODEL,
  FETCH_CAR_CATEGORY,
  FETCH_CAR_REGISTRATION,
  UPDATE_REGISTRATION_STATUS,
} from "./AdminDetail.queries";
import moment from "moment";

export default function AdminDetailRegistrationPage() {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [latLng, setLatlng] = useState([]);
  const [addressDetail, setAddressDetail] = useState("");
  const [price, setPrice] = useState("100");
  const [contractPeriod, setContractPeriod] = useState("");
  const [fixCarName, setFixCarName] = useState("");
  const [updateCarCategory, setUpdateCarCategory] = useState("");
  const [updateCarModel, setUpdateCarModel] = useState("");
  const [carCategoryOp, setCarCategoryOp] = useState([{}]);
  const [selected, setSelected] = useState("");

  const [contractStart, setContractStart] = useState(new Date());
  const [contractEnd, setContractEnd] = useState(new Date());

  const [createCar] = useMutation(CREATE_CAR);
  const [updateCarRegistrationStatus] = useMutation(UPDATE_REGISTRATION_STATUS);
  const [createCarCategory] = useMutation(CREATE_CAR_CATEGORY);
  const [createCarModel] = useMutation(CREATE_CAR_MODEL);
  const [deleteCarCategory] = useMutation(DELETE_CAR_CATEGORY);
  const [deleteCarModel] = useMutation(DELETE_CAR_MODEL);

  const { data } = useQuery(FETCH_CAR_REGISTRATION, {
    variables: { carRegistrationId: router.query.carId },
  });

  const { data: carModel, refetch } = useQuery(FETCH_CAR_CATEGORY);

  useEffect(() => {
    setAddress(data?.fetchCarRegistration.address);
  }, [data]);

  useEffect(() => {
    if (carModel !== undefined) {
      setCarCategoryOp(
        carModel.fetchCarCategory.map((el) => ({
          value: el.name,
          label: el.name,
        }))
      );
    }
  }, [carModel]);

  const selectedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);

    const temp = carModel?.fetchCarCategory.filter((el) => {
      return el.name === event.target.value;
    })[0];
    setFixCarName(temp.carModel[0].name);
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
  };

  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const onChangeContractPeriod = (event: ChangeEvent<HTMLInputElement>) => {
    setContractPeriod(event.target.value);
  };

  const onChangeAddCarCategory = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdateCarCategory(event.target.value);
  };

  const onChangeAddCarModel = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdateCarModel(event.target.value);
  };

  const onClickAddCarCategory = async () => {
    try {
      const result = carModel?.fetchCarCategory.filter((el) => {
        return el.name === updateCarCategory;
      });
      if (result.length === 0) {
        const creatCarCategoryResult = await createCarCategory({
          variables: {
            createCarCategoryInput: {
              name: updateCarCategory,
            },
          },
        });
      }
      const createCarModelResult = await createCarModel({
        variables: {
          createCarModelInput: {
            name: updateCarModel,
            carCategoryName: updateCarCategory,
          },
        },
      });
      Modal.success({
        content: "차량 추가 완료",
        onOk() {
          refetch();
          setUpdateCarCategory("");
          setUpdateCarModel("");
        },
      });
    } catch (error: any) {
      Modal.error({ content: error.messgae, title: "에러" });
    }
  };

  const onClickDeleteCarCategory = async () => {
    try {
      const result = carModel?.fetchCarCategory.filter((el) => {
        return el.name === updateCarCategory;
      });
      if (result[0].carModel.length === 1) {
        deleteCarCategory({
          variables: {
            carCategoryId: result[0].id,
          },
        });
      } else {
        const deleteModelIdx = result[0].carModel.filter((el) => {
          return el.name === updateCarModel;
        });
        deleteCarModel({
          variables: {
            carModelId: deleteModelIdx[0].id,
          },
        });
      }
      refetch();
      Modal.success({ content: "차량 삭제 완료" });
    } catch (error: any) {
      Modal.error({ content: error.messgae });
    }
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
            userId: data?.fetchCarRegistration.user.id,
            carModelName: fixCarName,
            carLocation: {
              address: address,
              addressDetail: addressDetail,
              lat: Number(latLng[0]),
              lng: Number(latLng[1]),
            },
            carUrl: data?.fetchCarRegistration.imageCar.map((el) => el.url),
            registrationUrl: data?.fetchCarRegistration.imageRegistration.url,
            contractStart: moment(contractStart, "YYYY-MM-DD"),
            contractEnd: moment(contractEnd, "YYYY-MM-DD"),
          },
        },
      });

      const resultUpdateRegistrationStatus = await updateCarRegistrationStatus({
        variables: {
          carRegistrationId: data?.fetchCarRegistration.id,
          status: "PASS",
        },
      });
      Modal.success({ content: "승인 완료" });
      router.push("/admin");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickRefuse = async () => {
    const resultUpdateReservationStatus = await updateCarRegistrationStatus({
      variables: {
        carRegistrationId: data?.fetchCarRegistration.id,
        status: "FAIL",
      },
    });
    Modal.error({ content: "승인 거절" });
    router.push("/admin");
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
      updateCarCategory={updateCarCategory}
      updateCarModel={updateCarModel}
      contractStart={contractStart}
      contractEnd={contractEnd}
      setSelected={setSelected}
      handleComplete={handleComplete}
      selectedChange={selectedChange}
      fixCarNameChange={fixCarNameChange}
      setLatlng={setLatlng}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangePrice={onChangePrice}
      onChangeContractPeriod={onChangeContractPeriod}
      onChangeAddCarCategory={onChangeAddCarCategory}
      onChangeAddCarModel={onChangeAddCarModel}
      onClickApprove={onClickApprove}
      onClickRefuse={onClickRefuse}
      onClickAddCarCategory={onClickAddCarCategory}
      onClickDeleteCarCategory={onClickDeleteCarCategory}
      setContractStart={setContractStart}
      setContractEnd={setContractEnd}
    />
  );
}
