import styled from "@emotion/styled";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Common } from "../styles/common";

const SemifolioInfos = styled.div`
  flex: 0 1 calc(25% - 24px);
  margin: 16px 0;
`;

const HoverText = styled.div`
  position: absolute;
  top: 78%;
  left: 27%;
  transform: translate(-50%, -50%);
  color: white;
  opacity: 0;
  p {
    /* padding: 9px 0; */
    font-size: ${Common.font.size.xs};
    font-weight: ${Common.font.weight.semibold};
  }
  h3{
    font-size: ${Common.font.size.lg};
    font-weight: ${Common.font.weight.semibold};
  }
`;

const HoverBox = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  :hover {
    img {
      transition: filter 0.5s;
    }
    div {
      opacity: 1;
    }
  }
  :before {
    content: '';
    border-radius: 16px;
    position: absolute;
    bottom: 8px;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.8));
    opacity: 0;
    transition: opacity 0.5s;
  }
  :hover:before {
    opacity: 1;
  }
`;


const SemiImage = styled.img`
  width: 330px;
  height: 260px;
  border-radius: 16px;
  object-fit: cover;
  margin-bottom: 8px;
  display: block;
`;


const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: ${Common.space.xs};
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

const PostInfoGroup = styled.div`
  display: flex;
  align-items: center;
  color: #666666;
  font-size: 20px;
  div {
    font-size: ${Common.font.size.sm};
    font-weight: ${Common.font.weight.medium};
    margin: 0 5px;
  }
`;

const LikesGroup = styled.div`
  display: flex;
  margin-right: ${Common.space.s} ;
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
  openModal: (data: {  
    title: string;
    category: string;
    imageUrl: string;
    userProfile: string;
    userName: string;
    likes: number;
    views: number;
    pick?: boolean; 
  }) => void;
}


function SemifolioInfo(props: SemifolioProps) {
  const handleImageClick = () => {
    props.openModal({
      title: props.title,
      category: props.category,
      imageUrl: props.imageUrl,
      userProfile: props.userProfile,
      userName: props.userName,
      likes: props.likes,
      views: props.views,
    });
  };

  return (
    <SemifolioInfos onClick={handleImageClick}>
      <HoverBox>
        <SemiImage src={props.imageUrl} alt=""></SemiImage>
        <HoverText>
          <p>{props.category}</p>
          <h3>{props.title}</h3>
        </HoverText>
      </HoverBox>
      <SemiInfo>
        <UserInfoGroup>
          <UserImage src={props.userProfile} alt="" />
          <p>{props.userName}</p>
        </UserInfoGroup>
        <PostInfoGroup>
          <LikesGroup>
            <ThumbUpAltIcon />
            <div>{props.likes}</div>
          </LikesGroup>
          <RemoveRedEyeIcon />
          <div>{props.views}</div>
        </PostInfoGroup>
      </SemiInfo>
    </SemifolioInfos>
  );
}

export default SemifolioInfo;