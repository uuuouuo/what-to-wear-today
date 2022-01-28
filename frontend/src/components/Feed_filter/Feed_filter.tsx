import React from 'react';

import Styled from './Feed_filter.styled';

import Button from '../atoms/Button/Button';

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
    <Styled.Feed_filter>
      <Button onClick={feedRerender}>추천순</Button>

      <Button onClick={feedRerender}>인기순</Button>

      <Button onClick={feedRerender}>좋아요순</Button>

      <Button onClick={feedRerender}>최신순</Button>
    </Styled.Feed_filter>
  );
};

export default FeedFilter;
