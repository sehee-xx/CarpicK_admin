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

export const Cars = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding-left: 50px;
`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const DivideLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #a5a5a5;
`;

export const Name = styled.div`
  padding-left: 20px;
`;

export const PhoneNum = styled.div`
  padding-left: 20px;
`;

export const Address = styled.div`
  padding-left: 20px;
`;

export const CarNum = styled.div`
  padding-left: 20px;
`;

export const CarCategory = styled.div`
  padding-left: 20px;
`;

export const Oil = styled.div`
  padding-left: 20px;
`;

export const HighPath = styled.div`
  padding-left: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 50px;
`;

export const Approve = styled.button`
  width: 150px;
  height: 50px;
  margin-bottom: 10px;
  :hover {
    background-color: #5d8bff;
    cursor: pointer;
  }
`;

export const Refuse = styled.button`
  width: 150px;
  height: 50px;
  :hover {
    background-color: #5d8bff;
    cursor: pointer;
  }
`;
