import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const FeedFilter = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
        <Tab label="추천순" {...a11yProps(0)} />
        <Tab label="인기순" {...a11yProps(1)} />
        <Tab label="좋아요순" {...a11yProps(2)} />
        <Tab label="최신순" {...a11yProps(3)} />
      </Tabs>
    </Box>
  );
};
export default FeedFilter;
