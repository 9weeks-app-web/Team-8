import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Common } from "../styles/common";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface TabButtonProps {
  isActive: boolean;
}

const Section = styled.section`
  width: 1440px;
  margin: 0 auto;
  background-color: ${Common.colors.background.blue};
  display: flex;
  padding: ${Common.space.s} 0;
  border: 1px solid blue;
`;

const Description = styled.div`
  width: 20%;
  & > span {
    font-size: 30px;
    font-weight: ${Common.font.weight.bold};
    line-height: 140%;
  }
`;

const Wrapper = styled.div`
  width: 80%;
`;

const TabButtonWrapper = styled.div`
  display: inline-block;
`;

const TabButton = styled.button<TabButtonProps>`
  background: none;
  border: none;
  padding: ${Common.space.s} ${Common.space.xs};
  padding-top: 0;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.isActive ? `2px solid ${Common.colors.primary[80]}` : "none"};
  color: ${(props) =>
    props.isActive
      ? `${Common.colors.neutral[100]}`
      : `${Common.colors.neutral[30]}`};
`;

function HomeServices() {
  const [activeTab, setActiveTab] = useState("mentors"); // 초기 탭 설정

  return (
    <Section>
      <Description>
        <span>
          스팩폴리오가
          <br />
          제공하는
          <br />또 다른 서비스
        </span>
        {activeTab === "mentors" && (
          <div>
            <p>잠깐, 내 포트폴리오 피드백없이 정말 괜찮을까?</p>
            <p>현직자에게 피드백 받고완성도를 높여보세요.</p>
            <Link to="/">
              멘토 전체 보기
              <ChevronRightIcon fontSize="small" />
            </Link>
          </div>
        )}
        {activeTab === "projects" && (
          <div>
            <p>아직은 부족한팀프로젝트 경험,</p>
            <p>나에게 맞는 팀원을찾아보세요.</p>
            <Link to="/">
              사이드 프로젝트 전체 보기
              <ChevronRightIcon fontSize="small" />
            </Link>
          </div>
        )}
        {activeTab === "jobs" && (
          <div>
            <p>잠깐, 내 포트폴리오 피드백없이 정말 괜찮을까?</p>
            <p>현직자에게 피드백 받고완성도를 높여보세요.</p>
            <Link to="/">
              채용 전체 보기
              <ChevronRightIcon fontSize="small" />
            </Link>
          </div>
        )}
      </Description>
      <Wrapper>
        <TabButtonWrapper>
          <TabButton
            onClick={() => setActiveTab("mentors")}
            isActive={activeTab === "mentors"}
          >
            인기멘토
          </TabButton>
          <TabButton
            onClick={() => setActiveTab("projects")}
            isActive={activeTab === "projects"}
          >
            사이드 프로젝트
          </TabButton>
          <TabButton
            onClick={() => setActiveTab("jobs")}
            isActive={activeTab === "jobs"}
          >
            채용
          </TabButton>
        </TabButtonWrapper>
        <div>
          {activeTab === "mentors" && (
            <Swiper
              spaceBetween={40}
              navigation={true}
              modules={[Navigation]}
              className="mentorsSwiper"
            >
              {" "}
              <SwiperSlide>멘토1</SwiperSlide>
              <SwiperSlide>멘토2</SwiperSlide>
              <SwiperSlide>멘토3</SwiperSlide>
            </Swiper>
          )}
          {activeTab === "projects" && (
            <Swiper
              spaceBetween={40}
              navigation={true}
              modules={[Navigation]}
              className="projectsSwiper"
            >
              <SwiperSlide>프로젝트1</SwiperSlide>
              <SwiperSlide>프로젝트2</SwiperSlide>
              <SwiperSlide>프로젝트3</SwiperSlide>
            </Swiper>
          )}
          {activeTab === "jobs" && (
            <Swiper
              spaceBetween={40}
              navigation={true}
              modules={[Navigation]}
              className="jobsSwiper"
            >
              {" "}
              <SwiperSlide>채용1</SwiperSlide>
              <SwiperSlide>채용2</SwiperSlide>
              <SwiperSlide>채용3</SwiperSlide>
            </Swiper>
          )}
        </div>
      </Wrapper>
    </Section>
  );
}

export default HomeServices;
