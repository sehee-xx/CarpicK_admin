import * as S from "./AdminLogin.styles";
import { IAdminLoginUIUIProps } from "./AdminLogin.types";

export default function AdminLoginUI(props: IAdminLoginUIUIProps) {
  return (
    <S.Wrapper>
      <S.HeaderText>관리자 로그인</S.HeaderText>
      <S.LoginContents>
        <S.RowBox>
          <S.Text>ID: </S.Text>
          <S.AdminId
            onChange={props.onChangeAdminId}
            placeholder="아이디를 입력해주세요."
          ></S.AdminId>
        </S.RowBox>
        <S.RowBox>
          <S.Text>PW: </S.Text>
          <S.AdminPw
            onChange={props.onChangeAdminPw}
            placeholder="비밀번호를 입력해주세요."
          ></S.AdminPw>
        </S.RowBox>
        <S.LoginButton onClick={props.onClickLogin}>Login</S.LoginButton>
      </S.LoginContents>
    </S.Wrapper>
  );
}
