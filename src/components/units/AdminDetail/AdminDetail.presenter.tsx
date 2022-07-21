import * as S from "./AdminDetail.styles";
import DaumPostcode from "react-daum-postcode";
import { IAdminDetailUIProps } from "./AdminDetail.types";
import KakaoMap from "../../commons/kakao-map";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import moment from "moment"

export default function AdminDetailUI(props: IAdminDetailUIProps) {
  return (
    <S.Wrapper>
      <S.HeaderText>
        {props.data?.fetchCarRegistration.carNumber} 차량 상세 정보
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
              {props.carCategoryOp?.map((option) => (
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
                .filter((el) => {
                  return el.name === props.selected;
                })[0]
                ?.carModel?.map((el, idx) => {
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
            <S.Input defaultValue={""} onChange={props.onChangePrice} />
          </S.RowBox>
          <S.RowBox>
            <S.Text>계약 시작일: </S.Text>
            <div>
              <Calendar onChange={props.setContractStart} value={props.contractStart} />
            </div>
          </S.RowBox>
            <div>
             {moment(props.contractStart).format("YYYY.MM.DD")} 
            </div>
          <S.RowBox>
            <S.Text>계약 종료일: </S.Text>
            <div>
              <Calendar onChange={props.setContractEnd} value={props.contractEnd} />
            </div>
          </S.RowBox>
          <div>
             {moment(props.contractEnd).format("YYYY.MM.DD")} 
            </div>
        </S.BodyLeft>
        <S.BodyRight>
          <DaumPostcode
            focusInput={props.data?.fetchCarRegistration.address}
            autoClose={false}
            onComplete={props.handleComplete}
          />
          <KakaoMap setLatlng={props.setLatlng} address={props.address} />
          <S.Label>차량 카테고리 · 모델 추가 삭제</S.Label>
          <S.AddCarCategoryBox>
            <S.Text>차량 카테고리</S.Text>
            <S.AddCarCategoryInput
              onChange={props.onChangeAddCarCategory}
              value={props.updateCarCategory}
            />
            <S.Text>차량 모델</S.Text>
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
      <S.BodyBottom>
        <S.Text>차량사진</S.Text>
        <S.ImageBox>
          {props.data?.fetchCarRegistration.imageCar.map((el) => {
            return (
              <S.CarImages
                src={`https://storage.cloud.google.com/${el.url}`}
              ></S.CarImages>
            );
          })}
        </S.ImageBox>
        <S.Text>자동차 등록증</S.Text>
        <S.ImageBox>
          <S.CarRegistration
            src={`https://storage.cloud.google.com/${props.data?.fetchCarRegistration.imageRegistration.url}`}
          ></S.CarRegistration>
        </S.ImageBox>
      </S.BodyBottom>
      <S.ButtonBox>
        <S.Approve onClick={props.onClickApprove}>승인</S.Approve>
        <S.Refuse onClick={props.onClickRefuse}>거절</S.Refuse>
      </S.ButtonBox>
    </S.Wrapper>
  );
}
