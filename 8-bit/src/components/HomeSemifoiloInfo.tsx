import styled from "@emotion/styled";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Common } from "../styles/common";
import { useRecoilState } from 'recoil';
import { ModalDataAtom } from "../recoil/SemifoiloAtum";

const SemifolioInfos = styled.div`
  flex: 0 1 calc(25% - ${Common.space.md});
`;
const PickImage = styled.img`
  position: absolute;
  top: -6px;
  left: 18px;
  display: none;
`;
const HoverBox = styled.div`
  width: 330px;
  height: 260px;
  position: relative;
  display: inline-block;
  overflow: hidden;
  :hover {
    img {
      transition: 0.8s;
      display: block;
    }
    div {
      opacity: 1;
    }
  }
  :before {
    content: '';
    border-radius: 12px;
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 164px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.7));
    opacity: 0;
    transition: opacity 0.5s;
  }
  :hover:before {
    opacity: 1;
  }
  div {
    position: absolute;
    bottom: 22px;
    left: 16px;
    color: white;
    opacity: 0;
    p {
    font-size: ${Common.font.size.xs};
    font-weight: ${Common.font.weight.semibold};
    }
    h3{
      font-size: ${Common.font.size.lg};
      font-weight: ${Common.font.weight.semibold};
    }
  }
`;
const SemiImage = styled.img`
  width: 330px;
  height: 260px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 9px;
  display: block;
`;
const SemiInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserInfoGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: ${Common.font.size.sm};
  font-weight: ${Common.font.weight.medium};
`;
const UserImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: ${Common.space.xs};
  /* background-color: #d9d9d9d9 */
`;
const PostInfoGroup = styled.div`
  display: flex;
  align-items: center;
  color: ${Common.colors.neutral[60]};
  font-size: 20px;
  gap: ${Common.space.s};
  div {
    display: flex;
    font-size: ${Common.font.size.sm};
    font-weight: ${Common.font.weight.medium};
    gap: 4px;
  }
`;

interface SemifolioProps {
  title: string;
  category: string;
  imageUrl: string;
  userProfile: string;
  userName: string;
  likes: number;
  views: number;
  pick?: boolean;
  style?: string;
  openModal: () => void;
}

function HomeSemifolioInfo(props: SemifolioProps) {
  const [modalData, setModalData] = useRecoilState(ModalDataAtom);
  const handleImageClick = () => {
  const semifolioData = {
    title: props.title,
    category: props.category,
    imageUrl: props.imageUrl,
    userProfile: props.userProfile,
    userName: props.userName,
    likes: props.likes,
    views: props.views,
    style: props.style,
  };
  props.openModal();
  setModalData(semifolioData);
};

  return (
    <SemifolioInfos onClick={handleImageClick}>
      <HoverBox>
        <SemiImage src={props.imageUrl} alt=""></SemiImage>
        <div>
          <p>{props.category}</p>
          <h3>{props.title}</h3>
        </div>
        {props.pick && <PickImage src='/home/Pick.svg' alt="My Image" />}
      </HoverBox>
      <SemiInfo>
        <UserInfoGroup>
          <UserImage src={props.userProfile} alt="" />
          <p>{props.userName}</p>
        </UserInfoGroup>
        <PostInfoGroup>
          <div>
            <ThumbUpAltIcon />
            <div>{props.likes}</div>
          </div>
          <div>
            <RemoveRedEyeIcon />
            <div>{props.views}</div>
          </div>
        </PostInfoGroup>
      </SemiInfo>
    </SemifolioInfos>
  );
}

export default HomeSemifolioInfo;