import styled from "@emotion/styled";

interface marginBox {
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 20px;
  margin: 40px 20px;
  gap: 75px;
`;

export const Title = styled.span`
  font-size: 35px;
  font-weight: bold;
  color: #5d8bff;
`;

export const Box = styled.div<marginBox>`
  margin-top: ${(props: { marginTop?: string }) => props.marginTop}px;
  margin-right: ${(props: { marginRight?: string }) => props.marginRight}px;
  margin-bottom: ${(props: { marginBottom?: string }) => props.marginBottom}px;
  margin-left: ${(props: { marginLeft?: string }) => props.marginLeft}px;
`;

export const Text = styled.p`
  font-weight: ${(props: { isBold?: boolean }) =>
    props.isBold ? "Bold" : "Regular"};
`;
