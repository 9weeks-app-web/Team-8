// Footer.tsx
import styled from "@emotion/styled";
import { Common } from "../styles/common";

const FooterWrapper = styled.div`
  padding-top: ${Common.space.s};
  width: 1440px;
  margin: 0 auto;
`;

const FooterContainer = styled.footer`
  color: black;
  text-align: center;
  padding: 7px ${Common.space.md};
  width: 100%;
  border-top: 1.5px solid ${Common.colors.neutral[5]};
  border-bottom: 1.5px solid ${Common.colors.neutral[5]};
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BetweenTexts = styled.div`
  display: inline-block;
  width: ${Common.space["md"]};
`;

const Label1 = styled.h1`
  display: inline;
  font-size: ${Common.font.size["xs"]};
  font-weight: ${Common.font.weight.bold};
  padding-right: ${Common.space["xs"]};
`;

const Label2 = styled.button`
  display: inline;
  font-size: ${Common.font.size["xxs"]};
  font-weight: ${Common.font.weight.regular};
  padding-right: ${Common.space["xs"]};
  border: none;
  background-color: transparent;
`;

const Diagram = styled.span`
  display: inline;
  font-size: 7px;
  font-weight: ${Common.font.weight.regular};
  padding-right: ${Common.space["s"]};
  cursor: pointer;
`;

const FooterImg = styled.img`
  margin: 0px 10px;
  width: 21px;
  height: 21px;
  cursor: pointer;
`

const Spacer = styled.div`
  flex-grow: 1;
`;

const VerticalLine = styled.div`
  height: 16px;  /* 세로선의 높이 */
  width: 1px;     /* 세로선의 너비 */
  background-color: ${Common.colors.background[50]}; /* 세로선의 색상 */
`;


function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Container>
          <Label1>인사이드아웃 사회적 협동조합</Label1>
          <Label2>사업자정보</Label2>
          <Diagram>▼</Diagram>
          <VerticalLine />
          <BetweenTexts />
          <Label2>서비스소개</Label2>
          <BetweenTexts />
          <Label2>공지사항</Label2>
          <BetweenTexts />
          <Label2>운영정책</Label2>
          <BetweenTexts />
          <Label2>개인정보처리방침</Label2>
          <BetweenTexts />
          <Label2>문의하기</Label2>
          <BetweenTexts />
          <Label2>광고문의</Label2>
          <BetweenTexts />
          <Label2>고객센터</Label2>
          <Spacer />
          <FooterImg src="/footer/instagram.png" alt="instagram"></FooterImg>
          <FooterImg src="/footer/youtube.png" alt="youtube"></FooterImg>
          <FooterImg src="/footer/facebook.png" alt="facebook"></FooterImg>
          <BetweenTexts />
          <FooterImg src="/footer/familysite.svg" alt="familysite" style={{width: 57}}></FooterImg>
          <VerticalLine />
          <FooterImg src="/footer/sniperfactory.svg" alt="sniperfactory" style={{width: 30}}></FooterImg>
        </Container>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;