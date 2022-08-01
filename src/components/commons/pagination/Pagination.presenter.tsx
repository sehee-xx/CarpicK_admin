import { Page } from "./Pagination.styles";
import { IPaginationUIProps } from "./Pagination.types";
import * as S from "./Pagination.styles";

export default function PaginationsUI(props: IPaginationUIProps) {
  return (
    <S.Wrapper>
      {props.activedPage !== 1 && (
        <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      )}
      {new Array(10).fill(1).map(
        (_, index) =>
          props.startPage + index <= props.lastPage && (
            <Page
              key={props.startPage + index}
              onClick={props.onClickPage}
              id={String(props.startPage + index)}
              isActive={props.startPage + index === props.activedPage}
            >
              {props.startPage + index}
            </Page>
          )
      )}
      {props.activedPage !== props.lastPage && (
        <Page onClick={props.onClickNextPage}>{`>`}</Page>
      )}
    </S.Wrapper>
  );
}
