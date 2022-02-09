import React, { useCallback, useEffect, FunctionComponent } from 'react';
import { BottomNavigation, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Styled from './FooterNavbar.styled';

const FooterNavbar: FunctionComponent = () => {
  const current = useRouter().pathname.slice(1);
  const [value, setValue] = React.useState(100);

  useEffect(() => {
    if (current === 'feed') {
      setValue(0);
    } else if (current === 'srarch') {
      setValue(1);
    } else if (current === 'create') {
      setValue(2);
    } else if (current === 'likefeed') {
      setValue(3);
    } else if (current === 'mypage') {
      setValue(4);
    } else {
      setValue(10);
    }
  });

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Styled.BottomNavigationAction
          sx={{ pt: 0, pb: 0 }}
          icon={
            <Link href={'/'}>
              <HomeIcon />
            </Link>
          }
        />
        <Styled.BottomNavigationAction sx={{ pt: 0, pb: 0 }} icon={<SearchIcon />} />
        <Styled.BottomNavigationAction sx={{ pt: 0, pb: 0 }} icon={<AddCircleIcon />} />
        <Styled.BottomNavigationAction
          sx={{ pt: 0, pb: 0 }}
          icon={
            <Link href={'/likefeed'}>
              <FavoriteIcon />
            </Link>
          }
        />
        <Styled.BottomNavigationAction
          sx={{ pt: 0, pb: 0 }}
          icon={
            <Link href={'/user/1'}>
              <PersonIcon />
            </Link>
          }
        />
      </BottomNavigation>
    </Paper>
  );
};

export default FooterNavbar;
