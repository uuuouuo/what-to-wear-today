import React from 'react';
import type { NextPage } from 'next';
import Styled from './styled';
import FooterNavbar from '@/components/FooterNavbar/FooterNavbar';
import Header from '@/components/Header/Header';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Likefeed: NextPage = () => {
  return (
    <>
      <Header leftSide="pointer" name="오늘 뭐 입지?" rightSide="notification" />
      <Styled.LikeFeedContainer>
        <FavoriteBorderIcon />
      </Styled.LikeFeedContainer>
      <FooterNavbar />
    </>
  );
};

export default Likefeed;
