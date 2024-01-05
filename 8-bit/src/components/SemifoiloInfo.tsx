import styled from "@emotion/styled";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Pick from '../../public/home/Frame 1000005921.png'

const PickImage = styled.img`
  position: absolute;
  top: -2%;
  left: 5%;
`

const SemifolioInfos = styled.div`
  flex: 0 1 calc(25% - 20px);
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
    padding: 9px 0;
    font-size: 13px;
    font-weight: 500;
  }
  h3{
     font-weight: 550;
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
  width: 400px;
  height: 320px;
  border-radius: 16px;
  object-fit: cover;
  margin-bottom: 8px;
  display: block;
`;


const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
`;

const SemiInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfoGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: medium;
  font-weight: 550;
`;

const PostInfoGroup = styled.div`
  display: flex;
  align-items: center;
  color: #666666;
  font-size: 20px;
  div {
    font-size: 17px;
    font-weight: 500;
    margin: 0 5px;
  }
`;

const LikesGroup = styled.div`
  display: flex;
  padding-right: 8px;
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
        {props.pick && <PickImage src={Pick} alt="My Image" />}
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