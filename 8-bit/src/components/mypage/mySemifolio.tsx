import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import app from "../../firebase";

const Contents = styled.article`
  display: flex;
  flex-direction : column;
`;

const ControlBar = styled.div`
  display: flex;
  align-items: center; // 버튼과 select를 수직 중앙 정렬합니다.
  gap: 1rem; // 요소 사이의 간격을 설정합니다.
`;

const MySemifolio = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [upToDate, setUpToDate] = useState("");
  const [visibility, setVisibility] = useState("");

  const [imageURL, setImageURL] = useState<string | null>(null);

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
      <div>
        업로드 포트폴리오 썸네일
      </div>
    </Contents>
  );
};

export default MySemifolio;
