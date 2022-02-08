import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';
import Styled from './FooterNavbar.styled';
import { useRouter } from 'next/router';

const FooterNavbar = () => {
  const current = useRouter().pathname.slice(1);
  console.log(current);
  useEffect(() => {
    const arbitrary = 10;
    if (current !== 'feed' && 'search' && 'create' && 'likeFeed' && 'myPage') {
      setValue(arbitrary);
    }
  });

  const [value, setValue] = React.useState(0);
  return (
    <Styled.FooterNavbar>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={Styled.style}
          icon={
            <Link href={'/feed'}>
              <HomeIcon />
            </Link>
          }
        />

        <BottomNavigationAction
          sx={Styled.style}
          icon={
            <Link href={'/'}>
              <SearchIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          sx={Styled.style}
          icon={
            <Link href={'/'}>
              <AddCircleIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          sx={Styled.style}
          icon={
            <Link href={'/'}>
              <AddCircleIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          sx={Styled.style}
          icon={
            <Link href={'/'}>
              <PersonIcon />
            </Link>
          }
        />
      </BottomNavigation>
    </Styled.FooterNavbar>
  );
};

export default FooterNavbar;
