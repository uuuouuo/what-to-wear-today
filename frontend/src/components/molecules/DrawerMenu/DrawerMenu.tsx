import React, { FunctionComponent } from 'react';
import Router from 'next/router';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface Props {
  // string[]는 에러로 추가
  userId: string | string[];
}

const TemporaryDrawer: FunctionComponent<Props> = ({ userId }) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const nextFunction = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.innerHTML === '지역설정') {
      Router.push(`/region/${userId}`);
    }
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['지역설정', '고객센터', '로그아웃'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText onClick={nextFunction} primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>햄버거</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TemporaryDrawer;
