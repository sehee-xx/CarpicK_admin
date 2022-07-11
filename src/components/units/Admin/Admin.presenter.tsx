import * as S from "./Admin.styles";

export default function AdminUI() {
  return (
    <S.Wrapper>
      <S.HeaderText>차량 승인 대기 리스트</S.HeaderText>
      <S.DivideLine></S.DivideLine>
      <S.Cars>
        <S.CarInfo>
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
            차량번호: <S.CarNum>1234</S.CarNum>
          </S.RowBox>
          <S.RowBox>
            차종: <S.CarCategory>아반떼</S.CarCategory>
          </S.RowBox>
          <S.RowBox>
            연료: <S.Oil>GASOLINE</S.Oil>
          </S.RowBox>
          <S.RowBox>
            하이패스: <S.HighPath>true</S.HighPath>
          </S.RowBox>
        </S.CarInfo>
        <S.ButtonBox>
          <S.Approve>승인</S.Approve>
          <S.Refuse>거절</S.Refuse>
        </S.ButtonBox>
      </S.Cars>
      <S.DivideLine></S.DivideLine>
    </S.Wrapper>
  );
}
