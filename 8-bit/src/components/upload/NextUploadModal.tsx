import styled from "@emotion/styled";
import { Checkbox } from "@mui/material";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Common } from "../../styles/common";

const Container = styled.div`
  width: 1167px;
  height: 818px;
  background-color: #FFFFFF;
  border: 0.5px solid ${Common.colors.neutral[40]};
  border-radius: 10px;
  overflow-y: auto;
  max-height: 80vh;

  .uploadButton {
    width: 80px;
    height: 48px;
    border : 1px solid ${Common.colors.primary[80]};
    background-color: ${Common.colors.primary[80]};
    color : #FFFFFF;
    border-radius: 12px;
  }
  .uploadButtonContainer {
    display: flex;
    justify-content: center;
    margin-bottom: ${Common.space.s};
  }
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .styleText {
    font-size : ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
    margin-bottom : ${Common.space.xs};
  }
`;

const UploadContainer = styled.div`
  width: 330px;
  height: 380px;
  margin-left: ${Common.space.lg};
  margin-right: ${Common.space.xxl};
  display: flex;
  flex-direction: column;

  .uploadBox {
    width: 330px;
    height: 260px;
    background-color: #F5F8FF;
    border-radius: 12px;
  }
  .coverText {
    font-size : ${Common.font.size.md};
    font-weight : ${Common.font.weight.semibold};
    margin-bottom : ${Common.space.xs}m
  }
  .sizeText {
    font-size : ${Common.font.size.md};
    font-weight: ${Common.font.weight.regular};
    color: #333333;
    text-align: center;
    margin-top: ${Common.space.xs};
  }
  button {
    width: 330px;
    height: 48px;
    background-color: #FFFFFF;
    border: 1px solid ${Common.colors.primary[80]};
    color: ${Common.colors.primary[80]};
    border-radius: 12px;
    margin-top: ${Common.space.xs};
  }
`;

const UploadArea = styled.div`
  display: flex;
  margin-top: ${Common.space.s};
`;

const UploadSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border : 1px solid ${Common.colors.neutral[10]};
`;

const Title = styled.p`
  margin-left: ${Common.space.md};
  font-size: 20px;
  font-weight: ${Common.font.weight.medium};
`;

const CloseButton = styled.button`
  color: ${Common.colors.neutral[100]};
  width: 48px;
  height: 48px;
  border: none;
  background-color: #FFFFFF;
  font-size: ${Common.font.size.xxxl};
  cursor: pointer;
  margin-right: ${Common.space.s};
`;

const TitleContainer = styled.div`
  p{
    font-size : ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
    margin-bottom : ${Common.space.xs};
  }
  input {
    width: 717px;
    height: 40px;
    border: 1px solid ${Common.colors.neutral[30]};
    border-radius: 2px;
    padding-left : ${Common.space.s};
    margin-bottom : ${Common.space.s};
  }
`;

const CategoryContainer = styled.div`
  p {
    font-size : ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
    margin-bottom : ${Common.space.xs};
  }
`;

const CategoryCheckBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-size: 13px;
  font-weight: ${Common.font.weight.medium};
`;

const StyleCheckbox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 13px;
  font-weight: ${Common.font.weight.medium};
`;

const CopyrightContainer = styled.div`
  .copyrightText {
    font-size : ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
    margin-bottom : ${Common.space.xs};
  }
  .authorCheck {
    font-size: ${Common.font.size.xs};
    font-weight: ${Common.font.weight.regular};
    color : ${Common.colors.primary[60]};
    margin-left: ${Common.font.size.xs};
    margin-bottom : ${Common.space.s};
  }
`;

const Select = styled.select`
  width: 717px;
  height: 40px;
  background-color: #FFFFFF;
  border-radius: 2px;
  border : 1px solid ${Common.colors.neutral[20]};
  margin-bottom : ${Common.space.xs};
`;

const CollaboratorContainer = styled.div`
  p {
    font-size : ${Common.font.size.md};
    font-weight: ${Common.font.weight.semibold};
    margin-bottom : ${Common.space.xs};
  }
`;

const CollaboratorCheck = styled.div`
  font-size : ${Common.font.size.sm};
  font-weight : ${Common.font.weight.medium};
  margin-left : -12px;
`;

const AddCollaborator = styled.div`
  width: 717px;
  height: 40px;
  background-color: #FFFFFF;
  border : 1px solid ${Common.colors.neutral[30]};
  display: flex;
  align-items: center;

  div {
    width: 99px;
    height: 29px;
    background-color: ${Common.colors.background[100]};
    border-radius: 2px;
    color : #FFFFFF;
    margin-left: ${Common.space.s};
  }
  p {
    font-size: ${Common.font.size.sm};
    ${Common.font.weight.regular};
    padding : 6px;
  }
`;

const ImageUpload = styled.input`
  display: none;
