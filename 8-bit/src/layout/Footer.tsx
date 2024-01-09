// Footer.tsx
import styled from "@emotion/styled";
import { Common } from "../styles/common";

const FooterWrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

const FooterContainer = styled.footer`
  color: black;
  text-align: center;
  padding: ${Common.space.xs} ${Common.space.md};
  width: 100%;
  border-top: 1.5px solid ${Common.colors.background[50]};
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

const Label2 = styled.h1`
  display: inline;
  font-size: ${Common.font.size["xxs"]};
  font-weight: ${Common.font.weight.regular};
  padding-right: ${Common.space["xs"]};
`;

const Diagram = styled.span`
  display: inline;
  font-size: 5px;
  font-weight: ${Common.font.weight.regular};
  padding-right: ${Common.space["s"]};
`;

const FooterImg = styled.img`
  margin: 0px 10px;
`

const Spacer = styled.div`
  flex-grow: 1;
`;

const VerticalLine = styled.div`
  height: 16px;  /* 세로선의 높이 */
  width: 1.5px;     /* 세로선의 너비 */
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
          <FooterImg src="/footer/instagram.svg" alt="instagram"></FooterImg>
          <FooterImg src="/footer/youtube.svg" alt="youtube"></FooterImg>
          <FooterImg src="/footer/facebook.svg" alt="facebook"></FooterImg>
          <BetweenTexts />
          <FooterImg src="/footer/familysite.svg" alt="familysite"></FooterImg>
          <VerticalLine />
          <FooterImg src="/footer/sniperfactory.svg" alt="sniperfactory"></FooterImg>
        </Container>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;