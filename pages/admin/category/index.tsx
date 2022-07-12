// 차량 카테고리 추가 페이지

import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import AdminCategoryPage from "../../../src/components/units/AdminCategory/AdminCategory.container";

export default function AdminDCategory() {
  useAuth();
  return <AdminCategoryPage />;
}
