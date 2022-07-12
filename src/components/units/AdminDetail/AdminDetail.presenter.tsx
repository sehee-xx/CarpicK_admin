import * as S from "./AdminDetail.styles";
import DaumPostcode from "react-daum-postcode";
import { IAdminDetailUIProps } from "./AdminDetail.types";

export default function AdminDetailUI(props: IAdminDetailUIProps) {
  console.log(props.data);
  return (
    <S.Wrapper>
      <S.HeaderText>
        {props.data?.fetchCarRegistration.id} 차량 상세 정보
      </S.HeaderText>
      <S.Body>
        <S.BodyLeft>
          <S.RowBox>
            이름: <S.Name />
          </S.RowBox>
          <S.RowBox>
            전화번호: <S.PhoneNum />
          </S.RowBox>
          <S.RowBox>
            주소: <S.Address />
          </S.RowBox>
          <S.RowBox>
            차량번호: <S.CarNum />
          </S.RowBox>
          <S.RowBox>
            차종: <S.CarCategory />
          </S.RowBox>
          <S.RowBox>
            연료: <S.Oil />
          </S.RowBox>
          <S.RowBox>
            {/* 하이패스: <S.HighPath>{el.isHipass ? "가능" : "불가능"}</S.HighPath> */}
            하이패스: <S.HighPath />
          </S.RowBox>
        </S.BodyLeft>
        <S.BodyRight>
          <DaumPostcode />
        </S.BodyRight>
      </S.Body>
      <S.ButtonBox>
        <S.Approve>승인</S.Approve>
        <S.Refuse>거절</S.Refuse>
      </S.ButtonBox>
    </S.Wrapper>
  );
}
