import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import AdminUI from "./Admin.presenter";
import {
  FETCH_CARS,
  FETCH_CAR_REGISTRATIONS,
  FETCH_CAR_REGISTRATION_COUNT,
} from "./Admin.queries";

function getCarList(status: string) {
  if (status === "승인") {
    return useQuery(FETCH_CARS, {
      variables: {
        page: 1,
        // carLocationId: ???????
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
  const [statusSelect, setStatusSelect] = useState("");

  console.log(statusSelect);
  const { data, refetch } = getCarList(statusSelect);

  const {
    data: dataCarRegistrationCount,
    refetch: refetchCarRegistrationCount,
  } = useQuery(FETCH_CAR_REGISTRATION_COUNT);

  const onClickMoveToCarDetail = (event: any) => {
    router.push(`/admin/detail/${event.currentTarget.id}`);
  };

  const StatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusSelect(event.target.value);
  };

  return (
    <AdminUI
      data={data}
      count={dataCarRegistrationCount?.fetchCarRegistrationCount}
      statusSelect={statusSelect}
      onClickMoveToCarDetail={onClickMoveToCarDetail}
      refetch={refetch}
      refetchCarRegistrationCount={refetchCarRegistrationCount}
      StatusChange={StatusChange}
    />
  );
}
