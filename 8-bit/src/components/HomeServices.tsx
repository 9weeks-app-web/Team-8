import styled from "@emotion/styled";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarIcon from "@mui/icons-material/Star"; // Material-UI에서 별 아이콘 임포트
import { useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Common } from "../styles/common";

interface TabButtonProps {
  isActive: boolean;
}

const Section = styled.section`
  width: 1440px;
  height: 600px;
  margin: 0 auto;
  background-color: ${Common.colors.background.blue};
  display: flex;
  padding: ${Common.space.s} 0;
  border: 1px solid blue;
`;

const Description = styled.div`
  padding: 95px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${Common.space.xl};
  & > span {
    font-size: 30px;
    font-weight: ${Common.font.weight.bold};
    line-height: 140%;
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: ${Common.space.md};
    /* justify-content: space-between; */
    flex: 1;
    & > p {
      font-size: ${Common.font.size.lg};
    }

    & > a {
      margin-top: calc(${Common.space.xxl} - ${Common.space.md});
      color: ${Common.colors.primary[100]};
      display: flex;
      align-items: center;
      font-size: ${Common.font.size.lg};
      font-weight: ${Common.font.weight.semibold};
      text-decoration: none;
    }
  }
`;

const Wrapper = styled.div`
  width: calc(1440px - 378px);
  padding: ${Common.space.s} 0;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
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
  font-size: ${Common.font.size.lg};
  font-weight: ${Common.font.weight.semibold};
  border-bottom: ${(props) =>
    props.isActive ? `2px solid ${Common.colors.primary[80]}` : "none"};
  color: ${(props) =>
    props.isActive
      ? `${Common.colors.neutral[100]}`
      : `${Common.colors.neutral[30]}`};
`;

const SwiperWrapper = styled.div`
  flex: 1;
  padding: 43px 0;

  & > .swiper {
    .swiper-slide {
      background-color: ${Common.colors.neutral[0]};
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 12px;
      overflow: hidden;
      & > div {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        height: 100%;
        padding: 20px 38px;
        & > p {
          font-size: ${Common.font.size.md};
          font-weight: ${Common.font.weight.bold};
        }
        & > div {
          display: flex;
          align-items: center;
        }
      }
    }
  }
`;

const CardCommentWrapper = styled.div`
  background-color: ${Common.colors.primary[5]};
`;

const CommentCard = styled.div`
  width: 208px;
  height: 98px;
  display: flex;
  flex-direction: column;
  /* gap: ${Common.space.xs}; */
  gap: 12px;
  padding: 19px 24px 13px 17px;
  position: relative;
  & > img {
    position: absolute;
    top: -19px;
  }
  & > p {
    font-size: ${Common.font.size.xs};
    font-weight: ${Common.font.weight.semibold};
  }
  & > div {
    display: flex;
    align-items: center;
    gap: ${Common.space.xs};
    & > div {
      display: flex;
      align-items: center;
      gap: 4px;
      & div {
        background-color: #d9d9d9;
        width: 18px;
        height: 18px;
        border-radius: 100%;
      }
      & p {
        font-size: ${Common.font.size.xs};
        font-weight: ${Common.font.weight.semibold};
        color: ${Common.colors.neutral[40]};
      }
    }
    & > span {
      font-size: ${Common.font.size.xxs};
      font-weight: ${Common.font.weight.regular};
      color: #d9d9d9;
    }
  }
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
            <p>
              잠깐, 내 포트폴리오
              <br /> 피드백없이 정말 괜찮을까?
            </p>
            <p>
              현직자에게 피드백 받고
              <br /> 완성도를 높여보세요.
            </p>
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
        <SwiperWrapper>
          {activeTab === "mentors" && (
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={40}
              navigation={true}
              modules={[Navigation]}
              className="mentorsSwiper"
            >
              <SwiperSlide>
                <img src="/home/card1.png" alt="멘토1 이미지" />
                <div>
                  <p>멘토링 후기 모음</p>
                  <div>
                    <StarIcon sx={{ color: "#FFDF38" }} />
                    <StarIcon sx={{ color: "#FFDF38" }} />
                    <StarIcon sx={{ color: "#FFDF38" }} />
                    <StarIcon sx={{ color: "#FFDF38" }} />
                    <StarIcon sx={{ color: "#FFDF38" }} />
                    <p>4.9 (36)</p>
                  </div>
                  <CardCommentWrapper>
                    <CommentCard>
                      <img src="/home/GetQuote.svg" alt="따옴표 svg" />
                      <p>
                        상당히 구체적으로 알려주십니다. 너무 도움이 되었어요!
                      </p>
                      <div>
                        <div>
                          <div></div>
                          <p>취준생</p>
                        </div>
                        <span>23.11.14</span>
                      </div>
                    </CommentCard>
                  </CardCommentWrapper>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/home/card2.png" alt="멘토2 이미지" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="/home/card1.png" alt="멘토1 이미지" />
              </SwiperSlide>
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
        </SwiperWrapper>
      </Wrapper>
    </Section>
  );
}

export default HomeServices;
