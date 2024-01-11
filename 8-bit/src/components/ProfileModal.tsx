import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from 'react-router-dom';
import { Common } from "../styles/common";
import HeaderModal from "./HeaderModal";

const UserName = styled.h1`
  font-weight: ${Common.font.weight.semibold};
  font-size: ${Common.font.size.lg};
  margin: 10px 0px;
`;

const UserEmail = styled.h1`
  font-weight: ${Common.font.weight.regular};
  font-size: ${Common.font.size.sm};
  color: ${Common.colors.neutral["50"]};
  margin-bottom: ${Common.space.s};
`;

const TextButton = styled.h1`
  cursor: pointer;
  font-size: ${Common.font.size.sm};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.neutral["80"]};
  margin-left: ${Common.space.xs};
  margin-bottom: ${Common.space.s};
`;

const LogoutButton = styled.h1`
  cursor: pointer;
  font-size: ${Common.font.size.sm};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.neutral["80"]};
  margin-left: ${Common.space.xs};
`;

const Div = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ButtonSpan = styled.span`
  margin-left: -24px;
`;

const Divider = styled.hr`
  border: none; /* 기존 테두리 제거 */
  border-top: 1.5px solid ${Common.colors.neutral["10"]};
  margin: 0px -16px;
`;

interface ModalProps {
    userName?: string;
    userEmail?: string;
    onLogout: () => void;
}

const ProfileModal: React.FC<ModalProps> = ({ userName, userEmail, onLogout }) => {
    const navigate = useNavigate();

    const goMypage = () => {
        navigate('/mypage');
    }

    return (
            <HeaderModal  width="256px" height="328px" triangleLeft="50%" marginRight="17px">
              
                    <Div>
                        <Avatar src="/user_profile.png" alt="user profile" sx={{ width: 74, height: 74, marginTop: 1 }}></Avatar>
                        <Span>
                            <UserName>{userName}</UserName>
                            <UserEmail>{userEmail}</UserEmail>
                        </Span>
                    </Div>
                    <Divider />
                    <ButtonSpan>
                        <TextButton>프로필 편집</TextButton>
                        <TextButton onClick={goMypage}>마이페이지</TextButton>
                        <TextButton>설정</TextButton>
                    </ButtonSpan>
                    <Divider />
                    <ButtonSpan>
                        <LogoutButton onClick={onLogout}>로그아웃</LogoutButton>
                    </ButtonSpan>
                
            </HeaderModal>
    );
}

export default ProfileModal;