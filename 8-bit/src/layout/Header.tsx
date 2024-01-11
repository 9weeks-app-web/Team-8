// Header.tsx
import styled from "@emotion/styled";
import { Email, EmailOutlined, Notifications, NotificationsNoneOutlined } from '@mui/icons-material';
import { IconButton, Popover } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import MessageModal from "../components/MeassageModal";
import NotiModal from "../components/NotiModal";
import ProfileModal from "../components/ProfileModal";
import UploadModal from "../components/UploadModal";
import { Common } from "../styles/common";

const HeaderWrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
  position: relaive;
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
  margin-left: 20px;
  cursor: pointer;
`;

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
  width: 4px;
`;

const ButtonSpan = styled.span`
  display: contents;
`;

//Popover style 정의
const CustomPopover = styled(Popover)`
  .MuiPaper-root {
    background-color: transparent; // 배경색 변경
    width: 100px;
    height: 100px;
    box-shadow: none;
    overflow: visible;
    display: flex;
  justify-content: center;
  }
`;

const Header: React.FC = () => {

  //userInfo에 있는 userName, userEmail 저장
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {

    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      // JSON 문자열을 객체로 파싱
      const userInfoObj = JSON.parse(storedUserInfo);
      // userInfo 객체에서 username , useremail 읽기
      const userName = userInfoObj.username;
      const userEmail = userInfoObj.email!;
      // React 상태 업데이트
      setUserName(userName);
      setUserEmail(userEmail);
    }
  }, []);

  // 모달 상태 관리
  const [activeModal, setActiveModal] = useState<string | null>(null);

  //라우트 변경될 시 모달창 닫힘
  const location = useLocation();

  useEffect(() => {
    handleRouteChange();
  }, [location]);

  const handleRouteChange = () => {
    setActiveModal(null);
  };

  // Nav 선택 유지
  const [activeNav, setActiveNav] = useState<string>("home");

  const handleNavClick = (nav: string) => {
    setActiveModal(null);
    setActiveNav(nav);
  };

  const navigate = useNavigate();

  const goLogIn = () => {
    navigate('/signIn');
  };

  const logoHome = () => {
    navigate('/');
  }

  //로그아웃 함수
  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUserName(null);
    setUserEmail(null);
    navigate('/');
  };

  // 아이콘 클릭 시 각 모달창 팝업

  const clickMessage = (event: React.MouseEvent<HTMLElement>) => {
    setActiveModal(activeModal === 'message' ? null : 'message');
    handleClick(event);
  }

  const clickNoti = (event: React.MouseEvent<HTMLElement>) => {
    setActiveModal(activeModal === 'noti' ? null : 'noti');
    handleClick(event);
  }

  const clickProfile = (event: React.MouseEvent<HTMLElement>) => {
    setActiveModal(activeModal === 'profile' ? null : 'profile');
    handleClick(event);
  }

  const clickUplopad = (event: React.MouseEvent<HTMLElement>) => {
    setActiveModal(activeModal === 'upload' ? null : 'upload');
    handleClick(event);
  }

  // 모달 공통 요소
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveModal(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popover' : undefined;

  function RenderModal() {
    switch (activeModal) {
      case 'message':
        return <MessageModal />;
      case 'noti':
        return <NotiModal />;
      case 'profile':
        return <ProfileModal userName={userName!} userEmail={userEmail!} onLogout={handleLogout} />;
      case 'upload':
        return <UploadModal />;
      default:
        return <div />;
    }
  }

  return (
    <HeaderWrapper>
      <TabBar>
        <SelectedTab>스팩폴리오</SelectedTab>
        <TabText>스팩로그</TabText>
      </TabBar>
      <HeaderContainer>
        <Nav>
          <LogoImg src="/header/sfac_logo.svg" alt="sniperfactory logo" onClick={logoHome} />
          <div>
            <NavLink to="/"
              className={activeNav === 'home' ? 'active' : ''}
              onClick={() => handleNavClick('home')}>탐색</NavLink>
            <NavLink to="/community" className={activeNav === 'community' ? 'active' : ''}
              onClick={() => handleNavClick('community')}>커뮤니티</NavLink>
            <NavLink to="/" className={activeNav === 'recruit' ? 'active' : ''}
              onClick={() => handleNavClick('recruit')}>채용</NavLink>
          </div>
          <Spacer />
          <div>
            {/* 로그인 여부에 따라 */}
            {userName ? (
              <Container>
                <ButtonSpan>
                  <IconButton disableRipple aria-describedby={id} onClick={(event) => clickMessage(event)}>
                    {activeModal === 'message' ? <Email sx={{ color: Common.colors.primary[100] }} /> : <EmailOutlined sx={{ color: Common.colors.neutral[100] }} />}
                  </IconButton>
                  <BetweenItems />
                  <IconButton disableRipple aria-describedby={id} onClick={(event) => clickNoti(event)}>
                    {activeModal === 'noti' ? <Notifications sx={{ color: Common.colors.primary[100] }} /> : <NotificationsNoneOutlined sx={{ color: Common.colors.neutral[100] }} />}
                  </IconButton>
                  <BetweenItems />
                  <Avatar aria-describedby={id} onClick={(event) => clickProfile(event)} alt="user profile" src="/user_profile.png"
                    sx={{ width: 24, height: 24, fontSize: 10, bgcolor: Common.colors.neutral[10], cursor: "pointer", margin: Common.space.xs }} />
                  <BetweenItems />
                  <ColorButton aria-describedby={id} onClick={(event) => clickUplopad(event)}>업로드</ColorButton>
                </ButtonSpan>
                <CustomPopover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <RenderModal />

                </CustomPopover>

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
    </HeaderWrapper>
  );
}

export default Header;