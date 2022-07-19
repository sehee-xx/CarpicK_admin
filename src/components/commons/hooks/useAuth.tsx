import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      if (!newAccessToken) {
        Modal.error({
          content: "관리자 계정으로 로그인 해주세요.",
          onOk() {
            router.push("/admin/login");
          },
        });
      }
    });
  }, []);
}
