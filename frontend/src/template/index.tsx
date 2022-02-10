import React, { useEffect } from 'react';
import Styled from './styled';
import type { NextPage } from 'next';

import { Header, FeedRegion, Tab, FooterNavbar, FeedContent } from '@/components/molecules';

const Home: NextPage = () => {
  useEffect(() => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        const latitude: number = position.coords.latitude;
        const longitude: number = position.coords.longitude;
      });
    }
  });
  return (
    <>
      <Styled.MainContainer>
        <Styled.FeedLayout>
          <Header leftSide="logo" name="오늘 뭐 입지?" rightSide="notification" />

          <Styled.FeedNavbar>
            <FeedRegion />
            <Tab tabList={['추천순', '인기순', '좋아요순', '최신순']} />
          </Styled.FeedNavbar>

          <Styled.FeedContent>
            <FeedContent />
          </Styled.FeedContent>
        </Styled.FeedLayout>
      </Styled.MainContainer>
      <FooterNavbar />
    </>
  );
};

export default Home;
