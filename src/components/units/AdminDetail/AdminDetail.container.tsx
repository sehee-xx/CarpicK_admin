import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import AdminDetailUI from "./AdminDetail.presenter";
import { FETCH_CAR_REGISTRATION } from "./AdminDetail.queries";

export default function AdminDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_CAR_REGISTRATION, {
    variables: { carRegistrationId: router.query.carId },
  });
  console.log("this is id", router.query.carId);
  return <AdminDetailUI data={data} />;
}
