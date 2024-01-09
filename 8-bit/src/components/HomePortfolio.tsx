import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from "@emotion/styled";
import HomeSemifolio from './HomeSemifolio';
import HomePortfolioFilter from './HomePortfolioFilter';
import { Common } from '../styles/common';

// 완료
const Portfolios = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 40px 24px 0 24px;
`;

const CustomTabs = styled(Tabs)`
  span {
    border-bottom: 4px solid ${Common.colors.primary[80]};
  }
  .Mui-selected{
    color: ${Common.colors.neutral[90]};
    font-weight: ${Common.font.weight.semibold}; 
  }
`

const CustomTab = styled(Tab)`
  font-size: ${Common.font.size.header};
  font-weight: ${Common.font.weight.regular};
  color: ${Common.colors.neutral[30]};
  padding: ${Common.space.xs} 0;
  margin-right: ${Common.space.lg};
  letter-spacing: 0;
`;

const Contents = styled.div`
  color: ${Common.colors.neutral[40]};
  font-size: ${Common.font.size.md};
  font-weight: ${Common.font.weight.semibold};
  margin: ${Common.space.s} 0 ${Common.space.xl} 0;
`;


function HomePortfolio() {
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
          <CustomTabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor={"inherit"} >
            <CustomTab label="세미폴리오" {...a11yProps(0)} disableRipple />
            <CustomTab label="포트폴리오" {...a11yProps(1)} disableRipple />
          </CustomTabs>
        </Box>
        <Contents>모든 단위의 작업물을 모아둔 공간입니다. 다른 사람의 작업물을 둘러보세요.</Contents>
        <CustomTabPanel value={value} index={0}>
          <HomePortfolioFilter/>
          <HomeSemifolio/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          포트폴리오
        </CustomTabPanel>
      </Box>
    </Portfolios>
  )
}

export default HomePortfolio;



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
