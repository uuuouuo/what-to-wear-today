import React, { useState, useEffect } from 'react';
import Styled from './MypageComments.styled';
import type { RootState } from '@/reducers';
import { useSelector } from 'react-redux';
import { Comment } from '@/components/molecules';

const MypageComments = () => {
  const { myComments } = useSelector((state: RootState) => state.mypageComments);

  return (
    <Styled.ContentContainer>
      {myComments.map((item, idx) => (
        <Comment className="comment" key={item.no} comment={item} />
      ))}
    </Styled.ContentContainer>
  );
};

export default MypageComments;
