// Header.js
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5em;
`;

const NavLink = styled(Link)`
  color: white;
  margin-left: 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>8-bit</Logo>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/signin">Sign In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
