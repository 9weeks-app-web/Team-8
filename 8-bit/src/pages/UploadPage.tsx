import styled from "@emotion/styled";
import { Common } from "../styles/common";
import { Slider } from "@mui/material";
import { useState } from "react";
import ColorModal from "../components/ColorModal";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: ${Common.colors.neutral[5]};
`;

const Input = styled.input`
  width: 1014px;
  height: 40px;
  border-radius: 2px;
  background-color: #FFFFFF;
  border: 1px solid ${Common.colors.neutral[30]};
  margin-top: ${Common.space.lg};
  margin-left: ${Common.space.md};
`;

const InputContainer = styled.div`
  flex-direction: column;
`;

const AddContent = styled.div`
  margin-left: ${Common.space.md};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: ${Common.space.lg};
  margin-bottom: ${Common.space.s};
`;

const AddContentText = styled.div`
  width: 330px;
  height: 40px;
  grid-column: span 2;
  border: 0.5px solid ${Common.colors.neutral[30]};
  display: flex;
  align-items: center;

  p {
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.medium};
    margin-left: ${Common.space.s};;
  }
`;

const GridItem = styled.div`
  width: 165px;
  height: 63px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  border: 0.5px solid ${Common.colors.neutral[30]};

  p {
    font-size : ${Common.font.size.xs};
    font-weight: ${Common.font.weight.regular};
    color: ${Common.colors.neutral[50]};
    margin-top: 4px;
  }
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 1014px;
  height: 844px;
  border-radius: 2px;
  background-color: #FFFFFF;
  margin-left: ${Common.space.md};
  margin-top: ${Common.space.s};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${Common.space.s};
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${Common.space.md};

  img {
    margin-bottom: ${Common.space.s};
  }
  p {
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.regular};
  }
`;

const AddContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyleContainer = styled.div`
  width: 330px;
  height: 208px;
  margin-left: ${Common.space.md};
`;

const ContentText = styled.p`
  font-size: ${Common.font.size.xxl};
  font-weight: ${Common.font.weight.semibold};
  margin-top: 276px;
  margin-bottom: ${Common.space.s};
`;

const StyleText = styled.div`
  height: 40px;
  border: 0.5px solid ${Common.colors.neutral[30]};
  display: flex;
  align-items: center;

  p {
    font-size: ${Common.font.size.md};
    font-weight: ${Common.font.weight.medium};
    margin-left: ${Common.space.s};
  }
`;

const BackgroundSetting = styled.div`
  background-color: #FFFFFF;
  height : 84px;
  border: 0.5px solid ${Common.colors.neutral[30]};
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: ${Common.font.size.xs};
    font-weight: ${Common.font.weight.medium};
    color : #808080;
    margin-left: ${Common.space.s};
  }
`;

const SpaceSetting = styled.div`
  background-color: #FFFFFF;
  height : 84px;
  border: 0.5px solid ${Common.colors.neutral[30]};
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: ${Common.font.size.xs};
    font-weight: ${Common.font.weight.medium};
    color : #808080;
    margin-left: ${Common.space.s};
  }
`;

const SliderContainer = styled.div`
  width: 300px;
  display: flex;
  margin-left: ${Common.space.s};
`;

const SliderValue = styled.div`
  width : 34px;
  height: 26px;
  display: flex;
  align-items: center;
  margin-left: ${Common.space.xs};;
  border : 1px solid #E6E6E6;
  font-size: ${Common.font.size.xxs};
  font-weight: ${Common.font.weight.regular};
