import AdminLoginUI from "./AdminLogin.presenter";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { useMutation } from "@apollo/client";
import { ADMIN_LOGIN } from "./AdminLogin.queries";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function AdminLoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [loginUser] = useMutation(ADMIN_LOGIN);
  const router = useRouter();

  const schema = yup.object({
    adminId: yup.string().required("아이디는 필수 입력 사항입니다."),
    adminPw: yup.string().required("비밀번호는 필수 입력 사항입니다."),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = async (data: FieldValues) => {
    try {
      const result = await loginUser({
        variables: { adminId: data.adminId, password: data.adminPw },
      });
      setAccessToken(result.data?.adminLogin);
      Modal.success({
        content: "로그인 성공",
        onOk() {
          router.push("/admin");
        },
      });
    } catch (error: any) {
      Modal.error({ content: "로그인 실패 " });
    }
  };
  return (
    <AdminLoginUI
      onClickLogin={onClickLogin}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
