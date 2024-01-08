import { useState } from "react";
import { Tabs, Tab } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// 개별 탭의 컨텐츠를 렌더링할 컴포넌트
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

// 메인 컴포넌트
function MainContent() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [subTabIndex, setSubTabIndex] = useState<number>(0);

  const handleTabChange = (newValue: number) => {
    setTabIndex(newValue);
  };

  const handleSubTabChange = (newValue: number) => {
    setSubTabIndex(newValue);
  };

  return (
    <>
      <Tabs
        value={tabIndex}
        onChange={(_event, newValue) => handleTabChange(newValue)}
        aria-label="main tabs"
      >
        <Tab label="마이폴리오" />
        <Tab label="북마크" />
        <Tab label="나의 활동" />
      </Tabs>

      <TabPanel value={tabIndex} index={0}>
        <Tabs
          value={subTabIndex}
          onChange={(_event, newValue) => handleSubTabChange(newValue)}
          aria-label="sub tabs"
        >
          <Tab label="나의 포트폴리오" />
          <Tab label="나의 세미폴리오" />
        </Tabs>
        <TabPanel value={subTabIndex} index={0}>
          나의 포트폴리오 내용
        </TabPanel>
        <TabPanel value={subTabIndex} index={1}>
          나의 세미폴리오 내용
        </TabPanel>
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>
        <Tabs
          value={subTabIndex}
          onChange={(_event, newValue) => handleSubTabChange(newValue)}
          aria-label="sub tabs"
        >
          <Tab label="포트폴리오" />
          <Tab label="세미폴리오" />
          <Tab label="커뮤니티" />
          <Tab label="체용공고" />
        </Tabs>
        <TabPanel value={subTabIndex} index={0}>
          포트폴리오 북마크
        </TabPanel>
        <TabPanel value={subTabIndex} index={1}>
          세미폴리오 북마크
        </TabPanel>
        <TabPanel value={subTabIndex} index={2}>
          커뮤니티 북마크
        </TabPanel>
        <TabPanel value={subTabIndex} index={3}>
          체용공고 북마크
        </TabPanel>
      </TabPanel>

      <TabPanel value={tabIndex} index={2}>
        <Tabs
          value={subTabIndex}
          onChange={(_event, newValue) => handleSubTabChange(newValue)}
          aria-label="sub tabs"
        >
          <Tab label="내가 쓴 댓글" />
          <Tab label="내가 쓴 게시글" />
          <Tab label="멘토링" />
        </Tabs>
        <TabPanel value={subTabIndex} index={0}>
          내가 쓴 댓글 리스트
        </TabPanel>
        <TabPanel value={subTabIndex} index={1}>
          내가 쓴 게시글 리스트
        </TabPanel>
        <TabPanel value={subTabIndex} index={2}>
          멘토링 리스트
        </TabPanel>
      </TabPanel>
    </>
  );
}

export default MainContent;
