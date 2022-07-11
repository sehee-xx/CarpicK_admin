import * as S from "./Intro.styles";

export default function IntroUI() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderContents>
          <S.Logo src="/images/logo.svg"></S.Logo>
          <S.HeaderText>CarpicK</S.HeaderText>
        </S.HeaderContents>
      </S.Header>
      <S.Body>
        <S.BodyContents>
          <S.TextBox>
            <S.TitleText>카픽으로 이웃의 차를 빌려보세요</S.TitleText>
            <S.ContentsText>
              물건은 더이상 ‘소유’의 개념이 아닌 <br />
              서로 대여해 주고 차용해 쓰는 <br />
              ‘공유’의 개념이 되고 있습니다.
            </S.ContentsText>
            <S.ContentsText>
              이웃의 차를 잠시 빌리고 싶다면, <br />
              나에게 특별한 하루를 선물하고 싶다면, <br />
              지금 바로 카픽을 다운로드 하세요!
            </S.ContentsText>
          </S.TextBox>
          <S.BodyImg src="/images/bodyImg1.svg"></S.BodyImg>
        </S.BodyContents>
        <S.DivideLine></S.DivideLine>
        <S.BodyContents>
          <S.BodyImg src="/images/bodyImg2.svg"></S.BodyImg>
          <S.TextBox>
            <S.TitleText>평일에 차를 이용하지 않으세요?</S.TitleText>
            <S.ContentsText>
              차를 사용하는 날보다 사용하지 않는 날이 많다면, <br />
              사용하지 않는 차량으로 돈을 벌고 싶다면, <br />
              지금 바로 카픽에서 오너등록 하세요!
            </S.ContentsText>
            <S.ContentsText>
              앱에서 차량 정보만 입력하면 되고 <br />
              대여해준 차량을 걱정하지 않아도 되는 <br />
              카픽과 함께 오너가 되어보세요!
            </S.ContentsText>
          </S.TextBox>
        </S.BodyContents>
        <S.DivideLine></S.DivideLine>
        <S.BodyContents>
          <S.TextBox>
            <S.TitleText>스마트키로 간편하게!</S.TitleText>
            <S.ContentsText>
              스마트키를 사용해 키 분실 걱정이 없고, <br />
              핸드폰으로 손쉽게 차량을 이용할 수 있습니다. <br />
              지금 바로 카픽에서 체험해보세요!
            </S.ContentsText>
            <S.ContentsText>
              카픽과 함께 오너와 유저를 동시에 누려보세요. <br />
              근처에 있는 다양한 차를 이용해 보세요. <br />
              카픽은 여러분을 기다리고 있습니다!
            </S.ContentsText>
          </S.TextBox>
          <S.BodyImg src="/images/bodyImg3.svg"></S.BodyImg>
        </S.BodyContents>
      </S.Body>
      <S.Footer>
        <S.ButtonBox>
          <S.DownLoadButton>
            <S.ButtonImage src="/images/apple-logo.png"></S.ButtonImage>
            <S.ButtonText>App Store</S.ButtonText>
          </S.DownLoadButton>
          <S.DownLoadButton>
            <S.ButtonImage src="/images/google-play.png"></S.ButtonImage>
            <S.ButtonText>Google Play</S.ButtonText>
          </S.DownLoadButton>
        </S.ButtonBox>
      </S.Footer>
    </S.Wrapper>
  );
}
