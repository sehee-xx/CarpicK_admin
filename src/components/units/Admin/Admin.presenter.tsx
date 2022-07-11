import * as S from "./Admin.styles";
import { IAdminUIProps } from "./Admin.types";
import { v4 as uuidv4 } from "uuid";

export default function AdminUI(props: IAdminUIProps) {
  console.log(props.data);
  return (
    <S.Wrapper>
      <S.HeaderText>차량 승인 대기 리스트</S.HeaderText>
      <S.DivideLine></S.DivideLine>
      {props.data?.fetchCarRegistrations.map((el: any) => (
        <div key={uuidv4()}>
          <S.Cars id={el.id} onClick={props.onClickMoveToCarDetail}>
            <S.CarInfo>
              <S.RowBox>
                이름: <S.Name></S.Name>
              </S.RowBox>
              <S.RowBox>
                전화번호: <S.PhoneNum></S.PhoneNum>
              </S.RowBox>
              <S.RowBox>
                주소: <S.Address>{el.address}</S.Address>
              </S.RowBox>
              <S.RowBox>
                차량번호: <S.CarNum>{el.carNumber}</S.CarNum>
              </S.RowBox>
              <S.RowBox>
                차종: <S.CarCategory>{el.model}</S.CarCategory>
              </S.RowBox>
              <S.RowBox>
                연료: <S.Oil>{el.oil}</S.Oil>
              </S.RowBox>
              <S.RowBox>
                하이패스:{" "}
                <S.HighPath>{el.isHipass ? "가능" : "불가능"}</S.HighPath>
              </S.RowBox>
            </S.CarInfo>
          </S.Cars>
          <S.DivideLine></S.DivideLine>
        </div>
      ))}
    </S.Wrapper>
  );
}
