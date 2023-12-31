import styled from "@emotion/styled";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarIcon from "@mui/icons-material/Star"; // Material-UI에서 별 아이콘 임포트
import Button from "@mui/material/Button";
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
  display: flex;
  align-items: center;
  & > .mentorsSwiper {
    .swiper-slide {
      background-color: ${Common.colors.neutral[0]};
      width: 60%;
      display: flex;
      align-items: center;
      border-radius: 12px;
      overflow: hidden;
      & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
        height: 100%;
        margin: 0 auto;
        padding: 20px 38px;
        & > p {
          font-size: ${Common.font.size.md};
          font-weight: ${Common.font.weight.bold};
        }
        & > div {
          display: flex;
        }
        & > Button {
          background-color: ${Common.colors.primary[80]};
          color: ${Common.colors.neutral[0]};
          font-size: ${Common.font.size.lg};
          font-family: ${Common.font.weight.semibold};
          border-radius: 12px;
        }
        & > Button {
          background-color: ${Common.colors.primary[80]};
          color: ${Common.colors.neutral[0]};
          font-size: ${Common.font.size.lg};
          font-family: ${Common.font.weight.semibold};
          border-radius: 12px;
        }
      }
    }
  }

  & > .projectSwiper {
    .swiper-slide {
      background-color: ${Common.colors.neutral[0]};
      width: 434px;
      height: 291px;
      border-radius: 12px;
    }
  }

  & > .jobsSwiper {
    .swiper-slide {
      background-color: ${Common.colors.neutral[0]};
      width: 321px;
      height: 322px;
      border-radius: 12px;
      padding: 36px 24.51px 35.71px 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & > .topWrapper {
        display: flex;
        flex-direction: column;
        gap: 28px;
        & > .top {
          display: flex;
          justify-content: space-between;
          position: relative;
          & > div {
            width: 88.29px;
            height: 88.29px;
            border-radius: 100%;
            border: 1.5px solid ${Common.colors.primary[80]};
            display: flex;
            justify-content: center;
            align-items: center;
          }
          & > button {
            width: 40px;
            height: 40px;
            position: absolute;
            top: 0;
            right: 0;
            border: none;
            background: none;
          }
        }
        & > .bottom {
          & > span {
            font-weight: ${Common.font.weight.semibold};
            font-size: 13px;
            color: ${Common.colors.neutral[40]};
          }
          & > p {
            font-size: ${Common.font.size.md};
            font-weight: ${Common.font.weight.medium};
          }
        }
      }
      & .bottomWrapper {
        display: flex;
        justify-content: space-between;
        & > span {
          color: ${Common.colors.neutral[40]};
          font-size: ${Common.font.size.sm};
          font-weight: ${Common.font.weight.medium};
        }
        & > p {
          background-color: ${Common.colors.primary[20]};
          color: ${Common.colors.neutral[70]};
          font-size: ${Common.font.size.sm};
          font-weight: ${Common.font.weight.medium};
          padding: 0 7px;
          border-radius: 5.4px;
        }
      }
    }
  }
`;

const CardCommentWrapper = styled.div`
  background-color: ${Common.colors.primary[5]};
  display: flex;
  flex-direction: column;
  gap: 19px;
  margin-top: 12px;
`;

const CommentCard = styled.div`
  background-color: ${Common.colors.primary[5]};
  border-radius: 9px;
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
    left: -9px;
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
        /* background-color: #d9d9d9; */
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

const ProjectCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 29px 34px;
  & > div:first-child {
    display: flex;
    flex-direction: column;
    & > span:nth-child(1) {
      width: 100%;
      font-size: ${Common.font.size.xxxl};
      font-weight: ${Common.font.weight.semibold};
    }
    & > span:nth-child(2) {
      margin-top: 12px;
      font-size: ${Common.font.size.sm};
      font-weight: ${Common.font.weight.medium};
      width: 100%;
    }
    & > div:nth-child(3) {
      margin-top: 16px;
      display: flex;
      gap: ${Common.space.s};
    }
  }

  & > div:last-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      display: flex;
      gap: ${Common.space.xs};
      & > div {
        background-color: ${Common.colors.neutral[5]};
        padding: 4px 10px;
      }
    }
    & > span {
      color: ${Common.colors.primary[80]};
      font-size: ${Common.font.size.md};
      font-weight: ${Common.font.weight.medium};
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
                    <CommentCard>
                      <img src="/home/GetQuote.svg" alt="따옴표 svg" />
                      <p>
                        막막했던 부분 섬세하게 잘 피드백해주셔서 많이 배워가요!
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
                  <Button>피드백 받기</Button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src="/home/card2.png" alt="멘토2 이미지" />
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
                    <CommentCard>
                      <img src="/home/GetQuote.svg" alt="따옴표 svg" />
                      <p>
                        막막했던 부분 섬세하게 잘 피드백해주셔서 많이 배워가요!
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
                  <Button>피드백 받기</Button>
                </div>
              </SwiperSlide>
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
                    <CommentCard>
                      <img src="/home/GetQuote.svg" alt="따옴표 svg" />
                      <p>
                        막막했던 부분 섬세하게 잘 피드백해주셔서 많이 배워가요!
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
                  <Button>피드백 받기</Button>
                </div>
              </SwiperSlide>
            </Swiper>
          )}
          {activeTab === "projects" && (
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={40}
              navigation={true}
              modules={[Navigation]}
              className="projectSwiper"
            >
              <SwiperSlide>
                <ProjectCard>
                  <div>
                    <span>[앱/웹 개발] 수익성 프로젝트팀 모집</span>
                    <span>예상 프로젝트 기간 · 3개월</span>
                    <div>
                      <img
                        src="/home/sideprojecticon.svg"
                        alt="사이드 프로젝트 인원 _ 차있음"
                      />
                      <img
                        src="/home/sideprojecticon.svg"
                        alt="사이드 프로젝트 인원 _ 차있음"
                      />
                      <img
                        src="/home/sideprojecticon.svg"
                        alt="사이드 프로젝트 인원 _ 차있음"
                      />
                      <img
                        src="/home/sideprojecticon2.svg"
                        alt="사이드 프로젝트 인원 _ 비어있음"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>pm</div>
                      <div>디자이너</div>
                      <div>프론트</div>
                    </div>
                    <span>한 자리 남았어요!</span>
                  </div>
                </ProjectCard>
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard>
                  <div>
                    <span>[앱/웹 개발] 수익성 프로젝트팀 모집</span>
                    <span>예상 프로젝트 기간 · 3개월</span>
                    <div>
                      <img
                        src="/home/sideprojecticon.svg"
                        alt="사이드 프로젝트 인원 _ 차있음"
                      />
                      <img
                        src="/home/sideprojecticon.svg"
                        alt="사이드 프로젝트 인원 _ 차있음"
                      />
                      <img
                        src="/home/sideprojecticon2.svg"
                        alt="사이드 프로젝트 인원 _ 비어있음"
                      />
                      <img
                        src="/home/sideprojecticon2.svg"
                        alt="사이드 프로젝트 인원 _ 비어있음"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>pm</div>
                      <div>디자이너</div>
                      <div>프론트</div>
                    </div>
                  </div>
                </ProjectCard>
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard>
                  <div>
                    <span>[앱/웹 개발] 수익성 프로젝트팀 모집</span>
                    <span>예상 프로젝트 기간 · 3개월</span>
                    <div>
                      <img
                        src="/home/sideprojecticon.svg"
                        alt="사이드 프로젝트 인원 _ 차있음"
                      />
                      <img
                        src="/home/sideprojecticon.svg"
                        alt="사이드 프로젝트 인원 _ 차있음"
                      />
                      <img
                        src="/home/sideprojecticon.svg"
                        alt="사이드 프로젝트 인원 _ 차있음"
                      />
                      <img
                        src="/home/Group1171277623.svg"
                        alt="사이드 프로젝트 인원 _ 2명 남음"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <div>pm</div>
                      <div>디자이너</div>
                      <div>프론트</div>
                    </div>
                  </div>
                </ProjectCard>
              </SwiperSlide>
            </Swiper>
          )}
          {activeTab === "jobs" && (
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={20}
              navigation={true}
              modules={[Navigation]}
              className="jobsSwiper"
            >
              <SwiperSlide>
                <div className="topWrapper">
                  <div className="top">
                    <div>
                      <img src="/home/gsRetail.png" alt="gs리테일 로고" />
                    </div>
                    <button>
                      <img src="/home/bookmark.svg" alt="북마크 버튼" />
                    </button>
                  </div>
                  <div className="bottom">
                    <span>GS리테일</span>
                    <p>[GS리테일] 홈쇼핑DX부문 모바일/웹디자인 부담당 모집</p>
                  </div>
                </div>
                <div className="bottomWrapper">
                  <span>서울 영등포구</span>
                  <p>D - 3</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="topWrapper">
                  <div className="top">
                    <div>
                      <img src="/home/gsRetail.png" alt="gs리테일 로고" />
                    </div>
                    <button>
                      <img src="/home/bookmark.svg" alt="북마크 버튼" />
                    </button>
                  </div>
                  <div className="bottom">
                    <span>GS리테일</span>
                    <p>[GS리테일] 홈쇼핑DX부문 모바일/웹디자인 부담당 모집</p>
                  </div>
                </div>
                <div className="bottomWrapper">
                  <span>서울 영등포구</span>
                  <p>D - 3</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="topWrapper">
                  <div className="top">
                    <div>
                      <img src="/home/gsRetail.png" alt="gs리테일 로고" />
                    </div>
                    <button>
                      <img src="/home/bookmark.svg" alt="북마크 버튼" />
                    </button>
                  </div>
                  <div className="bottom">
                    <span>GS리테일</span>
                    <p>[GS리테일] 홈쇼핑DX부문 모바일/웹디자인 부담당 모집</p>
                  </div>
                </div>
                <div className="bottomWrapper">
                  <span>서울 영등포구</span>
                  <p>D - 3</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="topWrapper">
                  <div className="top">
                    <div>
                      <img src="/home/gsRetail.png" alt="gs리테일 로고" />
                    </div>
                    <button>
                      <img src="/home/bookmark.svg" alt="북마크 버튼" />
                    </button>
                  </div>
                  <div className="bottom">
                    <span>GS리테일</span>
                    <p>[GS리테일] 홈쇼핑DX부문 모바일/웹디자인 부담당 모집</p>
                  </div>
                </div>
                <div className="bottomWrapper">
                  <span>서울 영등포구</span>
                  <p>D - 3</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="topWrapper">
                  <div className="top">
                    <div>
                      <img src="/home/gsRetail.png" alt="gs리테일 로고" />
                    </div>
                    <button>
                      <img src="/home/bookmark.svg" alt="북마크 버튼" />
                    </button>
                  </div>
                  <div className="bottom">
                    <span>GS리테일</span>
                    <p>[GS리테일] 홈쇼핑DX부문 모바일/웹디자인 부담당 모집</p>
                  </div>
                </div>
                <div className="bottomWrapper">
                  <span>서울 영등포구</span>
                  <p>D - 3</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="topWrapper">
                  <div className="top">
                    <div>
                      <img src="/home/gsRetail.png" alt="gs리테일 로고" />
                    </div>
                    <button>
                      <img src="/home/bookmark.svg" alt="북마크 버튼" />
                    </button>
                  </div>
                  <div className="bottom">
                    <span>GS리테일</span>
                    <p>[GS리테일] 홈쇼핑DX부문 모바일/웹디자인 부담당 모집</p>
                  </div>
                </div>
                <div className="bottomWrapper">
                  <span>서울 영등포구</span>
                  <p>D - 3</p>
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </SwiperWrapper>
      </Wrapper>
    </Section>
  );
}
export default HomeServices;
