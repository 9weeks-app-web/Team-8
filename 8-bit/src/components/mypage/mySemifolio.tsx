import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const Contents = styled.article`
  display: flex;
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
    </Contents>
  );
};

export default MySemifolio;
