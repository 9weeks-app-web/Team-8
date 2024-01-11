import styled from "@emotion/styled";
import { Common } from "../styles/common";
import { Avatar, IconButton, Popover, Typography } from "@mui/material";
import { userLists, mockMessages } from "../db/chatDatas";
import { Delete, MoreHoriz } from '@mui/icons-material';

import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


const StyledTextField = styled(TextField)`
 
  .MuiOutlinedInput-root { 
    width: 400px;
  height: 40px;    
    border-radius: 8px;
  }
  .MuiInputAdornment-root .MuiSvgIcon-root {
    color: ${Common.colors.neutral["30"]};
  }
`;

const StyledTextField2 = styled(TextField)`
 
  .MuiOutlinedInput-root { 
    width: 830px;
  height: 40px;    
    border-radius: 8px;
  }
  .MuiInputAdornment-root .MuiSvgIcon-root {
    color: ${Common.colors.neutral["30"]};
  }
`;

const SearchTextField: React.FC = () => {
    return (
        <StyledTextField
            variant="outlined"
            placeholder="대화 내용을 검색해 보세요."
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
};


const Spacer = styled.div`
  flex-grow: 1;
`;

const Div = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 24px;
`;

const ChatLayout = styled.div`
  display: grid;
  grid-template-columns:  446px 922px;
  grid-gap: 24px;
  `;

const ChatRow = styled.div`
display: grid;
grid-template-rows: 104px 759px;
grid-gap: 10px;
`;


//ChatList 안에 있는 요소들

const ChatListStyle = styled(ChatList)`
    display: grid;
    grid-template-rows: auto 872px 60px
`;

const HeaderSpan = styled.span`
    display: flex;
    margin-top: 28px;
    margin-left: 28px;
`;

const ChatDiv = styled.div`
    background-color: ${Common.colors.primary["5"]};
    height: 872px;
    display: flex;
    flex-direction: column;
`;


const Header = styled.div`
    margin-top: 19px;
    font-weight: ${Common.font.weight.semibold};
    font-size: ${Common.font.size.header};
    margin-right: ${Common.space.xs};
    margin-bottom: 10px;
`;

const TabBetween = styled.div`
    width: ${Common.space.s}
`;

const TabSpan = styled.span`
    display: flex;
    margin-left: 36px;
    margin-top: ${Common.space.s};
`;

const SelectedTab = styled.button`
    padding-bottom:${Common.space.xs};
    font-weight: ${Common.font.weight.semibold};
    font-size: ${Common.font.size.xxxl};
    border: none;
    background-color: transparent;
    color: black;
    border-bottom: 2.5px solid ${Common.colors.primary[80]};
    
`;

const TabText = styled.button`
    font-weight: ${Common.font.weight.semibold};
    font-size: ${Common.font.size.xxxl};
    border: none;
    background-color: transparent;
    color: ${Common.colors.neutral["30"]};
    margin-bottom: ${Common.space.xs};
`;

const ChatListContainer = styled.div`
  height: 665px; 
  overflow-y: auto;
  margin-top: 10px;
`;

const SelectedListTile = styled.div`
  position: relative;
  cursor: pointer;
  height: 102px;
  display: flex;
  align-items: center;
  padding: ${Common.space["s"]};
  background-image: linear-gradient(90deg ,${Common.colors.primary["30"]}, transparent);
`;

const ListTile = styled.div`
  cursor: pointer;
  height: 102px;
  display: flex;
  align-items: center;
  padding: ${Common.space["s"]};
  background-color: transparent;
`;

const DeleteSpan = styled.span`
    margin-top: 8px;
    background-color: ${Common.colors.primary["5"]};
    border: 1px solid ${Common.colors.neutral["10"]};
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-right: 20px;
`;

const MessageUser = styled.h1`
  display: inline-block;
  font-size: ${Common.font.size["xl"]};
  font-weight: ${Common.font.weight.medium};
  margin-bottom: ${Common.space.xs};
  margin-right: 7px;
`;

const Hour = styled.h1`
  display: inline-block;
  font-size: ${Common.font.size["sm"]};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.neutral["50"]};
  position: relative;
  right:-200px;
  margin-bottom: 4px;
