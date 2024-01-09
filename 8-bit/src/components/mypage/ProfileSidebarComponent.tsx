import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Common } from "../../styles/common";
import SkillBar from "../mypage/SkillBar";

const ProfileSidebar = styled.aside`
  background: ${Common.colors.neutral[0]};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 35px;
  left: 35px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserName = styled.h2``;

const UserEmail = styled.span``;

const UserFollow = styled.div`
  display: flex;
`;

const Following = styled.div``;

const Follower = styled.div``;

const EditProfileButton = styled(Button)`
  margin: 10px 0;
  width: 100%;
`;
const RequestJobSettingButton = styled(Button)`
  margin: 10px 0;
  width: 100%;
`;

const Introduction = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const IntroductionBadge = styled.span``;

const IntroductionSns = styled.div`
  display: flex;
  & > div {
    width: 51px;
    height: 51px;
    border-radius: 100%;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Career = styled.div`
  display: flex;
  flex-direction: column;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function ProfileSidebarComponent() {
  return (
    <ProfileSidebar>
      <Avatar
        sx={{ width: 80, height: 80 }}
        src="path_to_avatar_image.jpg"
        alt="User Name"
      />
      <ProfileInfo>
        <UserName>사용자 이름</UserName>
        <UserEmail>email@example.com</UserEmail>
        <UserFollow>
          <Following>
            <span>10</span>
            <p>팔로잉</p>
          </Following>
          <Follower>
            <span>50</span>
            <p>팔로워</p>
          </Follower>
        </UserFollow>
      </ProfileInfo>
      <EditProfileButton variant="contained">프로필 편집</EditProfileButton>
      <RequestJobSettingButton variant="contained">
        작업물 의뢰/구직 설정
      </RequestJobSettingButton>

      <Introduction>
        <span>소개</span>
        <IntroductionBadge>UI/UX디자이너</IntroductionBadge>
        <p>안녕하세요! 문다여입니다 많은 관심 부탁드립니다!</p>
        <IntroductionSns>
          <div>
            <img src="/instagram.png" alt="인스타그램" />
          </div>
          <div>
            <img src="/facebook.svg" alt="페이스북" />
          </div>
          <div>
            <img src="/naver.png" alt="네이버" />
          </div>
          <div>
            <img src="/github.svg" alt="깃헙" />
          </div>
        </IntroductionSns>
      </Introduction>
      <Career>
        <span>커리어</span>
        <p>2024.01 유데미 UI/UX인턴과정 수료</p>
        <p>2024.01 유데미 UI/UX인턴과정 수료</p>
        <p>2024.01 유데미 UI/UX인턴과정 수료</p>
      </Career>
      <Skills>
        <span>툴/숙련도</span>
        <SkillBar />
      </Skills>
    </ProfileSidebar>
  );
}

export default ProfileSidebarComponent;
