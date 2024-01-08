import styled from "@emotion/styled";
import { Common } from "../styles/common";
import Avatar from '@mui/material/Avatar';
import HeaderModal from "./HeaderModal";
import React from "react";

const Spacer = styled.div`
  flex-grow: 1;
`;

const ModalTitle = styled.h1`
  font-size: ${Common.font.size["md"]};
  font-weight: ${Common.font.weight.medium};
`;

const TextButton = styled.h1`
font-size: ${Common.font.size["sm"]};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.neutral["60"]};
`;

const NavButton = styled.h1`
font-size: ${Common.font.size["sm"]};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.primary["100"]};
  position: absolute;
  right: ${Common.space["md"]};
  bottom:  ${Common.space["md"]};
`;

const ListTile = styled.div`
  display: flex;
  align-items: center;
  padding: ${Common.space["s"]};
`;

const SelectedListTile = styled.div`
  display: flex;
  align-items: center;
  padding: ${Common.space["s"]} ${Common.space["s"]} ${Common.space["md"]} ${Common.space["s"]};
  background-color: ${Common.colors.neutral["5"]};
  border-radius: 4px;
`;

const MessageUser = styled.h1`
  display: inline-block;
  font-size: ${Common.font.size["sm"]};
  margin-bottom: ${Common.space.xs};
  margin-right: 4px;
`;

const Hour = styled.h1`
  display: inline-block;
  font-size: ${Common.font.size["xxs"]};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.neutral["50"]};
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


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MessageModal: React.FC<ModalProps> = ({isOpen}) => {
    if (!isOpen) return null;
    return (
            <div onClick={(e) => e.stopPropagation()}>
                <HeaderModal  left="1090px">
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
                                <MessageUser>최준생</MessageUser>
                                <Hour>1시간 전</Hour>
                                <MessageContent>혹시 스나이퍼팩토리 교육과정 어때요?</MessageContent>
                            </Spacer>
                            <Avatar alt="읽지 않은 알림" sx={{ width: 24, height: 24, bgcolor: Common.colors.system.warning, fontSize: Common.font.size["xs"], fontWeight: Common.font.weight.semibold}}>1</Avatar>
                        </SelectedListTile>
                        <ListTile>
                            <Avatar alt="user profile" src="https://picsum.photos/100/100" sx={{ width: 35, height: 35, bgcolor: Common.colors.neutral[10], color: Common.colors.neutral[100], marginRight: Common.space.s }}></Avatar>
                            <Spacer>
                                <MessageUser>김스팩</MessageUser>
                                <Hour>2시간 전</Hour>
                                <MessageContent>화이팅입니다!</MessageContent>
                            </Spacer>
                           
                        </ListTile>
                        <NavButton>전체보기</NavButton>
                    </div>
                </HeaderModal>
            </div>
    );
}

export default MessageModal;