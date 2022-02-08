import React from 'react';
import Styled from './styled';
import type { NextPage } from 'next';

import FeedRegion from '@/components/FeedRegion/FeedRegion';
import FeedFilter from '@/components/FeedFilter/FeedFilter';
import FeedContent from '@/components/FeedContent/FeedContent';
import FooterNavbar from '@/components/FooterNavbar/FooterNavbar';
import Header from '@/components/Header/Header';

import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Feed: NextPage = () => {
  return (
    <>
      <Styled.FeedLayout>
        <Header leftSide="logo" name="오늘 뭐 입지?" rightSide="notification"></Header>

        <Styled.FeedNavbar>
          <FeedRegion />
          {/* 날씨 정보창 */}
          <Styled.WeatherArea>
            <WbSunnyIcon />
            -3
          </Styled.WeatherArea>
        </Styled.FeedNavbar>

        <Styled.FeedFilter>
          <FeedFilter />
        </Styled.FeedFilter>

        <Styled.FeedContent>
          <FeedContent />
        </Styled.FeedContent>
      </Styled.FeedLayout>
      <FooterNavbar />
    </>
  );
};

export default Feed;
