import React, { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';

const FooterNavbar = () => {
  const current = useRouter().pathname.slice(1);
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const arbitrary = 10;
    if (current !== 'feed' && 'search' && 'create' && 'likefeed' && 'mypage') {
      setValue(arbitrary);
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
        <BottomNavigationAction
          sx={{ pt: 0, pb: 0 }}
          icon={
            <Link href={'/feed'}>
              <HomeIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          sx={{ pt: 0, pb: 0 }}
          icon={
            <Link href={'/search'}>
              <SearchIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          sx={{ pt: 0, pb: 0 }}
          icon={
            <Link href={'/create'}>
              <AddCircleIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          sx={{ pt: 0, pb: 0 }}
          icon={
            <Link href={'/likefeed'}>
              <FavoriteIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          sx={{ pt: 0, pb: 0, width: 50 }}
          icon={
            <Link href={'/mypage'}>
              <PersonIcon />
            </Link>
          }
        />
      </BottomNavigation>
    </Paper>
  );
};

export default FooterNavbar;
