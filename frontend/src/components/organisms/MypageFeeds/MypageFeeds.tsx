import React, { useState, useEffect } from 'react';
import Styled from './MypageFeeds.styled';
import type { RootState } from '@/reducers';
import { useSelector } from 'react-redux';
import { Feed } from '@/components/organisms';

const MypageFeeds = () => {
  const { myFeeds } = useSelector((state: RootState) => state.myPageFeeds);

  return (
    <Styled.ContentContainer>
      {myFeeds.map((item, idx) => (
        <Feed key={item.no} feed={item} />
      ))}
    </Styled.ContentContainer>
  );
};

export default MypageFeeds;
