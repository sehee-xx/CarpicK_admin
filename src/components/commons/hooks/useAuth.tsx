import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth(contents: string) {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.info({
        content: contents,
        onOk() {
          router.push("/admin/login");
        },
      });
    }
  }, []);
}
