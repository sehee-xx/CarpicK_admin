import * as S from "./Admin.styles";
import { IAdminUIProps } from "./Admin.types";
import Paginations01 from "../../commons/paginations/Paginations01.container";

export default function AdminUI(props: IAdminUIProps) {
  return (
    <S.Wrapper>
      <S.HeaderText>마이카 등록 접수 리스트</S.HeaderText>
      <S.Table>
        <S.RowTop>
          <S.ColumnHeaderBasic>이름</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>전화번호</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>주소</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>차량번호</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>차량모델</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>연료</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>하이패스</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>접수날짜</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>승인여부</S.ColumnHeaderBasic>
        </S.RowTop>
        {props.data?.fetchCarRegistrations.map((el: any) => (
          <S.Row id={el.id} onClick={props.onClickMoveToCarDetail}>
            <S.ColumnBasic>
              <S.Contents>{el.user?.name}</S.Contents>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.Contents>{el.user?.phone}</S.Contents>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.Contents>{el.address}</S.Contents>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.Contents>{el.carNumber}</S.Contents>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.Contents>{el.model}</S.Contents>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.Contents>{el.oil}</S.Contents>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.Contents>{el.isHipass ? "가능" : "불가능"}</S.Contents>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.Contents>
                {el.createdAt.slice(0, 10).replace(/-/gi, ".")}
              </S.Contents>
            </S.ColumnBasic>
            <S.ColumnBasic>
              <S.Status status={el.status}>{el.status}</S.Status>
            </S.ColumnBasic>
          </S.Row>
        ))}
      </S.Table>
      <S.Paginations>
        <Paginations01 refetch={props.refetch} count={props.count} />
      </S.Paginations>
    </S.Wrapper>
  );
}
