import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import AdminUI from "./Admin.presenter";
import {
  FETCH_CAR_REGISTRATIONS,
  FETCH_CAR_REGISTRATION_COUNT,
} from "./Admin.queries";

export default function AdminPage() {
  const router = useRouter();

  const { data, refetch } = useQuery(FETCH_CAR_REGISTRATIONS, {
    variables: {
      page: 1,
    },
  });

  const {
    data: dataCarRegistrationCount,
    refetch: refetchCarRegistrationCount,
  } = useQuery(FETCH_CAR_REGISTRATION_COUNT);

  const onClickMoveToCarDetail = (event: any) => {
    router.push(`/admin/detail/${event.currentTarget.id}`);
  };

  return (
    <AdminUI
      data={data}
      count={dataCarRegistrationCount?.fetchCarRegistrationCount}
      onClickMoveToCarDetail={onClickMoveToCarDetail}
      refetch={refetch}
      refetchCarRegistrationCount={refetchCarRegistrationCount}
    />
  );
}
