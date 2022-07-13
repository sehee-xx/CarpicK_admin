import * as S from "./AdminDetail.styles";
import DaumPostcode from "react-daum-postcode";
import { IAdminDetailUIProps } from "./AdminDetail.types";
import KakaoMap from "../../commons/kakao-map";

export default function AdminDetailUI(props: IAdminDetailUIProps) {
  return (
    <S.Wrapper>
      <S.HeaderText>
        {props.data?.fetchCarRegistration.id} 차량 상세 정보
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
            <S.Text>이메일: </S.Text>
            <S.Input
              defaultValue={props.data?.fetchCarRegistration.user.email}
            />
          </S.RowBox>
          <S.RowBox>
            <S.Text>휴대폰번호: </S.Text>
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
            <S.MiniBox>
              <S.Text>위도: </S.Text>
              <S.Input defaultValue={props.latLng[0]} />
              <S.Text>경도: </S.Text>
              <S.Input defaultValue={props.latLng[1]} />
            </S.MiniBox>
          </S.RowBox>
          <S.RowBox>
            <S.Text>차량번호: </S.Text>
            <S.Input
              defaultValue={props.data?.fetchCarRegistration.carNumber}
            />
          </S.RowBox>
          <S.RowBox>
            <S.MiniBox>
              <S.Text>차종: </S.Text>
              <S.UserInputCarCategory
                defaultValue={
                  props.fixCarName.length === 0
                    ? props.data?.fetchCarRegistration.model
                    : props.fixCarName
                }
              />
              <S.CarCategory onChange={props.selectedChange}>
                {props.carCategoryOp.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </S.CarCategory>
              <S.CarModel onChange={props.fixCarNameChange}>
                {props.carModel?.fetchCarCategory
                  .filter((el) => {
                    return el.name === props.selected;
                  })[0]
                  .carModel.map((el, idx) => {
                    return (
                      <option key={idx} value={el.name}>
                        {el.name}
                      </option>
                    );
                  })}
              </S.CarModel>
            </S.MiniBox>
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
            <S.Text>계약기간: </S.Text>
            <S.Input
              defaultValue={""}
              onChange={props.onChangeContractPeriod}
            />
          </S.RowBox>
        </S.BodyLeft>
        <S.BodyRight>
          <DaumPostcode
            focusInput={props.data?.fetchCarRegistration.address}
            autoClose={false}
            onComplete={props.handleComplete}
          />
          <KakaoMap setLatlng={props.setLatlng} address={props.address} />
        </S.BodyRight>
      </S.Body>
      <S.BodyBottom>
        <S.Text>차량사진</S.Text>
        <S.ImageBox>
          <S.CarImages
            src={`https://storage.cloud.google.com/${props.data?.fetchCarRegistration.imageCar[0].url}`}
          ></S.CarImages>
          <S.CarImages
            src={`https://storage.cloud.google.com/${props.data?.fetchCarRegistration.imageCar[1].url}`}
          ></S.CarImages>
          <S.CarImages
            src={`https://storage.cloud.google.com/${props.data?.fetchCarRegistration.imageCar[2].url}`}
          ></S.CarImages>
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
