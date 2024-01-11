import styled from "@emotion/styled";
import Avatar from '@mui/material/Avatar';
import React from "react";
import { useNavigate } from "react-router-dom";
import { Common } from "../styles/common";
import HeaderModal from "./HeaderModal";

const Spacer = styled.div`
  flex-grow: 1;
`;

const ModalTitle = styled.h1`
  font-size: ${Common.font.size["md"]};
  font-weight: ${Common.font.weight.medium};
  margin-left: ${Common.space.xs};
`;

const TextButton = styled.h1`
  cursor: pointer;
  font-size: ${Common.font.size["xs"]};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.neutral["60"]};
  margin-top: 8px;
  margin-right: ${Common.space.xs};

`;

const NavButton = styled.h1`
  cursor: pointer;
  font-size: ${Common.font.size["sm"]};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.primary["100"]};
  position: absolute;
  right: ${Common.space["md"]};
  bottom:  ${Common.space["md"]};
`;

const ListTile = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: ${Common.space["s"]};
  margin-top: 7px;
`;

const SelectedListTile = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: ${Common.space["s"]};
  background-color: ${Common.colors.neutral["5"]};
  border-radius: 5px;
`;

const MessageUser = styled.h1`
  display: inline-block;
  font-size: ${Common.font.size["sm"]};
  margin-bottom: ${Common.space.xs};
  margin-right: 7px;
`;

const Hour = styled.h1`
  display: inline-block;
  font-size: ${Common.font.size["xxs"]};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.neutral["50"]};
  margin-bottom: 4px;
`;

const MessageContent = styled.h1`
  font-weight: ${Common.font.weight.semibold};
  font-size: ${Common.font.size["xs"]};
  color: ${Common.colors.neutral["50"]};
`;

const Divider = styled.hr`
  border: none; /* 기존 테두리 제거 */
  border-top: 1.5px solid ${Common.colors.neutral["20"]};
  margin-top: ${Common.space["s"]};
`;

const Div = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MessageModal: React.FC = () => {

  const navigate = useNavigate();
  const goChat = () => {
    navigate('/chat');
  }

  return (

    <HeaderModal width="350px" height="336px" triangleLeft="50%" marginRight="15px">
      <div>
        <Div>
          <ModalTitle>받은 메시지</ModalTitle>
          <Spacer></Spacer>
          <TextButton>삭제하기</TextButton>
        </Div>
        <Divider />
        <SelectedListTile>
          <Avatar alt="user profile" src="https://picsum.photos/200/200" sx={{ width: 35, height: 35, bgcolor: Common.colors.neutral[10], color: Common.colors.neutral[100], marginRight: Common.space.s }}></Avatar>
          <Spacer>
            <MessageUser>이자인</MessageUser>
            <Hour>1시간 전</Hour>
            <MessageContent>혹시 스나이퍼팩토리 교육과정 어떠셨나요?</MessageContent>
          </Spacer>
          <Avatar alt="not read message" sx={{ width: 24, height: 24, bgcolor: Common.colors.primary["80"], fontSize: Common.font.size["sm"], fontWeight: Common.font.weight.semibold }}>1</Avatar>
        </SelectedListTile>
        <ListTile>
          <Avatar alt="user profile" src="https://picsum.photos/100/100" sx={{ width: 35, height: 35, bgcolor: Common.colors.neutral[10], color: Common.colors.neutral[100], marginRight: Common.space.s }}></Avatar>
          <Spacer>
            <MessageUser>김스팩</MessageUser>
            <Hour>2시간 전</Hour>
            <MessageContent>사이드 프로젝트 같이 하실래요?</MessageContent>
          </Spacer>
        </ListTile>
        <ListTile>
          <Avatar alt="user profile" src="https://picsum.photos/50/50" sx={{ width: 35, height: 35, bgcolor: Common.colors.neutral[10], color: Common.colors.neutral[100], marginRight: Common.space.s }}></Avatar>
          <Spacer>
            <MessageUser>신유뎀</MessageUser>
            <Hour>10시간 전</Hour>
            <MessageContent>프로젝트 팀원 구합니다!</MessageContent>
          </Spacer>
        </ListTile>
        <NavButton onClick={goChat}>모든 메시지 보기</NavButton>
      </div>
    </HeaderModal>

  );
}

export default MessageModal;