import * as S from "./AdminDetail.styles";
import DaumPostcode from "react-daum-postcode";
import { IAdminDetailUIProps } from "./AdminDetail.types";
import KakaoMap from "../../commons/kakao-map";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { Image } from "antd";

export default function AdminDetailUI(props: IAdminDetailUIProps) {
  return (
    <S.Wrapper>
      <S.HeaderText isValid={props.data?.fetchCarWithDeleted.isValid}>
        {props.data?.fetchCarWithDeleted.carNumber} 운행차량 상세 정보
        <S.StatusText>
          {props.data?.fetchCarWithDeleted.isValid ? "정상운행중" : "운행중지"}
        </S.StatusText>
      </S.HeaderText>
      <S.Body>
        <S.BodyLeft>
          <S.RowBox>
            <S.Text>이름: </S.Text>
            <S.Input defaultValue={props.data?.fetchCarWithDeleted.user.name} />
          </S.RowBox>
          <S.RowBox>
            <S.Text>UserId: </S.Text>
            <S.Input defaultValue={props.data?.fetchCarWithDeleted.user.id} />
          </S.RowBox>
          <S.RowBox>
            <S.Text>전화번호: </S.Text>
            <S.Input
              defaultValue={props.data?.fetchCarWithDeleted.user.phone}
            />
          </S.RowBox>
          <S.RowBox>
            <S.Text>주소: </S.Text>
            <S.Input
              defaultValue={props.data?.fetchCarWithDeleted.carLocation.address}
            />
          </S.RowBox>
          <S.RowBox>
            <S.Text>상세주소: </S.Text>
            <S.Input
              defaultValue={
                props.data?.fetchCarWithDeleted.carLocation.addressDetail
              }
              onChange={props.onChangeAddressDetail}
            />
          </S.RowBox>
          <S.RowBox>
            <S.Text>위도: </S.Text>
            <S.Input defaultValue={props.latLng[0]} />
          </S.RowBox>
          <S.RowBox>
            <S.Text>경도: </S.Text>
            <S.Input defaultValue={props.latLng[1]} />
          </S.RowBox>
          <S.RowBox>
            <S.Text>차량번호: </S.Text>
            <S.Input defaultValue={props.data?.fetchCarWithDeleted.carNumber} />
          </S.RowBox>
          <S.RowBox>
            <S.Text>▸ 모델:</S.Text>
            <S.CarModel onChange={props.fixCarNameChange}>
              <option selected disabled>
                모델 선택
              </option>
              {props.carModel?.fetchCarCategory
                .filter((el: any) => {
                  return el.name === props.selected;
                })[0]
                ?.carModel?.map((el: any, idx: any) => {
                  return (
                    <option key={idx} value={el.name}>
                      {el.name}
                    </option>
                  );
                })}
            </S.CarModel>
          </S.RowBox>
          <S.RowBox>
            <S.Text>연료: </S.Text>
            <S.Input defaultValue={props.data?.fetchCarWithDeleted.oil} />
          </S.RowBox>
          <S.RowBox>
            <S.Text>하이패스: </S.Text>
            <S.Input defaultValue={props.data?.fetchCarWithDeleted.isHipass} />
          </S.RowBox>
          <S.RowBox>
            <S.Text>1시간 금액: </S.Text>
            <S.Input
              defaultValue={props.data?.fetchCarWithDeleted.price}
              onChange={props.onChangePrice}
            />
          </S.RowBox>
          <S.RowBox>
            <S.ColumnBox>
              <S.Text>계약 시작일: </S.Text>
              <S.Date>
                {moment(props.contractStart).format("YYYY.MM.DD")}
              </S.Date>
            </S.ColumnBox>
            <Calendar
              onChange={props.setContractStart}
              value={props.contractStart}
            />
          </S.RowBox>
          <S.RowBox>
            <S.ColumnBox>
              <S.Text>계약 종료일: </S.Text>
              <S.Date>{moment(props.contractEnd).format("YYYY.MM.DD")}</S.Date>
            </S.ColumnBox>
            <Calendar
              onChange={props.setContractEnd}
              value={props.contractEnd}
            />
          </S.RowBox>
        </S.BodyLeft>
        <S.BodyRight>
          <S.Text>차량사진</S.Text>
          <S.ImageBox>
            {props.data?.fetchCarWithDeleted.imageCar.map((el: any) => {
              return (
                <Image
                  width={200}
                  src={`https://storage.cloud.google.com/${el.url}`}
                ></Image>
              );
            })}
          </S.ImageBox>
          <S.PostMapWrapper>
            <DaumPostcode
              focusInput={props.data?.fetchCarWithDeleted.address}
              autoClose={false}
              onComplete={props.handleComplete}
            />
            <KakaoMap setLatlng={props.setLatlng} address={props.address} />
          </S.PostMapWrapper>
          <S.ButtonBox>
            <S.StopContract onClick={props.onClickStop}>
              운행중지
            </S.StopContract>
            <S.ReStartContract onClick={props.onClickRestart}>
              운행 재시작
            </S.ReStartContract>
          </S.ButtonBox>
          <S.ButtonBox>
            <S.RefreshContract onClick={props.onClickRefresh}>
              계약 기간 재생성
            </S.RefreshContract>
          </S.ButtonBox>
        </S.BodyRight>
      </S.Body>
    </S.Wrapper>
  );
}