`;

const MessageContent = styled.h1`
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: ${Common.font.weight.medium};
  font-size: ${Common.font.size["md"]};
  color: ${Common.colors.neutral["50"]};
`;

const ChatSpan = styled.span`
padding: 22px;
border: 2px solid ${Common.colors.neutral[10]};
display: flex;
align-items: center;
`;

const ChatUserSpan = styled.span`
display: flex;
flex-direction: column;
justify-content: start;
`;

const ChatRoom = styled.div`
  display: grid;
  grid-template-rows: 689px 70px;
  border: 2px solid ${Common.colors.neutral[10]};
`;

const User = styled.h1`
    font-weight: ${Common.font.weight.semibold};
    font-size: ${Common.font.size.xxxl};
    margin-bottom: ${Common.space.xs};
`;

const Suggestion = styled.h1`
  font-weight: ${Common.font.weight.regular};
  font-size: ${Common.font.size["sm"]};
  color: gray;
  margin-top: ${Common.space.s};
  display: inline
`;

const Chats = styled.h1`
  font-weight: ${Common.font.weight.regular};
  font-size: ${Common.font.size["md"]};
  margin-top: ${Common.space.s};
  display: inline
`;

const Green = styled.h1`
  margin-bottom: 7px;
  margin-left: 7px;
  display: inline;
  color: ${Common.colors.system.success};
  margin-top: ${Common.space.s};
  font-size: 8px;
`;

const Modal = styled.div`
    width: 176px;
    height: 168px;
    margin: 0 auto;

`;

const MessagesContainer = styled.div`
  overflow-y: auto; // 스크롤 가능하도록 설정
  padding: 10px;
  
`;

const TileSpan = styled.span`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
`;

const MessageTile = styled.div`
  width: 244px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  background-color: ${Common.colors.primary[5]};
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

const SendMessage = styled.div`
  margin-left: 640px;
  width: 244px;
  padding: 10px;
  border-bottom: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  background-color: ${Common.colors.primary[50]};
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  
`;

const Send = styled.div`
`;

function MessageList() {
    return (
        <MessagesContainer>
            {mockMessages.map((message, index) => (
                message.sender === '이자인' ?
                    <span>

                        {index === 1 || index == 6 ? null :
                            <Avatar alt="user profile" src="https://picsum.photos/200/200" sx={{ width: 48, height: 48, bgcolor: Common.colors.neutral[10], color: Common.colors.neutral[100], marginRight: Common.space.s }}></Avatar>
                        }
                        <TileSpan>
                            {index === 1 || index == 6 ? null :
                                <Chats style={{ marginLeft: 2 }}>이자인</Chats>}
                            <MessageTile key={index}>
                                <Chats>{message.content} </Chats>
                            </MessageTile>
                        </TileSpan>
                        <Hour>오후 1:46</Hour>

                    </span>
                    : <Send><SendMessage key={index}> <Chats>{message.content}</Chats></SendMessage><Hour style={{ marginLeft: 630 }}>오후 1:46</Hour></Send>
            ))}
        </MessagesContainer>
    );
};


