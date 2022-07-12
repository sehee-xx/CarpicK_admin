// 승인 대기 차량 상세 페이지

import { useAuth } from "../../../../src/components/commons/hooks/useAuth";
import AdminDetailPage from "../../../../src/components/units/AdminDetail/AdminDetail.container";

export default function AdminDetail() {
  useAuth();
  return <AdminDetailPage />;
}
