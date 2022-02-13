import React, { useState, useEffect } from 'react';
import Styled from './MypageFeeds.styled';
import type { RootState } from '@/reducers';
import { useSelector } from 'react-redux';

const MypageFeeds = () => {
  const { myFeeds } = useSelector((state: RootState) => state.mypageFeeds);

  return (
    <Styled.contentContainer>
      {myFeeds.map((item, idx) => {
        return <Styled.columnContainer key={idx}>{item.content}</Styled.columnContainer>;
      })}
    </Styled.contentContainer>
  );
};

export default MypageFeeds;
