import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import AdminUI from "./Admin.presenter";
import {
  FETCH_CARS_WITH_DELETED,
  FETCH_CAR_REGISTRATIONS,
  FETCH_CAR_REGISTRATION_COUNT,
  FETCH_CARS_WITH_DELETED_COUNT,
} from "./Admin.queries";

function getCarList(status: string) {
  if (status === "승인") {
    return useQuery(FETCH_CARS_WITH_DELETED, {
      variables: {
        page: 1,
      },
    });
  } else {
    return useQuery(FETCH_CAR_REGISTRATIONS, {
      variables: {
        page: 1,
      },
    });
  }
}

export default function AdminPage() {
  const router = useRouter();
  const [statusSelect, setStatusSelect] = useState("전체");

  console.log("this is statusselect", statusSelect);
  const { data, refetch } = getCarList(statusSelect);

  const {
    data: dataCarRegistrationCount,
    refetch: refetchCarRegistrationCount,
  } = useQuery(FETCH_CAR_REGISTRATION_COUNT);

  const {
    data: dataCarsWithDeletedCount,
    refetch: refetchdataCarsWithDeletedCountCount,
  } = useQuery(FETCH_CARS_WITH_DELETED_COUNT);

  const onClickMoveToRegistrationDetail = (event: any) => {
    router.push(`/admin/detail_registration/${event.currentTarget.id}`);
  };

  const onClickMoveToCarDetail = (event: any) => {
    router.push(`/admin/detail_car/${event.currentTarget.id}`);
  };

  const StatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusSelect(event.target.value);
  };

  console.log("this is data", data);
  return (
    <AdminUI
      data={data}
      count={
        statusSelect === "전체"
          ? dataCarRegistrationCount?.fetchCarRegistrationCount
          : dataCarsWithDeletedCount?.fetchCarCount
      }
      statusSelect={statusSelect}
      onClickMoveToRegistrationDetail={onClickMoveToRegistrationDetail}
      onClickMoveToCarDetail={onClickMoveToCarDetail}
      refetch={refetch}
      refetchCarRegistrationCount={refetchCarRegistrationCount}
      StatusChange={StatusChange}
    />
  );
}
