import styled from '@emotion/styled';
import { Common } from '../styles/common';
import { useRecoilValue } from "recoil";
import { ModalDataAtom } from '../recoil/SemifoiloAtum';
import shareIcon from '../../public/home/shareIcon.svg';
import forumIcon from '../../public/home/forumIcon.svg';
import likesIcon from '../../public/home/likesIcon.svg';
import bookmarksIcon from '../../public/home/bookmarksIcon.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: start;
  justify-content: center;
  overflow: scroll;
  z-index: 1;
  gap: 28px;
`;
const ModalContent = styled.div`
  background: ${Common.colors.neutral[0]};
  width: 1234px;
  height: auto;
  overflow-y: hidden;
  border-radius: 24px;
  margin-top: 64px;
  margin-bottom: 81px;
  position: relative;
`;
const ModalImg = styled.img`
  width: 100%;
  object-fit: contain;
`
const ModalInfo = styled.div`
  align-items: center;
  padding: 48px ${Common.space.xl} ${Common.space.xl} ${Common.space.xl};
`;
const ModalTitle = styled.div`
  font-size: ${Common.font.size.xxxl};
  font-weight: ${Common.font.weight.semibold};
  color: ${Common.colors.neutral[100]};
  margin-bottom: ${Common.space.s};
`;
const ModalProfileInfo = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  &:hover .hoverProfile  {
    display: block;
  }
`;
const ModalUserProfileImg = styled.img`
  width: 42.71px;
  height: 42.71px;
  border-radius: 50%;
`
const ModalFollowBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72.59px;
  height: 35.24px;
  border-radius: 12px;
  border: none;
  background: ${Common.colors.primary[80]};
  color: ${Common.colors.neutral[0]};
  margin-left: 10px;
  position: relative;
  & >.hoverProfile{
    content: '';
    display: none;
    position: absolute;
    top: 100%;
    left: -95%;
    width: 456px;
    height: 355px;
    z-index: 2;
    
    &> .hovertriangle {
      width: 0;
      height: 0;
      border-bottom: 15px solid ${Common.colors.neutral[5]};
      border-top: 15px solid transparent;
      border-left: 13px solid transparent;
      border-right: 13px solid transparent;
      margin-left: 90px;
    }
    & > .hoverProfileBack {
      background-color: ${Common.colors.neutral[5]};
      height: 343px;
      width: 100%;
      padding: 28px;
      border-radius: 12px;
      /* box-shadow: 3px 3px 10px 1px gray; */
      & > .hoverUserInfoContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 19px;
        margin-bottom: 29px;
        & > .hoverUserInfo {
          text-align: start;
          display: flex;
          align-items: center;
          gap: 19px;
          & > .hoverUserImg {
            width: 79px;
            height: 79px;
            border-radius: 50%;
          }
          & > .hoverUserInfos {
            & > .hoverUserName {
              font-size: ${Common.font.size.md};
              font-weight: ${Common.font.weight.semibold};
              color: ${Common.colors.neutral[100]};
              margin-bottom: 4px;
            }
            & > .hoverCategory {
              font-size: ${Common.font.size.sm};
              font-weight: ${Common.font.weight.medium};
              color: ${Common.colors.neutral[30]};
            }
          }
        }
        & > .hoverUserState{
          background: ${Common.colors.neutral[20]};
          border-radius: 12px;
          width: 195px;
          height: 53px;
          display: flex;
          align-items: center;
          gap: 14px;
          & > .styleMenuLine {
            width: 1px;
            height: 70%;
            background-color:${Common.colors.neutral[10]};
          }
          justify-content: center;
          & > .hoverUserStates{
            & > p{
              font-size: ${Common.font.size.sm};
              font-weight: ${Common.font.weight.medium};
              color: ${Common.colors.neutral[100]};
            }
            & > span{
              font-size: ${Common.font.size.xs};
              font-weight: ${Common.font.weight.regular};
              color: ${Common.colors.neutral[40]};
            }
          }
        }
      }
      & > .hoverUserSemifolio{
        display: flex;
        gap: 2px;
        margin-bottom: 44px;
      }
      & > button {
        width: 320px;
        height: 50px;
        border-radius: 12px;
        background: ${Common.colors.primary[80]};
        border: none;
        font-size: ${Common.font.size.sm};
        font-weight: ${Common.font.weight.medium};
        color: ${Common.colors.neutral[0]};
      }
    }
  }
`
const ModalUserName = styled.div`
  font-size: ${Common.font.size.md};
  font-weight: ${Common.font.weight.semibold};
  color: ${Common.colors.neutral[100]};
