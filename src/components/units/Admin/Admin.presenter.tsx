import * as S from "./Admin.styles";
import { IAdminUIProps } from "./Admin.types";
import Paginations01 from "../../commons/paginations/Paginations01.container";

export default function AdminUI(props: IAdminUIProps) {
  console.log(props.data);
  return (
    <S.Wrapper>
      <S.HeaderText>마이카 등록 접수 리스트</S.HeaderText>
      <S.Table>
        <S.RowTop>
          <S.ColumnHeaderBasic>이름</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>전화번호</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>주소</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>차량번호</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>차종</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>연료</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>하이패스</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>접수날짜</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>승인여부</S.ColumnHeaderBasic>
        </S.RowTop>
        {props.data?.fetchCarRegistrations.map((el: any) => (
          <S.Row id={el.id} onClick={props.onClickMoveToCarDetail}>
            <S.ColumnBasic>
              <S.Name>{el.user?.name}</S.Name>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.PhoneNum>{el.user?.phone}</S.PhoneNum>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.Address>{el.address}</S.Address>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.CarNum>{el.carNumber}</S.CarNum>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.CarCategory>{el.model}</S.CarCategory>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.Oil>{el.oil}</S.Oil>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.HiPass>{el.isHipass ? "가능" : "불가능"}</S.HiPass>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.Date>{el.createdAt.slice(0, 10).replace(/-/gi, ".")}</S.Date>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.Status>{el.status}</S.Status>
            </S.ColumnBasic>
          </S.Row>
        ))}
      </S.Table>
      <Paginations01 refetch={props.refetch} count={props.count} />
    </S.Wrapper>
  );
}
