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
      <S.HeaderText>
        {props.data?.fetchCarRegistration.carNumber} 접수차량 상세 정보
      </S.HeaderText>
      <S.Body>
        <S.BodyLeft>
          <S.RowBox>
            <S.Text>이름: </S.Text>
            <S.Input
              defaultValue={props.data?.fetchCarRegistration.user.name}
            />
          </S.RowBox>
          <S.RowBox>
            <S.Text>UserId: </S.Text>
            <S.Input defaultValue={props.data?.fetchCarRegistration.user.id} />
          </S.RowBox>
          <S.RowBox>
            <S.Text>전화번호: </S.Text>
            <S.Input
              defaultValue={props.data?.fetchCarRegistration.user.phone}
            />
          </S.RowBox>
          <S.RowBox>
            <S.Text>주소: </S.Text>
            <S.Input defaultValue={props.address} />
          </S.RowBox>
          <S.RowBox>
            <S.Text>상세주소: </S.Text>
            <S.Input defaultValue={""} onChange={props.onChangeAddressDetail} />
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
            <S.Input
              defaultValue={props.data?.fetchCarRegistration.carNumber}
            />
          </S.RowBox>
          <S.RowBox>
            <S.Text>등록 모델: </S.Text>
            <S.Input
              defaultValue={
                props.fixCarName.length === 0
                  ? props.data?.fetchCarRegistration.model
                  : props.fixCarName
              }
            />
          </S.RowBox>
          <S.RowBox>
            <S.Text> ▸ 카테고리: </S.Text>
            <S.CarCategory onChange={props.selectedChange}>
              <option selected disabled>
                카테고리 선택
              </option>
              {props.carCategoryOp?.map((option: any) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </S.CarCategory>
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
            <S.Input defaultValue={props.data?.fetchCarRegistration.oil} />
          </S.RowBox>
          <S.RowBox>
            <S.Text>하이패스: </S.Text>
            <S.Input defaultValue={props.data?.fetchCarRegistration.isHipass} />
          </S.RowBox>
          <S.RowBox>
            <S.Text>1시간 금액: </S.Text>
            <S.Input defaultValue={"100"} onChange={props.onChangePrice} />
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
          <S.RowWrapper>
            <S.CarImageWrapper>
              <S.Text>차량사진</S.Text>
              <S.ImageBox>
                {props.data?.fetchCarRegistration.imageCar.map((el: any) => {
                  return (
                    <Image
                      width={150}
                      src={`https://storage.cloud.google.com/${el.url}`}
                    ></Image>
                  );
                })}
              </S.ImageBox>
            </S.CarImageWrapper>
            <S.RegistartionImageWrapper>
              <S.Text>자동차 등록증</S.Text>
              <S.ImageBox>
                <Image
                  width={250}
                  src={`https://storage.cloud.google.com/${props.data?.fetchCarRegistration.imageRegistration.url}`}
                ></Image>
              </S.ImageBox>
            </S.RegistartionImageWrapper>
          </S.RowWrapper>
          <S.PostMapWrapper>
            <DaumPostcode
              focusInput={props.data?.fetchCarRegistration.address}
              autoClose={false}
              onComplete={props.handleComplete}
            />
            <KakaoMap setLatlng={props.setLatlng} address={props.address} />
          </S.PostMapWrapper>
          <S.Label>차량 카테고리 · 모델 추가 삭제</S.Label>
          <S.AddCarCategoryBox>
            <S.Text>차량 카테고리:</S.Text>
            <S.AddCarCategoryInput
              onChange={props.onChangeAddCarCategory}
              value={props.updateCarCategory}
            />
            <S.Text>차량 모델:</S.Text>
            <S.AddCarModel
              onChange={props.onChangeAddCarModel}
              value={props.updateCarModel}
            />
          </S.AddCarCategoryBox>
          <S.CarCategoryButtonBox>
            <S.CarCategoryButton onClick={props.onClickAddCarCategory}>
              추가하기
            </S.CarCategoryButton>
            <S.CarCategoryButton onClick={props.onClickDeleteCarCategory}>
              삭제하기
            </S.CarCategoryButton>
          </S.CarCategoryButtonBox>
        </S.BodyRight>
      </S.Body>
      <S.BodyBottom></S.BodyBottom>
      <S.ButtonBox>
        <S.Approve onClick={props.onClickApprove}>승인</S.Approve>
        <S.Refuse onClick={props.onClickRefuse}>거절</S.Refuse>
      </S.ButtonBox>
    </S.Wrapper>
  );
}