function ChatList() {
    return (
        <ChatDiv>
            <div>
                <HeaderSpan>
                    <Header>메시지</Header>
                    <Avatar alt="not read message" sx={{ marginTop: 3, width: 28, height: 28, bgcolor: Common.colors.primary["80"], fontSize: Common.font.size["sm"], fontWeight: Common.font.weight.semibold }}>1</Avatar>
                </HeaderSpan>
                <TabSpan>
                    <SelectedTab>모든 메시지</SelectedTab>
                    <TabBetween />
                    <TabText>안읽은</TabText>
                </TabSpan>
            </div>
            <ChatListContainer>
                {userLists.map((message, index) => (
                    index === 0 ?
                        <SelectedListTile key={index}>
                            <Avatar alt="user profile" src="https://picsum.photos/200/200" sx={{ width: 48, height: 48, bgcolor: Common.colors.neutral[10], color: Common.colors.neutral[100], marginRight: Common.space.s }}></Avatar>
                            <Spacer>
                                <MessageUser>{message.sender}</MessageUser>
                                <Hour>1시간 전</Hour>
                                <MessageContent>{message.content}</MessageContent>
                            </Spacer>
                            <Avatar alt="not read message" sx={{ marginTop: 3, width: 28, height: 28, bgcolor: Common.colors.primary["80"], fontSize: Common.font.size["sm"], fontWeight: Common.font.weight.semibold }}>1</Avatar>

                        </SelectedListTile> :
                        index === 1 ?
                            <ListTile>
                                <Avatar alt="user profile" src="https://picsum.photos/100/100" sx={{ width: 48, height: 48, bgcolor: Common.colors.neutral[10], color: Common.colors.neutral[100], marginRight: Common.space.s }}></Avatar>
                                <Spacer>
                                    <MessageUser>{message.sender}</MessageUser>
                                    <Hour>1시간 전</Hour>
                                    <MessageContent>{message.content}</MessageContent>
                                </Spacer>
                            </ListTile>
                            :
                            <ListTile>
                                <Avatar alt="user profile" src="https://picsum.photos/50/050" sx={{ width: 48, height: 48, bgcolor: Common.colors.neutral[10], color: Common.colors.neutral[100], marginRight: Common.space.s }}></Avatar>
                                <Spacer>
                                    <MessageUser>{message.sender}</MessageUser>
                                    <Hour>1시간 전</Hour>
                                    <MessageContent>{message.content}</MessageContent>
                                </Spacer>
                            </ListTile>
                ))}
            </ChatListContainer>
            <DeleteSpan>
                <Spacer />
                <Delete sx={{ color: Common.colors.neutral["30"] }} />
            </DeleteSpan>
        </ChatDiv>
    );
}

function ChatUser() {

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'popover' : undefined;
    return (
        <ChatSpan>
            <Avatar alt="user profile" src="https://picsum.photos/200/200" sx={{ marginLeft: 2, width: 60, height: 60, bgcolor: Common.colors.neutral[10], color: Common.colors.neutral[100], marginRight: Common.space.s }}></Avatar>
            <ChatUserSpan>
                <User>이자인</User>
                <Spacer><Suggestion>제안 가능</Suggestion><Green>●</Green></Spacer>
            </ChatUserSpan>
            <Spacer />
            <SearchTextField />
            <IconButton aria-describedby={id} onClick={handleClick}><MoreHoriz fontSize="large" /></IconButton>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Modal>
                    <Typography sx={{ p: 2 }}>알림끄기</Typography>
                    <Typography sx={{ p: 2 }}>차단하기</Typography>
                    <Typography sx={{ p: 2 }}>나가기</Typography>
                </Modal>
            </Popover>
        </ChatSpan >
    );
}



function Chat() {
    return (
        <Div>
            <ChatLayout>
                <ChatListStyle />
                <ChatRow>
                    <ChatUser></ChatUser>
                    <ChatRoom>
                        <MessageList />
                        <DeleteSpan> <StyledTextField2
                            sx={{ marginLeft: 1, width : 803}}
                            variant="outlined"
                            placeholder="메시지 내용을 입력하세요."
                        />
                        <Spacer />
                        <img style={{width: 45, height: 45, cursor: "pointer"}} src="/arrow.svg" alt="arrow" />
                        </DeleteSpan >
                    </ChatRoom>
                </ChatRow>
            </ChatLayout>
        </Div>
    );
}

export default Chat;