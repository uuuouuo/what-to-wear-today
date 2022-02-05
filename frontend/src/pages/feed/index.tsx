import React from 'react';
import Styled from './styled';

import FeedRegion from '@/components/FeedRegion/FeedRegion';
import FeedFilter from '@/components/FeedFilter/FeedFilter';
import FeedContent from '@/components/FeedContent/FeedContent';
import FooterNavbar from '@/components/FooterNavbar/FooterNavbar';
import Header from '@/components/Header/Header';

const Feed = () => {
  return (
    <Styled.FeedLayout>
      <Header leftSide="logo" name="오늘 뭐 입지?" rightSide="notification"></Header>

      <Styled.FeedNavbar>
        <FeedRegion />
        <div>날씨정보</div>
      </Styled.FeedNavbar>

      <Styled.FeedFilter>
        <FeedFilter />
      </Styled.FeedFilter>

      <Styled.FeedContent>
        <FeedContent />
      </Styled.FeedContent>

      <FooterNavbar />
    </Styled.FeedLayout>
  );
};

export default Feed;
