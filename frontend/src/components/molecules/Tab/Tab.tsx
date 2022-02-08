import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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

const FeedFilter: FunctionComponent<Props> = ({ tabList }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
        {tabList.map((tab, idx) => (
          <Tab label={tab} {...a11yProps(idx)} />
        ))}
      </Tabs>
    </Box>
  );
};
export default FeedFilter;
