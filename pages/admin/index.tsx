// 승인 대기 차량 리스트 페이지

import { useAuth } from "../../src/components/commons/hooks/useAuth";
import AdminPage from "../../src/components/units/Admin/Admin.container";

export default function Admin() {
  useAuth();
  return <AdminPage />;
}
