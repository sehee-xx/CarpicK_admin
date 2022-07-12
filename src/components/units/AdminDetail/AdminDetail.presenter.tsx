import * as S from "./AdminDetail.styles";
import DaumPostcode from "react-daum-postcode";

export default function AdminDetailUI() {
  return (
    <S.Wrapper>
      <S.HeaderText>차량 상세 정보</S.HeaderText>
      <S.Body>
        <S.BodyLeft>
          <S.RowBox>
            이름: <S.Name>홍길동</S.Name>
          </S.RowBox>
          <S.RowBox>
            전화번호: <S.PhoneNum>111-111-1111</S.PhoneNum>
          </S.RowBox>
          <S.RowBox>
            주소: <S.Address>서울 구로구</S.Address>
          </S.RowBox>
          <S.RowBox>
            차량번호: <S.CarNum>1234가</S.CarNum>
          </S.RowBox>
          <S.RowBox>
            차종: <S.CarCategory>아반떼</S.CarCategory>
          </S.RowBox>
          <S.RowBox>
            연료: <S.Oil>GASOLINE</S.Oil>
          </S.RowBox>
          <S.RowBox>
            {/* 하이패스: <S.HighPath>{el.isHipass ? "가능" : "불가능"}</S.HighPath> */}
            하이패스: <S.HighPath>가능</S.HighPath>
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
