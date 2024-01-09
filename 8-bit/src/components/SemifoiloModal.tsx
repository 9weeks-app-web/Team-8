import styled from '@emotion/styled';
import { Common } from '../styles/common';
import { useRecoilValue } from "recoil";
import { ModalDataAtom } from '../recoil/SemifoiloAtum';
import ForumIcon from '@mui/icons-material/Forum';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: start;
  justify-content: center;
  padding-top: 118px;
  padding-bottom: 81px;
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
`;
const ModalImg = styled.img`
  object-fit: contain;
`
const ModalInfo = styled.div`
  align-items: center;
  /* gap: ${Common.space.s}; */
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
  color: ${Common.colors.neutral[60]};
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
  padding: 64px 404px;
  background: ${Common.colors.neutral[50]};
`

function SemifoiloModal({ isOpen, onClose }) {
  const ModalData = useRecoilValue(ModalDataAtom);

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
              <ProposalStatus>제안 가능</ProposalStatus>
            </div>
            <ModalFollowBtn>팔로우</ModalFollowBtn>
          </ModalProfileInfo>
        </ModalInfo>
        <ModalImg src='/home/modalImg.png'></ModalImg>
        <ModalFilter>
          <ModalBottom>ⓒ 2023 KIM HYEANSU All rights reserved</ModalBottom>
          <ModalFilterTag>
            <span>{ModalData?.category}</span>
            {ModalData?.style != null && <span>{ModalData?.style}</span>}
          </ModalFilterTag>
        </ModalFilter>
        <ModalGrayBox>
          <div>
            <div></div>
            <div>{ModalData?.title}</div>
            <div></div>
          </div>
        </ModalGrayBox>
        <div>팔로우</div>
        <div>스와이퍼</div>
        <div>코멘트</div>
      </ModalContent>
      <div>
        <ModalButtonZone>
          <ModalButtonBlue><ForumIcon /></ModalButtonBlue>
          <ModalButtonTitle>제안하기</ModalButtonTitle>
        </ModalButtonZone>
        <ModalButtonZone>
          <ModalButtonBlue><ThumbUpAltIcon /></ModalButtonBlue>
          <ModalButtonTitle>좋아요</ModalButtonTitle>
        </ModalButtonZone>
        <ModalButtonZone>
          <ModalButtonBlack><ThumbUpAltIcon /></ModalButtonBlack>
          <ModalButtonTitle>북마크</ModalButtonTitle>
        </ModalButtonZone>
        <ModalButtonZone>
          <ModalButtonBlack><ThumbUpAltIcon /></ModalButtonBlack>
          <ModalButtonTitle>공유하기</ModalButtonTitle>
        </ModalButtonZone>
      </div>

    </ModalBackground>
  );
}

export default SemifoiloModal;