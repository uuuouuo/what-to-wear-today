import React from 'react';

import Styled from '../styles/Feed_Filter.styled';

import { useDispatch } from 'react-redux';

const feedRerender = (e: any) => {
  if (e.target.textContent === '추천순') {
    // useDispatch()
    console.log('추천순');
  } else if (e.target.textContent === '인기순') {
    // useDispatch()
    console.log('인기순');
  } else if (e.target.textContent === '좋아요순') {
    // useDispatch()
    console.log('좋아요순');
  } else {
    // useDispatch()
    console.log('최신순');
  }
};

const FeedFilter = () => {
  return (
    <Styled.Feed_Filter>
      <button onClick={feedRerender}>추천순</button>

      <button onClick={feedRerender}>인기순</button>

      <button onClick={feedRerender}>좋아요순</button>

      <button onClick={feedRerender}>최신순</button>
    </Styled.Feed_Filter>
  );
};

export default FeedFilter;
