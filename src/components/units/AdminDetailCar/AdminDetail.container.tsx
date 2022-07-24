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
  FETCH_CAR_WITH_DELETED,
  UPDATE_REGISTRATION_STATUS,
  STOP_CONTRACT,
  RESTART_CONTRACT,
  REFRESH_CONTRACT,
} from "./AdminDetail.queries";
import moment from "moment";

export default function AdminDetailCarPage() {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [latLng, setLatlng] = useState([]);
  const [addressDetail, setAddressDetail] = useState("");
  const [price, setPrice] = useState("");
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
  const [stopContract] = useMutation(STOP_CONTRACT);
  const [restartContract] = useMutation(RESTART_CONTRACT);
  const [refreshContract] = useMutation(REFRESH_CONTRACT);

  const { data } = useQuery(FETCH_CAR_WITH_DELETED, {
    variables: { carId: router.query.carId },
  });
  console.log("test data", data);
  const { data: carModel, refetch } = useQuery(FETCH_CAR_CATEGORY);

  useEffect(() => {
    setAddress(data?.fetchCarWithDeleted.carLocation.addressDetail);
  }, [data]);

  useEffect(() => {
    if (carModel !== undefined) {
      setCarCategoryOp(
        carModel.fetchCarCategory.map((el: any) => ({
          value: el.name,
          label: el.name,
        }))
      );
    }
  }, [carModel]);

  const selectedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);

    const temp = carModel?.fetchCarCategory.filter((el: any) => {
      return el.name === event.target.value;
    })[0];
    setFixCarName(temp.carModel[0].name);
  };

  const fixCarNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFixCarName(event.target.value);
  };

  const handleComplete = (data: any) => {
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
      const result = carModel?.fetchCarCategory.filter((el: any) => {
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
      const result = carModel?.fetchCarCategory.filter((el: any) => {
        return el.name === updateCarCategory;
      });
      if (result[0].carModel.length === 1) {
        deleteCarCategory({
          variables: {
            carCategoryId: result[0].id,
          },
        });
      } else {
        const deleteModelIdx = result[0].carModel.filter((el: any) => {
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

  const onClickStop = async () => {
    if (!data.fetchCarWithDeleted.isValid) {
      Modal.error({ content: "이미 운행중지된 차량입니다." });
      return;
    }
    try {
      await stopContract({
        variables: {
          carId: router.query.carId,
        },
      });

      Modal.success({ content: "해당차량의 운행이 중지됩니다." });
      router.push("/admin");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickRestart = async () => {
    if (data.fetchCarWithDeleted.isValid) {
      Modal.error({ content: "이미 운행중인 차량입니다." });
      return;
    }

    try {
      await restartContract({
        variables: {
          carId: router.query.carId,
        },
      });

      Modal.success({ content: "승인 완료" });
      router.push("/admin");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickRefresh = async () => {
    try {
      await refreshContract({
        variables: {
          contractStart: moment(contractStart, "YYYY-MM-DD"),
          contractEnd: moment(contractEnd, "YYYY-MM-DD"),
          carId: router.query.carId,
        },
      });

      Modal.success({ content: "계약 기간 재생성 완료" });
      router.push("/admin");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
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
      onClickStop={onClickStop}
      onClickRestart={onClickRestart}
      onClickRefresh={onClickRefresh}
      onClickAddCarCategory={onClickAddCarCategory}
      onClickDeleteCarCategory={onClickDeleteCarCategory}
      setContractStart={setContractStart}
      setContractEnd={setContractEnd}
    />
  );
}
