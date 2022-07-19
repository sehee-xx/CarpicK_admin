import * as S from "./Intro.styles";
import Fade from "react-reveal/Fade";

export default function IntroUI() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderContents>
          <S.LogoIcon src="/images/ic_logo.svg" />
          <S.LogoText>CarpicK</S.LogoText>
        </S.HeaderContents>
      </S.Header>
      <S.Body>
        <S.FirstPage>
          <S.FirstTitle>매 순간마다 카픽과 함께하세요</S.FirstTitle>
          <S.FirstArrow src="./images/ic_arrow.svg" />
        </S.FirstPage>
        <S.LineHr />
        <S.SecondPage>
          <Fade cascade>
            <S.SecondTitle>카픽으로 이웃의 차를 빌려보세요</S.SecondTitle>
            <S.SecondBottomDiv>
              <S.SecondContents>
                물건은 더이상 ‘소유’의 개념이 아닌
                <br />
                서로 대여해 주고 차용해 쓰는 <br />
                <strong style={{ fontSize: "30px", color: "#5d8bff" }}>
                  공유
                </strong>
                의 개념이 되고 있습니다
              </S.SecondContents>
              <S.SecondImage src="/images/bodyImg1.svg" />
            </S.SecondBottomDiv>
          </Fade>
        </S.SecondPage>
        <S.LineHr />
        <S.ThirdPage>
          <Fade cascade>
            <S.ThirdTitle>평일에 차를 이용하지 않으세요?</S.ThirdTitle>
            <S.ThirdImage src="/images/bodyImg2.svg" />
            <S.ThirdContents>
              차를 사용하는 날보다 사용하지 않는 날이 많다면! <br />
              사용하지 않는 차량으로 돈을 벌고 싶다면! <br />
              <strong style={{ color: "#5d8bff" }}>
                지금 바로 카픽에서 오너등록 하세요!
              </strong>
            </S.ThirdContents>
          </Fade>
        </S.ThirdPage>
        <S.LineHr />
        <S.FourthPage>
          <Fade cascade>
            <S.FourthTitle>카픽키로 손쉽고 간편하게!</S.FourthTitle>
            <S.FourthBottomDiv>
              <S.FourthContents>
                스마트키를 사용해 키 분실 걱정이 없고
                <br />
                핸드폰으로 손쉽게 차량을 이용할 수 있습니다
                <br />
                <strong style={{ color: "#5d8bff" }}>
                  지금 바로 카픽에서 체험해보세요!
                </strong>
              </S.FourthContents>
              <S.FourthImage src="/images/bodyImg3.svg" />
            </S.FourthBottomDiv>
          </Fade>
        </S.FourthPage>
        <S.LineHr />
        {/* 카픽과 함께 오너와 유저를 동시에 누려보세요. <br />
          근처에 있는 다양한 차를 이용해 보세요. <br />
          카픽은 여러분을 기다리고 있습니다! */}
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
