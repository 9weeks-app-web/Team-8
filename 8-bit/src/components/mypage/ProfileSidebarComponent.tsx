import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Common } from "../../styles/common";
import SkillBar from "../mypage/SkillBar";
import Divider from "@mui/material/Divider";

const ProfileSidebar = styled.aside`
  width: 330px;
  background: ${Common.colors.neutral[0]};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  position: absolute;
  top: 200px;
  left: 24px;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & > .MuiAvatar-root {
    margin-bottom: ${Common.space.md};
  }
`;

const UserName = styled.h2`
  font-size: ${Common.font.size.xxxl};
  font-weight: ${Common.font.weight.semibold};
`;

const UserEmail = styled.span`
  font-size: ${Common.font.size.md};
  font-weight: ${Common.font.weight.medium};
  color: ${Common.colors.neutral[80]};
`;

const UserFollow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: ${Common.space.xs};
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > span {
      font-size: ${Common.font.size.xl};
      font-weight: ${Common.font.weight.medium};
    }
    & > p {
      font-size: ${Common.font.size.md};
      font-weight: ${Common.font.weight.regular};
    }
  }
`;

const Following = styled.div``;

const Follower = styled.div``;

const ProfileButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Common.space.xs};
  margin-top: ${Common.space.md};
`;

const EditProfileButton = styled(Button)`
  width: 100%;
  background-color: ${Common.colors.primary[80]};
  border-radius: 12px;
  font-size: ${Common.font.size.md};
  font-weight: ${Common.font.weight.medium};
`;
const RequestJobSettingButton = styled(Button)`
  width: 100%;
  border: 1px solid ${Common.colors.primary[80]};
  border-radius: 12px;
  font-size: ${Common.font.size.md};
  font-weight: ${Common.font.weight.medium};
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > span:first-child {
    margin-bottom: ${Common.space.s};
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
  }
  & > p {
    color: ${Common.colors.neutral[80]};
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.medium};
    height: 168px;
  }
`;

const IntroductionBadge = styled.span`
  background-color: ${Common.colors.primary[5]};
  color: ${Common.colors.primary[100]};
  width: 127px;
  height: 38px;
  padding: 7px 12px;
  font-size: ${Common.font.size.md};
  font-weight: ${Common.font.weight.semibold};
  border-radius: 12px;
  margin-bottom: ${Common.space.xs};
`;

const Career = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > span {
    margin-bottom: ${Common.space.s};
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
  }
`;

const CareerTimeline = styled.div`
  border-left: 2px solid ${Common.colors.primary[40]};
  padding-left: 20px;
`;

const Year = styled.span`
  font-weight: ${Common.font.weight.semibold};
  font-size: ${Common.font.size.md};
  color: ${Common.colors.primary[80]};
`;

const CareerItem = styled.div`
  position: relative;
  margin-bottom: ${Common.space.s};

  &:before {
    content: "";
    position: absolute;
    left: -26px;
    top: 3px;
    width: 10px;
    height: 10px;
    background: white; /* 배경색 */
    border: 2px solid ${Common.colors.primary[40]}; /* 원의 색상 */
    border-radius: 50%;
    z-index: 1;
  }
  & > div {
    display: flex;
    gap: ${Common.space.xs};
    font-size: ${Common.font.size.sm};
    font-weight: ${Common.font.weight.regular};
    color: ${Common.colors.neutral[80]};
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > span {
    margin-bottom: ${Common.space.s};
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
  }
`;

const Sns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > span {
    margin-bottom: ${Common.space.s};
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
  }

  & > div {
    display: flex;
    align-items: center;
    gap: ${Common.space.s};
    & > div {
      width: 36px;
      height: 36px;
      padding: 6px;
    }
  }
`;

function ProfileSidebarComponent() {
  const userString = localStorage.getItem("userInfo");
  const user = userString ? JSON.parse(userString) : null;
  const name = user ? user.username : undefined;
  const email = user ? user.email : undefined;

  return (
    <ProfileSidebar>
      <ProfileInfo>
        <User>
          <Avatar
            sx={{ width: 80, height: 80 }}
            src="path_to_avatar_image.jpg"
            alt={name}
          />
          <UserName>{name}</UserName>
          <UserEmail>{email}</UserEmail>
          <UserFollow>
            <Following>
              <span>10</span>
              <p>팔로잉</p>
            </Following>
            <Divider orientation="vertical" flexItem />
            <Follower>
              <span>50</span>
              <p>팔로워</p>
            </Follower>
          </UserFollow>
        </User>
        <ProfileButtons>
          <EditProfileButton variant="contained">프로필 편집</EditProfileButton>
          <RequestJobSettingButton variant="outlined">
            작업물 의뢰/구직 설정
          </RequestJobSettingButton>
        </ProfileButtons>
      </ProfileInfo>

      <Introduction>
        <span>소개</span>
        <IntroductionBadge>UI/UX디자이너</IntroductionBadge>
        <p>안녕하세요 UI/UX디자이너 최준생입니다. 잘 부탁드립니다.😃</p>
      </Introduction>
      <Career>
        <span>커리어</span>
        <CareerTimeline>
          <CareerItem>
            <Year>2024</Year>
            <div>
              <span>1월</span>
              <p> 유데미 UI/UX 인턴과정 수료</p>
            </div>
          </CareerItem>
          <CareerItem>
            <Year>2023</Year>
            <div>
              <span>10월</span>
              <p> 스나이퍼프로젝트 디자인 매니저 수료</p>
            </div>
            <div>
              <span>9월</span>
              <p> 브랜드디자이너 인턴</p>
            </div>
          </CareerItem>
          {/* 추가적인 경력 사항 */}
        </CareerTimeline>
      </Career>
      <Skills>
        <span>툴/숙련도</span>
        <SkillBar />
      </Skills>
      <Sns>
        <span>툴/숙련도</span>
        <div>
          <div>
            <img src="myPage/instagramSns.svg" alt="인스타그램" />
          </div>
          <span>design._.</span>
        </div>
        <div>
          <div>
            <img src="myPage/naverSns.svg" alt="네이버" />
          </div>
          <span>archive03@naver.com</span>
        </div>
        <div>
          <div>
            <img src="myPage/linkSns.svg" alt="링크" />
          </div>
          <span>//http:Life_03.kr</span>
        </div>
      </Sns>
    </ProfileSidebar>
  );
}

export default ProfileSidebarComponent;
