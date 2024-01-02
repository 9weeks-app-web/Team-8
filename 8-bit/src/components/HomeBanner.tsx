import { Common } from "../styles/common";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
// import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Section = styled.section`
  width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: ${Common.space.xxl};
  background: ${Common.colors.background.blue};
`;

const SearchWrapper = styled.div`
  width: 600px;
  padding: 18px;
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const SwiperWrapper = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    color: ${Common.colors.primary[80]};
  }

  .mySwiper {
    background: ${Common.colors.neutral[30]}};
    width: 600px;
    height: 340px;
    display: flex;
  }
`;

function HomeBanner() {
  return (
    <Section>
      <SearchWrapper>
        <SearchBar>
          <span>레퍼런스 탐색의 모든 것, 스팩폴리오</span>
          <TextField
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
          />{" "}
        </SearchBar>
        <div>
          인기 키워드
          <button>크리스마스</button>
          <button>새해</button>
          <button>겨울</button>
          <button>레이아웃</button>
          <button>웹디자인</button>
          <button>렌더링 이미지</button>
          <button>UX/UI</button>
        </div>
      </SearchWrapper>
      <SwiperWrapper>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
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
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </SwiperWrapper>
    </Section>
  );
}

export default HomeBanner;
