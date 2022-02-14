import React from 'react';
import type { NextPage } from 'next';
import Styled from './styled';
import { Header, FooterNavbar } from '@/components/molecules';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const LikeFeedTemplate: NextPage = () => {
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

export default LikeFeedTemplate;
