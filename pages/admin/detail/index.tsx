// 승인 대기 차량 상세 페이지

import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import AdminDetailPage from "../../../src/components/units/AdminDetail/AdminDetail.container";

export default function AdminDetail() {
  useAuth("관리자 계정으로 로그인 해주세요.");
  return <AdminDetailPage />;
}
