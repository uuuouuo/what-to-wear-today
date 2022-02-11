import React, { FunctionComponent } from 'react';
import Styled from './TabMenu.styled';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Text } from '@/components/atoms';

interface Props {
  tabList: string[];
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabMenu: FunctionComponent<Props> = ({ tabList }) => {
  const classes = Styled.useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        classes={{
          indicator: classes.indicator,
        }}
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        centered
      >
        {tabList.map((tab, idx) => (
          <Tab
            classes={{
              selected: classes.selected,
            }}
            key={tab}
            label={<Text value={tab} />}
            {...a11yProps(idx)}
          />
        ))}
      </Tabs>
    </Box>
  );
};
export default TabMenu;
