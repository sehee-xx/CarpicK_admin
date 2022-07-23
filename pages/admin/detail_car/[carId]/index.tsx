// 승인 대기 차량 상세 페이지

import { useAuth } from "../../../../src/components/commons/hooks/useAuth";
import AdminDetailCarPage from "../../../../src/components/units/AdminDetailCar/AdminDetail.container";

export default function AdminDetail() {
  useAuth();

  return <AdminDetailCarPage />;
}
