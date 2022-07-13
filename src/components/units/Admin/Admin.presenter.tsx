import * as S from "./Admin.styles";
import { IAdminUIProps } from "./Admin.types";
import { v4 as uuidv4 } from "uuid";
import Paginations01 from "../../commons/paginations/Paginations01.container";

export default function AdminUI(props: IAdminUIProps) {
  console.log(props.data);
  return (
    <S.Wrapper>
      <S.HeaderText>마이카 등록 접수 리스트</S.HeaderText>
      <S.DivideLine></S.DivideLine>
      <S.Table>
        <S.TableTop />
        <S.RowTop>
          <S.ColumnHeaderBasic>이름</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>전화번호</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>주소</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>차량번호</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>차종</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>연료</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>하이패스</S.ColumnHeaderBasic>
        </S.RowTop>
        {props.data?.fetchCarRegistrations.map((el: any) => (
          <div key={uuidv4()}>
            <S.Row id={el.id} onClick={props.onClickMoveToCarDetail}>
              <S.CarInfo>
                <S.RowBox>
                  <S.Name>{el.user.name}</S.Name>
                </S.RowBox>
                <S.RowBox>
                  <S.PhoneNum>{el.user.phone}</S.PhoneNum>
                </S.RowBox>
                <S.RowBox>
                  <S.Address>{el.address}</S.Address>
                </S.RowBox>
                <S.RowBox>
                  <S.CarNum>{el.carNumber}</S.CarNum>
                </S.RowBox>
                <S.RowBox>
                  <S.CarCategory>{el.model}</S.CarCategory>
                </S.RowBox>
                <S.RowBox>
                  <S.Oil>{el.oil}</S.Oil>
                </S.RowBox>
                <S.RowBox>
                  <S.HighPath>{el.isHipass ? "가능" : "불가능"}</S.HighPath>
                </S.RowBox>
              </S.CarInfo>
            </S.Row>
            <S.DivideLine></S.DivideLine>
          </div>
        ))}
      </S.Table>
      <Paginations01 refetch={props.refetch} count={props.count} />
    </S.Wrapper>
  );
}