`
const ProposalStatus = styled.div`
  font-size: ${Common.font.size.sm};
  font-weight: ${Common.font.weight.regular};
  color: ${Common.colors.neutral[60]};
`
const ModalButtonBlue = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: ${Common.colors.primary[80]};
  color: ${Common.colors.neutral[0]};
  margin-bottom: 6px;
  & > svg {
    width: 19px;
    height: 18px;
  }
`;
const ModalButtonBlack = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: ${Common.colors.neutral[100]};
  color: ${Common.colors.neutral[0]};
  margin-bottom: 6px;
  & > svg {
    width: 19px;
    height: 18px;
  }
`;
const ModalButtonTitle = styled.div`
  font-size: ${Common.font.size.sm};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.neutral[0]};
  text-align: center;
`;
const ModalButtonZone = styled.div`
  margin-bottom: ${Common.space.md};
`
const ModalFilter = styled.div`
  width: 100%;
  height: 185px;
  padding-top: 82px;
  justify-content: center;
  align-items: center;
  span {
    width: auto;
    height: 41px;
    border-radius: 12px;
    border: 1px solid ${Common.colors.neutral[100]};
    padding: 10px 20px;
    align-items: center;
    display: flex;
  }
  div{
    display: flex;
  }
`
const ModalFilterTag = styled.div`
  position: relative;
  bottom: 0px;
  left: 0px;
  gap: 10px;
  padding: 17px ${Common.space.md} ${Common.space.md} ${Common.space.md};
`
const ModalBottom = styled.div`
  justify-content: center;
  font-size: ${Common.font.size.sm};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.neutral[100]};
