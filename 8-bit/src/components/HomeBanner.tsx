import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Common } from "../styles/common";

import CloseIcon from "@mui/icons-material/Close";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Section = styled.section`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  /* gap: ${Common.space.lg}; */
  justify-content: space-around;
  padding: ${Common.space.xxl};
  background-color: ${Common.colors.background.blue};
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 600px;
  padding: 18px;
  position: relative;
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Common.space.s};
  & > span {
    font-size: ${Common.font.size.xxl};
    font-weight: ${Common.font.weight.semibold};
  }
`;

const SearchInput = styled(TextField)`
  & .MuiInputBase-root {
    border-radius: 18px;
    background-color: ${Common.colors.background[5]};
  }
`;

const SearchDropdown = styled.div`
  width: 564px;
  background-color: ${Common.colors.background[5]};
  position: absolute;
  top: 110px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 40px;
  z-index: 100;
`;

const SearchDropdownWrapper = styled.div`
  width: 430px;
  /* height: 389px; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 36px;

  & > :last-child {
    display: flex;
    flex-direction: column;
    gap: ${Common.space.s};
    p {
      font-size: ${Common.font.size.md};
      font-weight: ${Common.font.weight.semibold};
      color: ${Common.colors.neutral[70]};
    }
  }
`;

const RecentSearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${Common.space.s};
  & > p {
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
    color: ${Common.colors.neutral[70]};
  }

  & > ul > li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${Common.colors.neutral[50]};
    & > Button {
      color: ${Common.colors.neutral[50]};
    }
  }
`;

const KeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Common.space.s};
  width: 430px;
  & > p {
    font-size: ${Common.font.size.lg};
    font-weight: ${Common.font.weight.semibold};
    color: ${Common.colors.neutral[60]};
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.medium};
  }
`;

const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Common.space.xs};
  & > Button {
    border: 1px solid ${Common.colors.primary[50]};
    border-radius: 12px;
    background-color: ${Common.colors.primary[10]};
    color: ${Common.colors.neutral[100]};
  }
`;

const SwiperWrapper = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    color: ${Common.colors.primary[80]};
    ::after {
      font-size: 30px;
    }
  }

  .mySwiper {
    /* background-color: ${Common.colors.neutral[30]}; */
    width: 600px;
    height: 340px;
    display: flex;
    border-radius: 10px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function HomeBanner() {
  const [searchFocused, setSearchFocused] = useState(false);

  const handleSearchFocus = (focused: boolean) => {
    setSearchFocused(focused);
  };

  return (
    <Section>
      <SearchWrapper>
        <SearchBar>
          {!searchFocused && <span>레퍼런스 탐색의 모든 것, 스팩폴리오</span>}{" "}
          <SearchInput
            onFocus={() => handleSearchFocus(true)}
            onBlur={() => handleSearchFocus(false)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="원하는 레퍼런스를 탐색해 보세요."
            fullWidth
          />
        </SearchBar>
        {searchFocused && (
          <SearchDropdown>
            <SearchDropdownWrapper>
              <RecentSearchWrapper>
                <p>최근 검색어</p>
                <ul>
                  <li>
                    UXUI
                    <Button>
                      <CloseIcon fontSize="small" />
                    </Button>
                  </li>
                  <li>
                    웹디자인
                    <Button>
                      <CloseIcon fontSize="small" />
                    </Button>
                  </li>
                  <li>
                    화려한
                    <Button>
                      <CloseIcon fontSize="small" />
                    </Button>
                  </li>
                </ul>
              </RecentSearchWrapper>
              <div>
                <p>인기 키워드</p>
                <Keywords>
                  <Button>크리스마스</Button>
                  <Button>새해</Button>
                  <Button>겨울</Button>
                  <Button>레이아웃</Button>
                  <Button>웹디자인</Button>
                  <Button>렌더링 이미지</Button>
                  <Button>UX/UI</Button>
                </Keywords>
              </div>
            </SearchDropdownWrapper>
          </SearchDropdown>
        )}
        <KeywordWrapper>
          <p>인기 키워드</p>
          <Keywords>
            <Button>크리스마스</Button>
            <Button>새해</Button>
            <Button>겨울</Button>
            <Button>레이아웃</Button>
            <Button>웹디자인</Button>
            <Button>렌더링 이미지</Button>
            <Button>UX/UI</Button>
          </Keywords>
        </KeywordWrapper>
      </SearchWrapper>
      <SwiperWrapper>
        <Swiper
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://picsum.photos/600/340" alt="스와이퍼 이미지" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="https://picsum.photos/600/340" alt="스와이퍼 이미지" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="https://picsum.photos/600/340" alt="스와이퍼 이미지" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="https://picsum.photos/600/340" alt="스와이퍼 이미지" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="https://picsum.photos/600/340" alt="스와이퍼 이미지" />
          </SwiperSlide>
        </Swiper>
      </SwiperWrapper>
    </Section>
  );
}

export default HomeBanner;
