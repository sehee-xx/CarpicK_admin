import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/breakPoints/breakPoints";

/* keyframe start */
const textclip = keyframes`
  to {
    background-position: 200% center;
  }
`;
/* keyframe end */

const marginDiv = styled.div`
  width: 100%;
  margin: auto;
`;

const pageDiv = styled(marginDiv)`
  height: 720px;
  display: flex;

  @media ${breakPoints.smallSreen} {
    height: 580px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;

  @media ${breakPoints.maxMobile} {
    width: 100%;
    color: black;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  line-height: 75px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid #eeeeee;
  z-index: 1;

  @media ${breakPoints.maxMobile} {
    width: 100%;
    height: 80px;
  }
`;

export const HeaderContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  gap: 15px;
  padding-left: 50px;

  @media ${breakPoints.maxMobile} {
    display: flex;
    flex-direction: row;
    padding-left: 30px;
  }

  @media ${breakPoints.smallSreen} {
    padding-left: 20px;
  }
`;

export const LogoIcon = styled.img`
  height: 35px;

  @media ${breakPoints.maxMobile} {
    height: 30px;
  }

  @media ${breakPoints.smallSreen} {
    height: 25px;
  }
`;

export const LogoText = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #5d8bff;

  @media ${breakPoints.maxMobile} {
    font-size: 25px;
  }

  @media ${breakPoints.smallSreen} {
    font-size: 24px;
  }
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 75px;
`;

export const LineHr = styled.div`
  height: 0.7px;
  background-color: #eeeeee;
  width: 100%;
`;

