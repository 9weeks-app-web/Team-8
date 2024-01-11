import styled from "@emotion/styled";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../firebase";
import { Common } from "../../styles/common";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 330px;
  height: 260px;
  border : none;
  background-color: ${Common.colors.neutral[20]};
  border-radius: 12px;
  margin-top: 150px;
  margin-bottom: ${Common.space.s};
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

const Button = styled.button`

  &.moveMain {
    width: 330px;
    height: 48px;
    background-color: ${Common.colors.primary[80]};
    border : none;
    border-radius: 12px;
    color: #FFFFFF;
    font-size: ${Common.font.size.lg};
    font-weight: ${Common.font.weight.semibold};
    margin-bottom: 26.5px;
  }
  &.pdfSave {
    width: 330px;
    height: 48px;
    background-color: #FFFFFF;
    border : 1px solid ${Common.colors.primary[80]};;
    border-radius: 12px;
    color: ${Common.colors.primary[80]};;
    font-size: ${Common.font.size.lg};
    font-weight: ${Common.font.weight.semibold};
    margin-bottom: 212px;
  }
`;

const P = styled.p`
  font-size: ${Common.font.size.xxxl};
  font-weight: ${Common.font.weight.semibold};
  margin-bottom: ${Common.space.xl};
`;

function UploadSuccess() {
  const [imageURL, setImageURL] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getImage = async () => {
      const storage = getStorage(app);
      const uploadedFileName = localStorage.getItem("uploadedFileName");
      const filePath = `세미폴리오/${uploadedFileName}`;

      const storageRef = ref(storage, filePath);

      try {
        const url = await getDownloadURL(storageRef);
        setImageURL(url);
      } catch (error) {
        console.error("다운로드 URL을 가져오는 중에 오류가 발생했습니다:", error);
      }
    };
    getImage();
  }, []);

  console.log(imageURL);

  return (
    <Container>
      <ImageContainer>
        {imageURL && <Image src={imageURL} alt="Uploaded Image" />}
      </ImageContainer>
      <P>업로드를 완료했습니다</P>

      <Button
        type="submit"
        className="moveMain"
        onClick={() => {
          navigate("/");
        }}
      >메인으로 돌아가기
      </Button>
      <Button
        type="submit"
        className="pdfSave"
        onClick={() => {
          alert("준비중입니다.");
        }}
      >PDF로 저장
      </Button>
    </Container>
  );
}

export default UploadSuccess;


