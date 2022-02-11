import React, { useEffect } from 'react';
import { BottomNavigation, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Styled from './FooterNavbar.styled';

const FooterNavbar = () => {
  const current = useRouter().pathname.slice(1);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (current === '') {
      setValue(0);
    } else if (current === 'search') {
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
    <Paper>
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
            <Link href="/">
              <HomeIcon />
            </Link>
          }
        />
        <Styled.BottomNavigationAction
          sx={{ pt: 0, pb: 0 }}
          icon={
            <Link href="/search">
              <SearchIcon />
            </Link>
          }
        />
        <Styled.BottomNavigationAction sx={{ pt: 0, pb: 0 }} icon={<AddCircleIcon />} />
        <Styled.BottomNavigationAction
          sx={{ pt: 0, pb: 0 }}
          icon={
            <Link href="/likefeed">
              <FavoriteIcon />
            </Link>
          }
        />
        <Styled.BottomNavigationAction
          sx={{ pt: 0, pb: 0 }}
          icon={
            <Link href="/user/1">
              <PersonIcon />
            </Link>
          }
        />
      </BottomNavigation>
    </Paper>
  );
};

export default FooterNavbar;
