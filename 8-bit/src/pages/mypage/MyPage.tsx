import styled from "@emotion/styled";
import ProfileSidebarComponent from "../../components/mypage/ProfileSidebarComponent";
import MainContent from "../../components/mypage/MainContent";

const PageLayout = styled.section`
  display: flex;
  position: relative;
  width: 1440px;
  height: 1487px;
  margin: 0 auto;
`;

const MyPage = () => {
  return (
    <PageLayout>
      <ProfileSidebarComponent />
      <MainContent />
    </PageLayout>
  );
};

export default MyPage;
