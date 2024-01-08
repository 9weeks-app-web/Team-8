// Header.tsx
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import styled from "@emotion/styled";
import Avatar from '@mui/material/Avatar';
import { Email, EmailOutlined, Notifications, NotificationsNoneOutlined } from '@mui/icons-material';
import { Common } from "../styles/common";
import MessageModal from "../components/MeassageModal";
import NotiModal from "../components/NotiModal";

const HeaderWrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

const TabBar = styled.header`
background-color: ${Common.colors.neutral[10]};
padding-left: 132px;
display: flex;
`;

const TabText = styled.h1`
  margin-top:${Common.space["xs"]};
  padding: 10px 20px;
  font-size: ${Common.font.size["xs"]};
  font-weight: ${Common.font.weight.semibold};
  color:  ${Common.colors.neutral[30]};
`;

const SelectedTab = styled.button`
  margin-top: ${Common.space["xs"]};
  padding: ${Common.space["xs"]} ${Common.space["s"]};
  background-color: #ffffff;
  font-size: ${Common.font.size["xs"]};
  font-weight: ${Common.font.weight.semibold};
  border: none;
  border-radius: 8px 8px 0px 0px;
  box-shadow:  -5px 0 5px -5px rgba(0, 0, 0, 0.2), 0 -5px 5px -5px rgba(0, 0, 0, 0.2), 5px 0 5px -5px rgba(0, 0, 0, 0.2); 
`;

const HeaderContainer = styled.header`
  background-color: #ffffff;
  color: black;
  padding: ${Common.space["xs"]} ${Common.space["md"]};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${Common.colors.neutral[30]};
  padding-bottom: ${Common.space["s"]};
  margin-left: ${Common.space["xl"]};
  text-decoration: none;
  font-weight: ${Common.font.weight.semibold}; 
  font-size: ${Common.font.size["lg"]};

  &.active {
    color: black; // 활성화된 링크에 대한 스타일
    border-bottom: 2.5px solid ${Common.colors.primary[80]};
  }
`;

const Container = styled.div`
   display: flex;
  justify-content: flex-start;
  align-items: center;
`

const LogoImg = styled.img`
  margin-left: 20px
`

const LogInText = styled.h1`
  padding: 10px 20px;
  font-size: ${Common.font.size["xs"]};
  color:  ${Common.colors.neutral[100]};
`;

const ColorButton = styled.button`
  padding: ${Common.space["xs"]} ${Common.space["s"]};
  background-color: ${Common.colors.primary[80]};
  color: white;
  border: none;
  border-radius: 10px;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const BetweenItems = styled.div`
  width: ${Common.space["s"]};
`;


const Header: React.FC = () => {

  const [isMessageOpen, setMessageOpen] = useState(false);
  const closeMessage = () => setMessageOpen(false);

  const [isNotiOpen, setNotiOpen] = useState(false);
  const closeNoti = () => setNotiOpen(false);

  // 유저 로그인 여부 저장
  let isUserLogined = true;

  // Nav 선택 유지
  const [activeNav, setActiveNav] = useState<string>("home");

  const handleNavClick = (nav: string) => {
    setActiveNav(nav);
  };

  // 로그인 버튼 누르면 로그인 창으로 
  const navigate = useNavigate();

  const goLogIn = () => {
    console.log('goLogIn')
    navigate('/signIn');
  };

  const clickMessage = () => {
    setMessageOpen(!isMessageOpen);
  }

  const clickNoti = () => {
    setNotiOpen(!isNotiOpen);
  }


  return (
    <HeaderWrapper>
      <TabBar>
        <SelectedTab>스팩폴리오</SelectedTab>
        <TabText>스팩로그</TabText>
      </TabBar>
      <HeaderContainer>
        <Nav>
          <LogoImg src="/sfac_logo.svg" alt="sniperfactory logo" />
          <div>
            <NavLink to="/"
              className={activeNav === 'home' ? 'active' : ''}
              onClick={() => handleNavClick('home')}>탐색</NavLink>
            <NavLink to="/community" className={activeNav === 'community' ? 'active' : ''}
              onClick={() => handleNavClick('community')}>커뮤니티</NavLink>
            <NavLink to="/" className={activeNav === 'recruit' ? 'active' : ''}
              onClick={() => handleNavClick('recruit')}>채용</NavLink>
          </div>
          <Spacer/>
          <div>
            {/* userLogined 여부에 따라 보여지는 컨텐츠 다르게 */}
            {isUserLogined ? (
              <Container>
                {isMessageOpen ? <Email onClick={clickMessage} sx={{ color: Common.colors.primary["100"] }} /> :   <EmailOutlined onClick={clickMessage}/> }
                <BetweenItems />
                {isNotiOpen ? <Notifications onClick={clickNoti} sx={{ color: Common.colors.primary["100"] }}/> :  <NotificationsNoneOutlined onClick={clickNoti} />}
                <BetweenItems />
                <Avatar alt="user profile"
                  sx={{ width: 24, height: 24, fontSize: 10, bgcolor: Common.colors.neutral[10], color: Common.colors.neutral[100] }}></Avatar>
                <BetweenItems />
                <ColorButton>업로드</ColorButton>
              </Container>
            ) : (
              <Container>
                <LogInText>로그인 후 레퍼런스를 모아보세요.</LogInText>
                <ColorButton onClick={goLogIn}>로그인</ColorButton>
              </Container>
            )}
          </div>
        </Nav>
      </HeaderContainer>
      <NotiModal isOpen={isNotiOpen} onClose={closeNoti} />
      <MessageModal isOpen={isMessageOpen} onClose={closeMessage} />
    </HeaderWrapper >
  );
}

export default Header;