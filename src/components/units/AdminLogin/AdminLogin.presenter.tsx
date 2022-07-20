import * as S from "./AdminLogin.styles";
import { IAdminLoginUIProps } from "./AdminLogin.types";

export default function AdminLoginUI(props: IAdminLoginUIProps) {
  return (
    <S.Wrapper onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.HeaderText>관리자 로그인</S.HeaderText>
      <S.LoginContents>
        <S.RowBox>
          <S.Text>ID: </S.Text>
          <S.ColumnBox>
            <S.AdminId
              {...props.register("adminId")}
              placeholder="아이디를 입력해주세요."
            />
            <S.ErrorBox>{props.formState.errors.adminId?.message}</S.ErrorBox>
          </S.ColumnBox>
        </S.RowBox>
        <S.RowBox>
          <S.Text>PW: </S.Text>
          <S.ColumnBox>
            <S.AdminPw
              {...props.register("adminPw")}
              placeholder="비밀번호를 입력해주세요."
            />
            <S.ErrorBox>{props.formState.errors.adminPw?.message}</S.ErrorBox>
          </S.ColumnBox>
        </S.RowBox>
        <S.LoginButton>Login</S.LoginButton>
      </S.LoginContents>
    </S.Wrapper>
  );
}
