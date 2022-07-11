import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f7f8f9;
`;
export const Header = styled.div`
  width: 100%;
  height: 150px;
  background-color: #5d8bff;
`;

export const HeaderContents = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
  max-width: 150px;
  max-height: 150px;
`;
export const HeaderText = styled.div`
  width: 50%;
  height: 150px;
  font-size: 60px;
  font-weight: 700;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

export const BodyContents = styled.div`
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

export const ContentsText = styled.text`
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
`;

export const ButtonImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const ButtonText = styled.text`
  font-size: 20px;
  padding-left: 10px;
`;
