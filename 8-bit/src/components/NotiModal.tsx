import styled from "@emotion/styled";
import { Common } from "../styles/common";
import HeaderModal from "./HeaderModal";
import React from "react";
import { FavoriteBorderOutlined, Clear } from '@mui/icons-material';
import { red } from '@mui/material/colors';

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

const ListTile = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${Common.space["xs"]}; 
  margin-right: ${Common.space["s"]};
  padding-bottom: ${Common.space["s"]};
`;

const NotiUser = styled.h1`
  display: inline-block;
  font-size: ${Common.font.size["xs"]};
  font-weight: ${Common.font.weight.bold};
  margin-bottom: 4px;
`;

const NotiText = styled.h1`
  display: inline-block;
  font-size: ${Common.font.size["xs"]};
  font-weight: ${Common.font.weight.regular};
`;

const Hour = styled.h1`
  display: inline;
  font-size: ${Common.font.size["xxs"]};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.neutral["50"]};
  margin-right: ${Common.space.xs};
`;

const SubText = styled.h1`
  display: inline;
  font-size: ${Common.font.size["xxs"]};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.neutral["50"]};
  margin-right: ${Common.space.xs};
`;


const Divider = styled.hr`
  border: none; /* 기존 테두리 제거 */
  border-top: 1.5px solid ${Common.colors.neutral["20"]};
  margin-top: ${Common.space["s"]};
  margin-bottom: ${Common.space["md"]};
`;

const Div = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SubTextDiv = styled.div`
  margin-top: -6px;
  max-width: 155px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; 
`;

const Img = styled.img`
  margin-right: ${Common.space.md};
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotiModal: React.FC<ModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <HeaderModal left="1130px">
        <div>
          <Div>
            <ModalTitle>읽지 않은 알림</ModalTitle>
            <Spacer></Spacer>
            <TextButton>모두 삭제</TextButton>
          </Div>
          <Divider />
          <ListTile>
            <Img src="/noti_message.svg" alt="댓글" />
            <Spacer>
              <NotiUser>최준생</NotiUser>
              <NotiText>님이 댓글을 달았습니다.</NotiText>
              <Div>
                <SubTextDiv>
                  <SubText>혹시 스나이퍼 팩토리 교육과정 어때요? 블라블라블라블라</SubText>
                </SubTextDiv>      
                <Hour>1시간 전</Hour>
              </Div>
            </Spacer>
            <Clear sx={{ width: 20, height: 20, color: Common.colors.neutral["50"] }} ></Clear>
          </ListTile>
          <ListTile>
            <FavoriteBorderOutlined sx={{ width: 25, height: 25, color: red[500], marginRight: Common.space.md }} />
            <Spacer>
              <NotiUser>신유뎀</NotiUser>
              <NotiText>님이 좋아요를 눌렀습니다.</NotiText>
              <SubTextDiv>
                <Hour>1시간 전</Hour>
              </SubTextDiv>
            </Spacer>
            <Clear sx={{ width: 20, height: 20, color: Common.colors.neutral["50"] }} ></Clear>
          </ListTile>
          <ListTile>
            <Img src="/noti_message.svg" alt="댓글" />
            <Spacer>
              <NotiUser>김스팩</NotiUser>
              <NotiText>님이 댓글을 달았습니다.</NotiText>
              <Div>
                <SubTextDiv>
                  <SubText>화이팅입니다!</SubText>
                </SubTextDiv>
                <Hour>2시간 전</Hour>
              </Div>
            </Spacer>
            <Clear sx={{ width: 20, height: 20, color: Common.colors.neutral["50"] }} ></Clear>
          </ListTile>
        </div>
      </HeaderModal>
    </div>
  );
}

export default NotiModal;