// Footer.js
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  background-color: #007bff;
  color: white;
  text-align: center;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} 8-bit. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
