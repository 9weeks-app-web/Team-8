import styled from "@emotion/styled";
import ProfileSidebarComponent from "../../components/mypage/ProfileSidebarComponent";
import MainContent from "../../components/mypage/MainContent";

const PageLayout = styled.section`
  display: flex;
  position: relative;
`;

// const MainContent = styled.section``;

const MyPage = () => {
  return (
    <PageLayout>
      <ProfileSidebarComponent />
      {/* <MainContent></MainContent> */}
      <MainContent />
    </PageLayout>
  );
};

export default MyPage;
