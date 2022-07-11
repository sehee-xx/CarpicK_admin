import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import AdminUI from "./Admin.presenter";
import { FETCH_CAR_REGISTRATIONS } from "./Admin.queries";

export default function AdminPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_CAR_REGISTRATIONS, {
    variables: {
      page: 1,
    },
  });

  const onClickMoveToCarDetail = (event: any) => {
    router.push(`/admin/detail/${event.currentTarget.id}`);
  };

  return (
    <AdminUI data={data} onClickMoveToCarDetail={onClickMoveToCarDetail} />
  );
}
