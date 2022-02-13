import React, { useState, useEffect } from 'react';
import Styled from './MypageFeeds.styled';
import type { RootState } from '@/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MYPAGE_Feed_REQUEST } from '@/action/MypageFeedAction';

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