export const FirstPage = styled(pageDiv)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.maxMobile} {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const WebFirstTitle = styled.div`
  font-size: 55px;
  font-weight: 600;
  letter-spacing: 20px;
  background-image: linear-gradient(
    -225deg,
    #294997 0%,
    #4b75e0 32%,
    #9e6bf1 66%,
    #756bf1 80%,
    #294997 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textclip} 1s linear infinite;
  display: inline-block;

  @media ${breakPoints.maxMobile} {
    display: none;
  }
`;

export const MobileFirstTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 20px;
  background-image: linear-gradient(
    -225deg,
    #294997 0%,
    #4b75e0 32%,
    #9e6bf1 66%,
    #756bf1 80%,
    #294997 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  width: 100%;
  text-align: center;
  text-justify: center;
  padding-left: 20px;
  animation: ${textclip} 1s linear infinite;

  @media ${breakPoints.minMobile} {
    display: none;
  }

  @media ${breakPoints.smallSreen} {
    font-size: 20px;
  }
`;

export const SecondPage = styled(pageDiv)`
  flex-direction: column;
  justify-content: center;
  padding: 0px 150px;

  @media ${breakPoints.maxMobile} {
    text-align: center;
    align-items: center;
    padding: 0px 50px;
  }

  @media ${breakPoints.smallSreen} {
    padding: 0px 20px;
  }
`;

export const WebSecondTitle = styled.div`
  color: #5d8bff;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 10px;

  @media ${breakPoints.maxMobile} {
    display: none;
  }
`;

export const MobileSecondTitle = styled.div`
  width: 100%;
  color: #5d8bff;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 10px;
  padding-bottom: 50px;

  @media ${breakPoints.minMobile} {
    display: none;
  }

  @media ${breakPoints.smallSreen} {
    font-size: 22px;
  }
`;

export const SecondBottomDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media ${breakPoints.maxMobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const SecondContents = styled.div`
  font-weight: normal;
  font-size: 23px;
  color: #0a0a0a;
  letter-spacing: 3px;
  margin-top: 100px;

  @media ${breakPoints.maxMobile} {
    margin: 0px 0px;
    width: 100%;
    font-size: 15px;
    padding-bottom: 20px;
  }

  @media ${breakPoints.smallSreen} {
    font-size: 12px;
  }
`;

export const SecondImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px;

  @media ${breakPoints.maxMobile} {
    max-width: 350px;
    display: flex;
  }

  @media ${breakPoints.smallSreen} {
    max-width: 250px;
  }
`;

export const ThirdPage = styled(pageDiv)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.maxMobile} {
    text-align: center;
    align-items: center;
    padding: 0px 50px;
  }

  @media ${breakPoints.smallSreen} {
    padding: 0px 20px;
  }
`;

export const WebThirdTitle = styled.div`
  color: #5d8bff;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 10px;

  @media ${breakPoints.maxMobile} {
    display: none;
  }
`;

export const MobileThirdTitle = styled.div`
  width: 100%;
  color: #5d8bff;
  font-weight: 600;
  letter-spacing: 10px;
  font-size: 30px;
  padding-bottom: 20px;

  @media ${breakPoints.minMobile} {
    display: none;
  }

  @media ${breakPoints.smallSreen} {
    font-size: 22px;
  }
`;

export const ThirdImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 350px;
  margin-top: 35px;

  @media ${breakPoints.maxMobile} {
    max-width: 300px;
    display: flex;
    padding-bottom: 50px;
  }

  @media ${breakPoints.smallSreen} {
    max-width: 250px;
  }
`;

export const ThirdContents = styled.div`
  width: 100%;
  font-weight: normal;
  font-size: 23px;
  text-align: end;
  color: #0a0a0a;
  letter-spacing: 5px;
  margin-top: 50px;

  @media ${breakPoints.maxMobile} {
    text-align: center;
    margin: 0px 0px;
    width: 100%;
    font-size: 15px;
  }

  @media ${breakPoints.smallSreen} {
    font-size: 12px;
  }
`;

export const FourthPage = styled(pageDiv)`
  flex-direction: column;
  justify-content: center;
  padding: 0px 150px;

  @media ${breakPoints.maxMobile} {
    padding: 0px 50px;
    align-items: center;
    justify-content: center;
  }

  @media ${breakPoints.smallSreen} {
    padding: 0px 20px;
  }
`;

export const WebFourthTitle = styled.div`
  color: #5d8bff;
  text-align: end;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 10px;

  @media ${breakPoints.maxMobile} {
    display: none;
  }
`;

export const MobileFourthTitle = styled.div`
  width: 100%;
  color: #5d8bff;
  font-weight: 600;
  letter-spacing: 10px;
  text-align: center;
  font-size: 30px;
  padding-bottom: 50px;

  @media ${breakPoints.minMobile} {
    display: none;
  }
  @media ${breakPoints.smallSreen} {
    font-size: 22px;
  }
`;

export const FourthBottomDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: 50px;

  @media ${breakPoints.maxMobile} {
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const FourthContents = styled.div`
  font-weight: normal;
  font-size: 23px;
  color: #0a0a0a;
  letter-spacing: 3px;

  @media ${breakPoints.maxMobile} {
    font-size: 15px;
    padding-bottom: 20px;
  }

  @media ${breakPoints.smallSreen} {
    font-size: 12px;
  }
`;

export const FourthImage = styled.img`
  width: 100%;
  max-width: 500px;

  @media ${breakPoints.maxMobile} {
    display: flex;
    padding-top: 50px;
  }

  @media ${breakPoints.smallSreen} {
    max-width: 250px;
  }
`;

export const BodyContents = styled(marginDiv)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 70px 80px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`;

export const TitleText = styled.text`
  font-size: 40px;
  font-weight: 700;
  color: #5d8bff;
`;

export const ContentsText = styled.div`
  width: 100%;
  padding-top: 50px;
  font-size: 25px;
`;

export const BodyImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
`;

export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #a5a5a5;
  margin: 40px 0px;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
  background-color: #5b8dff;

  @media ${breakPoints.maxMobile} {
    height: 80px;
  }
`;

export const DownLoadText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  padding-bottom: 20px;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DownLoadButton = styled.button`
  width: 100%;
  max-width: 300px;
  height: 80px;
  margin-left: 20px;
  margin-right: 20px;
  border: none;
  border-radius: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media ${breakPoints.maxMobile} {
    max-width: 150px;
    height: 50px;
  }
`;

export const ButtonImage = styled.img`
  width: 40px;
  height: 40px;

  @media ${breakPoints.maxMobile} {
    width: 15px;
    height: 15px;
  }
`;

export const ButtonText = styled.a`
  font-size: 20px;
  padding-left: 10px;
  color: black;

  @media ${breakPoints.maxMobile} {
    font-size: 14px;
  }
`;
