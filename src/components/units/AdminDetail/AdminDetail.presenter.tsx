import * as S from "./AdminDetail.styles";
import DaumPostcode from "react-daum-postcode";
import { IAdminDetailUIProps } from "./AdminDetail.types";
import KakaoMap from "../../commons/kakao-map";

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
            <S.Text>이름: </S.Text>
            <S.Input />
          </S.RowBox>
          <S.RowBox>
            <S.Text>휴대폰번호: </S.Text>
            <S.Input />
          </S.RowBox>
          <S.RowBox>
            <S.Text>주소: </S.Text>
            <S.Input />
          </S.RowBox>
          <S.RowBox>
            <S.Text>차량번호: </S.Text>
            <S.Input />
          </S.RowBox>
          <S.RowBox>
            <S.Text>차종: </S.Text>
            <S.Input />
          </S.RowBox>
          <S.RowBox>
            <S.Text>연료: </S.Text>
            <S.Input />
          </S.RowBox>
          <S.RowBox>
            {/* 하이패스: <S.HighPath>{el.isHipass ? "가능" : "불가능"}</S.HighPath> */}
            <S.Text>하이패스: </S.Text>
            <S.Input />
          </S.RowBox>
          <S.RowBox>
            <S.Text>1시간 금액: </S.Text>
            <S.Input />
          </S.RowBox>
          <S.RowBox>
            <S.Text>계약기간: </S.Text>
            <S.Input />
          </S.RowBox>
          {/* 차량사진, 자동차 등록증 */}
        </S.BodyLeft>
        <S.BodyRight>
          <DaumPostcode autoClose={false} />
          <KakaoMap address={"서울 동작구 신대방동 698-26"} />
        </S.BodyRight>
      </S.Body>
      <S.BodyBottom>
        <S.Text>차량사진</S.Text>
        <S.ImageBox>
          <S.CarImages></S.CarImages>
          <S.CarImages></S.CarImages>
          <S.CarImages></S.CarImages>
        </S.ImageBox>
        <S.Text>자동차 등록증</S.Text>
        <S.ImageBox>
          <S.CarRegistration></S.CarRegistration>
        </S.ImageBox>
      </S.BodyBottom>
      <S.ButtonBox>
        <S.Approve>승인</S.Approve>
        <S.Refuse>거절</S.Refuse>
      </S.ButtonBox>
    </S.Wrapper>
  );
}
