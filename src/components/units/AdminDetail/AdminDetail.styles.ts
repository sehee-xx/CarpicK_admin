import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f7f8f9;
`;

export const HeaderText = styled.div`
  width: 100%;
  height: 100px;
  font-size: 40px;
  font-weight: 700;
  background-color: #5d8bff;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const BodyLeft = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 30px;
`;

export const BodyRight = styled.div`
  width: 100%;
  padding: 80px 30px;
`;

export const BodyBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;
`;

export const Text = styled.div`
  width: 150px;
  font-size: 25px;
`;

export const Input = styled.input`
  width: 500px;
  color: #5d8bff;
  font-size: 25px;
`;

export const CarImages = styled.div`
  width: 500px;
  height: 500px;
  background-color: #a5a5a5;
  margin-right: 20px;
  margin-top: 20px;
`;

export const CarRegistration = styled.div`
  width: 500px;
  height: 500px;
  background-color: #a5a5a5;
  margin-top: 20px;
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 80px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  font-size: 25px;
`;

export const Approve = styled.button`
  width: 180px;
  height: 70px;
  margin-right: 30px;
  font-weight: 500;
  border: none;
  background-color: #a5a5a5;
  :hover {
    background-color: #5d8bff;
    color: #fff;
    cursor: pointer;
  }
`;

export const Refuse = styled.button`
  width: 180px;
  height: 70px;
  font-weight: 500;
  border: none;
  background-color: #a5a5a5;
  :hover {
    background-color: #5d8bff;
    color: #fff;
    cursor: pointer;
  }
`;
