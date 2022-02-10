import React, { FunctionComponent } from 'react';
import Tabs from '@mui/material/Tabs';
import TabItem from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface Props {
  tabList: string[];
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Tab: FunctionComponent<Props> = ({ tabList }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} centered onChange={handleChange} aria-label="basic tabs example">
        {tabList.map((tab, idx) => (
          <TabItem label={tab} {...a11yProps(idx)} key={idx} />
        ))}
      </Tabs>
    </Box>
  );
};
export default Tab;
