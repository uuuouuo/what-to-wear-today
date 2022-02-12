import React, { useState, useEffect } from 'react';
import Styled from './MypageFeeds.styled';
import type { RootState } from '@/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MYPAGE_Feed_REQUEST } from '@/action/MypageFeedAction';

const MypageFeeds = ({ userId }) => {
  const dispatch = useDispatch();
  const { myFeeds } = useSelector((state: RootState) => state.mypageFeeds);
  useEffect(() => {
    dispatch({
      type: LOAD_MYPAGE_Feed_REQUEST,
      userId: userId,
    });
  }, []);

  // console.log(myFeeds.data);

  return (
    <Styled.contentContainer>
      {myFeeds.data !== undefined
        ? myFeeds.data.map((item, idx) => {
            return <Styled.columnContainer key={idx}>{item.content}</Styled.columnContainer>;
          })
        : null}
    </Styled.contentContainer>
  );
};

export default MypageFeeds;
