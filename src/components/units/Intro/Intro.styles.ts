import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

/* keyframe start */
const textclip = keyframes`
  to {
    background-position: 200% center;
  }
`
/* keyframe end */

const marginDiv = styled.div`
  width: 1100px;
  margin: auto;
`

const pageDiv = styled(marginDiv)`
  height: calc(100vh - 75px);
  display: flex;
`

export const Wrapper = styled.div`
  width: 100%;
  background-color: white;
`;

export const Header = styled.div`
  width: 100%;
  height: 75px;
  line-height: 75px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid #eeeeee;
  z-index: 1;
`;

export const HeaderContents = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  gap: 15px;
`;

export const LogoIcon = styled.img`
  height: 35px;
`;

export const LogoText = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #5d8bff;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 75px;
`;

export const LineHr = styled.div`
  height: 0.7px; 
  background-color: #eeeeee;
`

export const FirstPage = styled(pageDiv)`
  justify-content: center;
  align-items: center;
`

export const FirstTitle = styled.span`
  font-size: 55px;
  font-weight: 600;
  letter-spacing: 20px;
  background-image: linear-gradient(
    -225deg,
    #294997 0%,
    #4B75E0 32%,
    #9E6BF1 66%,
    #756BF1 80%,
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
`

export const FirstArrow = styled.img`
  height: 30px;
  position: absolute;
  bottom: 15px;
  transform: rotate(90deg);
`

export const SecondPage = styled(pageDiv)`
  flex-direction: column;
  justify-content: center;
`

export const SecondTitle = styled.div`
  color: #5d8bff;
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 10px;
`

export const SecondBottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const SecondContents = styled.div`
  font-weight: normal;
  font-size: 26px;
  color: #0a0a0a;
  line-height: 60px;
  letter-spacing: 3px;
  margin-top: 100px;
`

export const SecondImage = styled.img`
  width: 500px;
`

export const ThirdPage = styled(pageDiv)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ThirdTitle = styled.div`
  color: #5d8bff;
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 10px;
`

export const ThirdImage = styled.img`
  width: 360px;
  margin-top: 35px;
`

export const ThirdContents = styled.div`
  font-weight: normal;
  font-size: 26px;
  text-align: end;
  color: #0a0a0a;
  line-height: 45px;
  letter-spacing: 5px;
  margin-top: 50px;
`

export const FourthPage = styled(pageDiv)`
  flex-direction: column;
  justify-content: center;
`

export const FourthTitle = styled.div`
  color: #5d8bff;
  text-align: end;
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 10px;
`

export const FourthBottomDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-top: 50px;
`

export const FourthContents = styled.div`
  font-weight: normal;
  font-size: 26px;
  color: #0a0a0a;
  line-height: 60px;
  letter-spacing: 3px;
`

export const FourthImage = styled.img`
  width: 500px;
`

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
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  align-items: center;
  justify-content: center;
  background-color: #5b8dff;
`;

export const DownLoadText = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  padding-bottom: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DownLoadButton = styled.button`
  width: 300px;
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
`;

export const ButtonImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const ButtonText = styled.text`
  font-size: 20px;
  padding-left: 10px;
`;
