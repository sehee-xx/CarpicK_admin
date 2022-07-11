import AdminLoginUI from "./AdminLogin.presenter";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { useMutation } from "@apollo/client";
import { ADMIN_LOGIN } from "./AdminLogin.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { useState } from "react";

export default function AdminLoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation(ADMIN_LOGIN);
  const [adminId, setAdminId] = useState("");
  const [adminPw, setAdminPw] = useState("");
  const router = useRouter();

  const onChangeAdminId = (event: any) => {
    setAdminId(event.target.value);
  };

  const onChangeAdminPw = (event: any) => {
    setAdminPw(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: { adminId: adminId, password: adminPw },
      });
      console.log(result);
      // const accessToken = result.data.adminLogin.accessToken;
      // setAccessToken(accessToken);
      // localStorage.setItem("accessToken", accessToken);
      Modal.success({ content: "로그인 성공" });
      router.push("/admin");
    } catch (error: any) {
      Modal.error({ content: "로그인 실패 " });
    }
  };
  return (
    <AdminLoginUI
      onClickLogin={onClickLogin}
      onChangeAdminId={onChangeAdminId}
      onChangeAdminPw={onChangeAdminPw}
    />
  );
}
