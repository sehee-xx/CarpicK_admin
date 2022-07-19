import styled from "@emotion/styled";

export const Wrapper = styled.div``;

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "#5d8bff" : "black")};
  font-size: ${(props: IPageProps) => (props.isActive ? "20" : "15")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;
