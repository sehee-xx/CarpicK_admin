// 차량 카테고리 추가 페이지

import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import AdminCategoryPage from "../../../src/components/units/AdminCategory/AdminCategory.container";

export default function AdminDCategory() {
  useAuth("관리자 계정으로 로그인 해주세요.");
  return <AdminCategoryPage />;
}
