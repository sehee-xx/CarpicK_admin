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
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  padding: 80px 30px;
`;

export const BodyRight = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 70%;
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
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 120px;
  width: 100%;
`;

export const Text = styled.div`
  width: 150px;
  font-size: 25px;
`;

export const Input = styled.input`
  width: 100%;
  color: #5d8bff;
  font-size: 25px;
`;

export const Label = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

export const AddCarCategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AddCarCategoryInput = styled.input`
  width: 250px;
  font-size: 25px;
`;

export const AddCarModel = styled.input`
  width: 250px;
  font-size: 25px;
`;

export const CarCategoryButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CarCategoryButton = styled.button`
  width: 100%;
  height: 100px;
  font-size: 25px;
  border: none;
  background-color: #a5a5a5;
  :hover {
    background-color: #5d8bff;
    color: white;
  }
  margin-right: 20px;
`;

export const UserInputCarCategory = styled.input`
  color: #5d8bff;
  font-size: 25px;
`;

export const MiniBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const CarCategory = styled.select`
  height: 44px;
  width: 100%;
  font-size: 25px;
`;

export const CarModel = styled.select`
  height: 44px;
  width: 100%;
  font-size: 25px;
`;

export const CarImages = styled.img`
  width: 500px;
  height: 500px;
  background-color: #a5a5a5;
  margin-right: 20px;
  margin-top: 20px;
`;

export const CarRegistration = styled.img`
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
