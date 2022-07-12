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
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 100px;
`;

export const BodyRight = styled.div`
  width: 100%;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 25px;
  padding-bottom: 20px;
`;

export const Name = styled.div`
  padding-left: 20px;
  color: #5d8bff;
`;

export const PhoneNum = styled.div`
  padding-left: 20px;
  color: #5d8bff;
`;

export const Address = styled.div`
  padding-left: 20px;
  color: #5d8bff;
`;

export const CarNum = styled.div`
  padding-left: 20px;
  color: #5d8bff;
`;

export const CarCategory = styled.div`
  padding-left: 20px;
  color: #5d8bff;
`;

export const Oil = styled.div`
  padding-left: 20px;
  color: #5d8bff;
`;

export const HighPath = styled.div`
  padding-left: 20px;
  color: #5d8bff;
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
  :hover {
    background-color: #5d8bff;
    color: #fff;
    cursor: pointer;
  }
`;