`;

const UploadButton = styled.label`
  width: 330px;
  height: 48px;
  background-color: #FFFFFF;
  border: 1px solid ${Common.colors.primary[80]};
  color: ${Common.colors.primary[80]};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const UploadBox = styled.div`
  width: 330px;
  height: 260px;
  background-color: ${Common.colors.primary[5]};
  border-radius: 12px;
  margin-bottom: 8px;
`;

function NextUploadModal({ onClose }: { onClose: () => void }) {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);

  const navigate = useNavigate();

  const uploadImageToFirebase = async (file: File) => {
    const storage = getStorage();
    const storageRef = ref(storage, `세미폴리오/${file.name}`);
  
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const existingFileNamesJSON = localStorage.getItem("uploadedFileNames");
      const existingFileNames = existingFileNamesJSON ? JSON.parse(existingFileNamesJSON) : [];
  
      const updatedFileNames = [...existingFileNames, file.name];
      localStorage.setItem("uploadedFileNames", JSON.stringify(updatedFileNames));
  
      return snapshot.ref;
    } catch (error) {
      throw error;
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      try {
        const ref = await uploadImageToFirebase(file);
        const downloadURL = await getDownloadURL(ref);
        setSelectedImage(downloadURL);

        localStorage.setItem("uploadedFileName", file.name);
      } catch (error) {
        console.error(error);
      }
      reader.readAsDataURL(file);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  const categories = [
    'UI/UX', '웹디자인', '그래픽디자인', '제품디자인', '광고디자인', '시각디자인', '일러스트레이션',
    '캐릭터디자인', '공간디자인', '패션디자인', '3D디자인', '영상모션그래픽', '편집디자인', '브랜딩'
  ];

  const styles = [
    '심플한', '다채로운', '유쾌한', '고급스러운', '따뜻한', '차가운', '감성적인',
    '역동적인'
  ];

  return (
    <>
      {isModalOpen && (
        <Container>
          <Header>
            <Title>상세 정보 설정</Title>
            <CloseButton
              type="submit"
              onClick={handleCloseModal}>
              X
            </CloseButton>
          </Header>
          <StyledContainer>
            <UploadArea>
              <UploadContainer>
                <p className="coverText">커버*</p>
                <UploadBox className="uploadBox">
                  {selectedImage && <img src={selectedImage as string} alt="Uploaded" style={{ width: "100%", height: "100%", borderRadius: "12px" }} />}
                </UploadBox>
                <UploadButton htmlFor="file-upload">
                  이미지 업로드
                  <ImageUpload type="file" id="file-upload" accept="image/*" onChange={handleImageChange} />
                </UploadButton>
                <p className="sizeText">커버 권장 사이즈는 330x260입니다</p>
              </UploadContainer>
              <UploadSection>
                <TitleContainer>
                  <p>제목*</p>
                  <input
                    type="text"
                    placeholder="제목을 입력해주세요" />
                </TitleContainer>
                <CategoryContainer>
                  <p>카테고리*</p>
                  <CategoryCheckBox>
                    {categories.map((category, index) => (
                      <div key={index}>
                        <Checkbox /> {category}
                      </div>
                    ))}
                  </CategoryCheckBox>
                </CategoryContainer>
                <p className="styleText">스타일*</p>
                <StyleCheckbox>
                  {styles.map((style, index) => (
                    <div key={index}>
                      <Checkbox /> {style}
                    </div>
                  ))}
                </StyleCheckbox>
                <CopyrightContainer>
                  <p className="copyrightText">저작권*</p>
                  <Select>
                    <option>저작자표시</option>
                    <option>저작자표시-비영리</option>
                    <option>저작자표시-변경금지</option>
                    <option>저작자표시-동일조건변경허락</option>
                    <option>저작자표시-비영리-동일조건변경허락</option>
                    <option>저작자표시-비영리-변경금지</option>
                  </Select>
                  <p className="authorCheck">저작자표시 : 저작자의 이름, 저작물의 제목, 출처 등 저작자에 관한 표시를 해주어야 합니다.</p>
                </CopyrightContainer>
                <CollaboratorContainer>
                  <p>공동 작업자 추가</p>
                  <AddCollaborator>
                    <div>
                      <p>최준생(제작자)</p>
                    </div>
                  </AddCollaborator>
                  <CollaboratorCheck>
                    <Checkbox /> 이 파일을 비공개로 설정
                  </CollaboratorCheck>
                </CollaboratorContainer>
              </UploadSection>
            </UploadArea>
          </StyledContainer>
          <div className="uploadButtonContainer">
            <button
              className="uploadButton"
              type="submit"
              onClick={() => {
                navigate("/uploadSuccess");
              }}>
              업로드
            </button>
          </div>
        </Container>
      )}
    </>
  );
}

export default NextUploadModal;