`;

const Button = styled.button`
  width: 330px;
  height: 48px;
  margin-left: ${Common.space.md};
  font-size: ${Common.font.size.lg};
  font-weight: ${Common.font.weight.semibold};

  &.nextButton {
    background-color: ${Common.colors.primary[80]};
    color : #FFFFFF;
    border: none;
    border-radius: 12px;
    margin-top: ${Common.space.s};
  }
  &.pdfButton {
    background-color: none;
    color : ${Common.colors.primary[80]};
    border : 1px solid ${Common.colors.primary[80]};
    border-radius: 12px;
    margin-top: ${Common.space.s};
  }
  &.colorChoice {
    background-color: #FFFFFF;
    width: 298px;
    height: 26px;
    margin-left: ${Common.space.s};
    margin-top: ${Common.space.xs};
    border : 1px solid ${Common.colors.neutral[10]};
    font-size: ${Common.font.size.xxs};
    font-weight: ${Common.font.weight.regular};
    text-align: left;
  }
`;


function UploadPage() {

  const [spacing, setSpacing] = useState<number>(10);

  const [isshowColorModal, isSetShowColorModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  const handleColorButtonClick = () => {
    isSetShowColorModal(!isshowColorModal);
  };

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
    isSetShowColorModal(false);
  };

  return (
    <Container>
      <InputContainer>
        <Input 
          type="text"
          placeholder="제목을 입력해주세요."
        />
        <UploadContainer>
          <ContentText>콘텐츠를 추가하여 업로드해보세요</ContentText>
          <ButtonContainer>
            <ImageContainer>
              <a href="#"><img src="/upload/imageUpload.png" alt="이미지업로드" /></a>
              <p>이미지</p>
            </ImageContainer>
            <ImageContainer>
              <a href="#"><img src="/upload/textUpload.png" alt="텍스트업로드" /></a>
              <p>텍스트</p>
            </ImageContainer>
            <ImageContainer>
              <a href="#"><img src="/upload/videoUpload.png" alt="비디오업로드" /></a>
              <p>비디오</p>
            </ImageContainer>
            <ImageContainer>
              <a href="#"><img src="/upload/embedUpload.png" alt="임베드업로드" /></a>
              <p>임베드</p>
            </ImageContainer>
          </ButtonContainer>
        </UploadContainer>
      </InputContainer>

      <AddContentContainer>
        <AddContent>
          <AddContentText><p>콘텐츠 추가</p></AddContentText>
          <GridItem>
            <a href="#"><img src="/upload/photo.png" alt="이미지"></img></a>
            <p>이미지</p>
          </GridItem>
          <GridItem>
            <a href="#"><img src="/upload/text.png" alt="텍스트"></img></a>
            <p>텍스트</p>
          </GridItem>
          <GridItem>
            <a href="#"><img src="/upload/video.png" alt="비디오"></img></a>
            <p>비디오</p>
          </GridItem>
          <GridItem>
            <a href="#"><img src="/upload/embed.png" alt="임베드"></img></a>
            <p>임베드</p>
          </GridItem>
        </AddContent>

        <StyleContainer>
          <StyleText><p>스타일</p></StyleText>
          <BackgroundSetting>
            <p>배경색상설정</p>
            <Button 
              className="colorChoice" 
              onClick={handleColorButtonClick}>
              {selectedColor}
            </Button>
          </BackgroundSetting>

          <ColorModal
            onClose={() => isSetShowColorModal(false)}
            onSelectColor={handleColorSelection}
            show={isshowColorModal}
          />
          <SpaceSetting style={{ zIndex: 1 }}>
            <p>콘텐츠간격설정</p>
            <SliderContainer>
              <Slider
                value={spacing}
                onChange={(e, newValue) => {
                  if (typeof newValue === "number") {
                    setSpacing(newValue);
                  }
                }}
                aria-label="Space slider"
                min={0}
                max={100}
              />
              <SliderValue>{`${spacing}px`}</SliderValue>
            </SliderContainer>
          </SpaceSetting>
        </StyleContainer>

        <Button 
          type="submit"
          className="nextButton">
          다음
        </Button>
        <Button 
          type="submit"
          className="pdfButton">
          PDF로 저장
        </Button>
      </AddContentContainer>


    </Container>
  );
}

export default UploadPage;


