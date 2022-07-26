/* 서비스 이용약관 */

import * as S from "../../../src/components/units/Terms/Terms.styles";

export default function ServicePage() {
  return (
    <S.Wrapper>
      <S.Title>서비스 이용약관 동의</S.Title>
      <S.Box>
        <S.Text isBold={true}>제 1조(목적)</S.Text>
        <S.Text>
          본 약관은 카픽이 제공하는 서비스의 이용과 관련하여 카픽과 회원과의
          권리, 의무 및 책임사항, 기타 필요한 사항을 규정하는 것을 목적으로
          합니다.
        </S.Text>
      </S.Box>
    </S.Wrapper>
  );
}
