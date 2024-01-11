import styled from "@emotion/styled";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import app from "../../firebase";
import { Common } from "../../styles/common";

const Contents = styled.article`
  display: flex;
  flex-direction : column;
`;

const ControlBar = styled.div`
  display: flex;
  align-items: center; // 버튼과 select를 수직 중앙 정렬합니다.
  gap: 1rem; // 요소 사이의 간격을 설정합니다.
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  border : none;
  border-radius: 12px;
  margin-top : ${Common.space.s};
  gap : ${Common.space.md};
`;

const ProfileImg = styled.img`
  width: 24px;
  height: 24px;
`;

const Image = styled.img`
  width: 330px;
  height: 260px;
  height: auto;
  border-radius: 12px;
  margin-bottom : 9px;
`;

const ImageInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items : center;

  p {
    font-size: ${Common.font.size.sm};
    font-weight: ${Common.font.weight.medium};
    margin-left: ${Common.space.xs};
  }
`;

const ViewInfo = styled.div`
  display: flex;
  align-items: center;
  gap : 4px;

  p {
    font-size : ${Common.font.size.sm};
    font-weight: ${Common.font.weight.medium};
    color: ${Common.colors.neutral[60]};
  }
`;

const CustomThumbUpAltIcon = styled(ThumbUpAltIcon)`
  width: 24px;
  height: 24px;
  color: ${Common.colors.neutral[60]};
`;

const CustomVisibilityIcon = styled(VisibilityIcon)`
  width: 24px;
  height: 24px;
  color: ${Common.colors.neutral[60]};
`;


const MySemifolio = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [upToDate, setUpToDate] = useState<string>("");
  const [visibility, setVisibility] = useState<string>("");

  const [imageURLs, setImageURLs] = useState<string[]>([]);

  useEffect(() => {
    const getImageURLs = async () => {
      const storage = getStorage(app);
      const existingFileNamesJSON = localStorage.getItem("uploadedFileNames");

      if (existingFileNamesJSON) {
        const existingFileNames = JSON.parse(existingFileNamesJSON);

        const urls = await Promise.all(existingFileNames.map(async (fileName: string) => {
          const filePath = `세미폴리오/${fileName}`;
          const storageRef = ref(storage, filePath);
          try {
            const url = await getDownloadURL(storageRef);
            return url;
          } catch (error) {
            console.error(error);
            return null;
          }
        }));
        setImageURLs(urls.filter((url) => url !== null) as string[]);
      }
    };
    getImageURLs();
  }, []);

  const handleSelectAllChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectAll(event.target.checked);
  };

  const handleUpToDateChange = (event: SelectChangeEvent) => {
    setUpToDate(event.target.value as string);
  };
  const handleVisibilityChange = (event: SelectChangeEvent) => {
    setVisibility(event.target.value as string);
  };

  return (
    <Contents>
      <ControlBar>
        <Checkbox
          checked={selectAll}
          onChange={handleSelectAllChange}
          color="primary"
        />
        <Button variant="outlined">공유하기</Button>
        <Button variant="outlined">삭제</Button>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              최신순
            </InputLabel>
            <Select
              labelId="up-to-date-select-label"
              id="up-to-date-select"
              value={upToDate}
              label="최신순"
              onChange={handleUpToDateChange}
            >
              <MenuItem value="recent">최신순</MenuItem>
              <MenuItem value="old">오래된 순</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              공개 여부
            </InputLabel>
            <Select
              labelId="visibility-select-label"
              id="visibility-select"
              value={visibility}
              label="공개 여부"
              onChange={handleVisibilityChange}
            >
              <MenuItem value="public">공개</MenuItem>
              <MenuItem value="private">비공개</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </ControlBar>
      {imageURLs.length === 0 ? (
        <p>업로드된 세미폴리오가 없습니다.</p>
      ) : (
        <ImageContainer>
          {imageURLs.map((url, index) => (
            <div key={index}>
              <Image src={url} alt={`업로드 이미지 ${index + 1}`} />
              <ImageInfo>
                <ProfileInfo>
                  <ProfileImg src="/user_profile.png" />
                  <p>최준생</p>
                </ProfileInfo>
                <ViewInfo>
                  <CustomThumbUpAltIcon />
                  <p>0</p>
                  <CustomVisibilityIcon />
                  <p>0</p>
                </ViewInfo>
              </ImageInfo>
            </div>
          ))}
        </ImageContainer>
      )}
    </Contents>
  );
};

export default MySemifolio;


