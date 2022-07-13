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

export const HiPass = styled.div`
  padding-left: 20px;
`;

export const Date = styled.div`
  padding-left: 20px;
`;

export const Status = styled.div`
  padding-left: 20px;
`;

export const Table = styled.div`
  width: 100%;
`;

export const RowTop = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 2px solid #a5a5a5;
`;

export const Row = styled(RowTop)`
  :hover {
    color: #5d8bff;
    font-weight: 900;
  }
`;

export const ColumnHeaderBasic = styled.div`
  width: 200px;
  text-align: center;
  font-weight: 700;
`;

export const ColumnBasic = styled.div`
  width: 200px;
  text-align: center;
`;
