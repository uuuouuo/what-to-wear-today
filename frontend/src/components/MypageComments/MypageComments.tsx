import React, { useState, useEffect } from 'react';
import Styled from './MypageComments.styled';
import type { RootState } from '@/reducers';
import { useSelector } from 'react-redux';

const MypageComments = () => {
  const { myComments } = useSelector((state: RootState) => state.mypageComments);

  return (
    <Styled.contentContainer>
      {myComments.map((item, idx) => {
        return <Styled.columnContainer key={idx}>{item.content}</Styled.columnContainer>;
      })}
    </Styled.contentContainer>
  );
};

export default MypageComments;