`

const ModalGrayBox = styled.div`
  height: 367px;
  background: ${Common.colors.neutral[50]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;
const ModalBottomButton = styled.div`
  display: flex;
  gap: ${Common.space.s};
  justify-content: center;
  align-items: center;
  margin-bottom: ${Common.space.md};
`;
const CustomModalButtonBlue = styled(ModalButtonBlue)`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
`
const CustomModalBlackBlue = styled(ModalButtonBlack)`
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
`
const ModalBottomButtonTitle = styled(ModalButtonTitle)`
  font-size: ${Common.font.size.lg};
  font-weight: ${Common.font.weight.semibold};
`
const ModalBottomTitle = styled.p`
  color: ${Common.colors.neutral[0]};
  font-size: ${Common.font.size.xxxl};
  font-weight: ${Common.font.weight.semibold};
  text-align: center;
  margin-bottom: 12px;
`
const ModalPostInfo = styled.div`
  color: ${Common.colors.neutral[0]};
  font-size: ${Common.font.size.md};
  display: flex;
  gap: 14.24px;
  justify-content: center;
  align-items: center;
  img{
    width: 19.58px;
    height: 16.38px;
  }
  span {
    display: flex;
    align-items: center;
    gap: 3.81px;
  }
`;

const ModalButtonContainer = styled.div`
  position: sticky;
  top: 64px;
  right: 0px;
  z-index: 2;
`


const UserInfoContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: ${Common.space.md};
  div{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    p{
      color: ${Common.colors.neutral[60]};
      font-size: ${Common.font.size.lg};
      font-weight: ${Common.font.weight.semibold};
      text-align: center;
    }
  }
`;
const CustomModalUserProfileImg = styled(ModalUserProfileImg)`
  width: 65px;
  height: 65px;
`;
const CustomModalFollowBtn = styled(ModalFollowBtn)`
  width: 130.61px;
  height: 40.93px;
  margin-left: 0px;
`;

const ModalSwiperContainer = styled.div`
  display: flex;
  flex-direction:column;
  gap: 24px;
  margin-bottom: 60px;
  span{
    font-size: ${Common.font.size.lg};
    font-weight: ${Common.font.weight.semibold};
    color: ${Common.colors.neutral[100]};
    margin-left: 93px;
  }
`
const CustomSwiper = styled(Swiper)`
  width: 1054px;
  height: 100%;
  .swiper-button-next{
    position: absolute;
  }
`;
const CustomSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  img {
  display: block;
  width: 338px;
  height: 253px;
  object-fit: cover;
  border-radius: 12px;
}
`;
const ModalCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 100px;
  width: 100%;
  & > .commentTitle {
    width: 100%;
    padding: 0 93px;
    font-size: ${Common.font.size.lg};
    font-weight: ${Common.font.weight.semibold};
    color: ${Common.colors.neutral[100]};
    display: flex;
    align-items: center;
    gap: 5px;
    span {
      color: ${Common.colors.primary[80]};
      font-size: ${Common.font.size.sm};
      font-weight: ${Common.font.weight.medium};
    }
  }
`
const ModalCommentBack = styled.div`
  width: 1046px;
  height: 492px;
  background: ${Common.colors.primary[5]};
  border-radius: 16px;
  padding: 45px 40px;
  & > .commentInput {
    width: 100%;
    height: 154px;
    border-radius: 12px;
    border: 1px solid ${Common.colors.neutral[30]};
    background:${Common.colors.neutral[0]};
    padding: 28px 36px;
    margin-bottom: 28px;
    resize: none;
    ::placeholder{
      font-size: ${Common.font.size.lg};
      font-weight: ${Common.font.weight.regular};
      color: #7A7878;
      font-style: normal;
      font-family: Pretendard;
    }
  }
  & > .commentContainer{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
    & > .comment{
      display: flex;
      gap: 16px;
      align-items: center;
      & > .commentInfo {
        display: flex;
        flex-direction: column;
        gap: 4px;
        & > .commentUser{
          font-size: ${Common.font.size.xl};
          font-weight: ${Common.font.weight.medium};
          color: ${Common.colors.neutral[100]};
          display: flex;
          align-items: center;
          gap: 4px;
          & > span {
            font-size: ${Common.font.size.md};
            font-weight: ${Common.font.weight.regular};
            color: #7A7878;
          }
        }
        & > .commentText {
          font-size: ${Common.font.size.md};
          font-weight: ${Common.font.weight.semibold};
          color: #7A7878;
        }
      }
    }
  }
  & > .commentButtonContainer {
    display: flex;
    align-items: end;
    justify-content: end;
    & > .commentButton {
      width: 102.01px;
      height: 47px;
      background: rgba(0, 0, 0, 0.2);
      border: none;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${Common.colors.neutral[100]};
      font-size: ${Common.font.size.lg};
      font-weight: ${Common.font.weight.semibold};
    }
  }
`;


function SemifoiloModal({ isOpen, onClose }) {
  const ModalData = useRecoilValue(ModalDataAtom);
  const [isFollow, setIsFollow] = useState(false);
  // const [followList, setFollowList] = useRecoilState();
  const follow = () =>{
    setIsFollow(!isFollow);
  }

  if (!isOpen) return null;
  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalInfo>
          <ModalTitle>{ModalData?.title}</ModalTitle>
          <ModalProfileInfo>
            <ModalUserProfileImg src={ModalData?.userProfile} />
            <div>
              <ModalUserName>{ModalData?.userName}</ModalUserName>
              <ProposalStatus>제안 가능 <img src='/home/modalGreenDot.svg' /></ProposalStatus>
            </div>
            <ModalFollowBtn onClick={follow}>{isFollow ? <p>팔로우</p> : <p>팔로잉 </p>}
              <div className='hoverProfile'>
                <div className="hovertriangle" />
                <div className='hoverProfileBack'>
                  <div className='hoverUserInfoContainer'>
                    <div className='hoverUserInfo'>
                      <img className='hoverUserImg' src={ModalData?.userProfile} />
                      <div className='hoverUserInfos'>
                        <p className='hoverUserName'>{ModalData?.userName}</p>
                        <p className='hoverCategory'>{ModalData?.category}</p>
                      </div>
                    </div>
                    <div className='hoverUserState'>
                      <div className='hoverUserStates'>
                        <p>3</p>
                        <span>업로드</span>
                      </div>
                      <div className='styleMenuLine' />
                      <div className='hoverUserStates'>
                        <p>10</p>
                        <span>좋아요</span>
                      </div>
                      <div className='styleMenuLine' />
                      <div className='hoverUserStates'>
                        <p>1</p>
                        <span>pick</span>
                      </div>
                    </div>
                  </div>
                <div className='hoverUserSemifolio'>
                  <img src='/home/semifolio/modalHover1.svg'></img>
                  <img src='/home/semifolio/modalHover2.svg'></img>
                  <img src='/home/semifolio/modalHover3.svg'></img>
                </div>
                <button onClick={follow}>{isFollow ? <p>팔로우</p> : <p>팔로잉</p>}</button>
                </div>
              </div>
            </ModalFollowBtn>
          </ModalProfileInfo>
        </ModalInfo>
        <ModalImg src='/home/semifolio/modal1.png'></ModalImg>
        <ModalImg src='/home/semifolio/modal2.png'></ModalImg>
        <ModalImg src='/home/semifolio/modal3.png'></ModalImg>
        <ModalImg src='/home/semifolio/modal4.png'></ModalImg>
        <ModalFilter>
          <ModalBottom>ⓒ 2023 KIM HYEANSU All rights reserved</ModalBottom>
          <ModalFilterTag>
            <span>{ModalData?.category}</span>
            {ModalData?.style != null && <span>{ModalData?.style}</span>}
          </ModalFilterTag>
        </ModalFilter>
        <ModalGrayBox>
          <div>
            <ModalBottomButton>
              <div>
                <CustomModalButtonBlue><img src="../../public/home/bigLikesIcon.svg" /></CustomModalButtonBlue>
                <ModalBottomButtonTitle>좋아요</ModalBottomButtonTitle>
              </div>
              <div>
                <CustomModalBlackBlue><img src="../../public/home/bigBookmarksIcon.svg" /></CustomModalBlackBlue>
                <ModalBottomButtonTitle>북마크</ModalBottomButtonTitle>
              </div>
            </ModalBottomButton>
            <ModalBottomTitle>{ModalData?.title}</ModalBottomTitle>
            <ModalPostInfo>
              <span><img src="../../public/home/likesIcon.svg" />{ModalData?.likes}</span>
              <span><img src="../../public/home/eyesIconWhite.svg" />{ModalData?.views}</span>
              <span><img src="../../public/home/bookmarksIcon.svg" />36</span>
            </ModalPostInfo>
          </div>
        </ModalGrayBox>
        <UserInfoContainer>
          <div>
            <CustomModalUserProfileImg src={ModalData?.userProfile} />
            <p>{ModalData?.userName}</p>
          </div>
          <CustomModalFollowBtn onClick={follow}>{isFollow ? <p>팔로우</p> : <p>팔로잉</p>}</CustomModalFollowBtn>
        </UserInfoContainer>
        <ModalSwiperContainer>
          <span>크리에이터의 다른 작업물</span>
          <CustomSwiper
            slidesPerView={3}
            spaceBetween={20}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <CustomSwiperSlide><img src="/home/semifolio/20.jpg" /></CustomSwiperSlide>
            <CustomSwiperSlide><img src="/home/semifolio/19.jpg" /></CustomSwiperSlide>
            <CustomSwiperSlide><img src="/home/semifolio/18.jpg" /></CustomSwiperSlide>
            <CustomSwiperSlide><img src="/home/semifolio/17.jpg" /></CustomSwiperSlide>
            <CustomSwiperSlide><img src="/home/semifolio/16.jpg" /></CustomSwiperSlide>
          </CustomSwiper>
        </ModalSwiperContainer>
        <ModalCommentContainer>
          <div className="commentTitle">코멘트 <span>2</span></div>
          <ModalCommentBack>
            <div className='commentContainer'>
              <div className='comment'>
                <img className='commentImg' src='/home/commentImg.svg' />
                <div className='commentInfo'>
                  <p className='commentUser'>최준생<span> · 10시간 전</span></p>
                  <p className="commentText">잘 보고 갑니다.</p>
                </div>
              </div>
              <div className='comment'>
                <img className='commentImg' src='/home/commentImg.svg' />
                <div className='commentInfo'>
                  <p className='commentUser'>최준생<span> · 10시간 전</span></p>
                  <p className="commentText">너무 멋져요!</p>
                </div>
              </div>
            </div>
            <textarea className="commentInput" placeholder="댓글을 입력해 주세요."></textarea>
            <div className='commentButtonContainer'>
              <button className="commentButton">댓글작성</button>
            </div>
          </ModalCommentBack>
        </ModalCommentContainer>
      </ModalContent>
      <ModalButtonContainer>
        <ModalButtonZone>
          <ModalButtonBlue><img src={forumIcon} /></ModalButtonBlue>
          <ModalButtonTitle>제안하기</ModalButtonTitle>
        </ModalButtonZone>
        <ModalButtonZone>
          <ModalButtonBlue><img src={likesIcon} /></ModalButtonBlue>
          <ModalButtonTitle>좋아요</ModalButtonTitle>
        </ModalButtonZone>
        <ModalButtonZone>
          <ModalButtonBlack><img src={bookmarksIcon} /></ModalButtonBlack>
          <ModalButtonTitle>북마크</ModalButtonTitle>
        </ModalButtonZone>
        <ModalButtonZone>
          <ModalButtonBlack><img src={shareIcon} /></ModalButtonBlack>
          <ModalButtonTitle>공유하기</ModalButtonTitle>
        </ModalButtonZone>
      </ModalButtonContainer>

    </ModalBackground>
  );
}

export default SemifoiloModal;