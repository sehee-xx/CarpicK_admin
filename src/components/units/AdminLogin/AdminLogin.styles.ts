import styled from "@emotion/styled";

export const Wrapper = styled.form`
  width: 100%;
  background-color: #f7f8f9;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding-bottom: 30px;
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

export const LoginContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;
`;
export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorBox = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: tomato;
`;

export const Text = styled.div`
  width: 100px;
  font-size: 25px;
`;
export const AdminId = styled.input`
  width: 300px;
  height: 50px;
  padding-left: 10px;
`;

export const AdminPw = styled.input`
  width: 300px;
  height: 50px;
  padding-left: 10px;
`;

export const LoginButton = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  font-size: 25px;
  background-color: #5d8bff;
  color: #fff;
  border-radius: 20px;
  margin-top: 80px;
`;
