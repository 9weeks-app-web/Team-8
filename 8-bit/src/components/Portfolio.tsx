import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from "@emotion/styled";
import SemifoiloModal from './Semifolio';
import PortfolioFilter from './PortfolioFilter';

const CustomTabs = styled(Tabs)`
  span {
    border-bottom: 4px solid #337AFF;
  }
  .css-1upmmjp-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: black;
    font-weight: bold;
  } 
`

const CustomTab = styled(Tab)`
  font-size: 28px;
  padding: 12px 0;
  margin-right: 20px;
`;

const Contents = styled.div`
  color: #8C8C8C;
  font-size: large;
  font-weight: 600;
  margin: 20px 0 40px 0;
`;

const Portfolios = styled.div`
  padding: 16px;
  
`;

function Portfolio() {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const tabElement = document.getElementById(`simple-tab-${value}`);
    if (tabElement) {
      tabElement.focus();
    }
  }, [value]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Portfolios>
      <Box sx={{ width: '100%' }}>
        <Box>
          <CustomTabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <CustomTab label="세미폴리오" {...a11yProps(0)} disableRipple/>
            <CustomTab label="포트폴리오" {...a11yProps(1)} disableRipple/>
          </CustomTabs>
        </Box>
        <Contents>모든 단위의 작업물을 모아둔 공간입니다. 다른 사람의 작업물을 둘러보세요.</Contents>
        <CustomTabPanel value={value} index={0}>
          <PortfolioFilter />
          <SemifoiloModal />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          포트폴리오
        </CustomTabPanel>
      </Box>
    </Portfolios>
  )
}

export default Portfolio;



interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
