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
import Button from "@mui/material/Button";

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

const KeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Common.space.s};
  width: 430px;
  & > p {
    font-size: ${Common.font.size.lg};
    font-weight: ${Common.font.weight.semibold};
    color: ${Common.colors.neutral[60]};
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
    background-color: ${Common.colors.neutral[30]};
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
  return (
    <Section>
      <SearchWrapper>
        <SearchBar>
          <span>레퍼런스 탐색의 모든 것, 스팩폴리오</span>
          <SearchInput
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
          spaceBetween={30}
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
