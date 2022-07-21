import * as S from "./Admin.styles";
import { IAdminUIProps } from "./Admin.types";
import Paginations01 from "../../commons/pagination/Pagination.container";

export default function AdminUI(props: IAdminUIProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderText>
          {props.statusSelect === "승인"
            ? "승인 차량 리스트"
            : "마이카 등록 접수 리스트"}
        </S.HeaderText>
        <S.StatusSelect
          onChange={props.StatusChange}
          // onClick={props.onClickMoveToPass}
        >
          <option key="전체" value="전체">
            전체
          </option>
          <option key="승인" value="승인">
            승인
          </option>
        </S.StatusSelect>
      </S.Header>
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
      <S.Pagination>
        <Paginations01 refetch={props.refetch} count={props.count} />
      </S.Pagination>
    </S.Wrapper>
  );
}
