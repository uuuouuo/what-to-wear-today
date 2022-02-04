import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';

import Styled from './styled';
import { Title } from '@/components/molecules';
import { Label, Button, Input } from '@/components/atoms';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

import { useRouter } from 'next/router';

const User: NextPage = () => {
  const router = useRouter();
  const { index } = router.query;

  const [activeIndex, setActiveIndex] = useState(0);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const dummyFeed = [
    { title: '더미 피드 1', content: '헤헿' },
    { title: '더미 피드 2', content: '헤헿' },
    { title: '더미 피드 3', content: '헤헿' },
    { title: '더미 피드 4', content: '헤헿' },
    { title: '더미 피드 5', content: '헤헿' },
  ];
  const dummyLike = [
    { title: '더미 라이크 1', content: '헤헿' },
    { title: '더미 라이크 2', content: '헤헿' },
    { title: '더미 라이크 3', content: '헤헿' },
    { title: '더미 라이크 4', content: '헤헿' },
    { title: '더미 라이크 5', content: '헤헿' },
  ];
  const dummyComment = [
    { title: '더미 코멘트 1', content: '헤헿' },
    { title: '더미 코멘트 2', content: '헤헿' },
    { title: '더미 코멘트 3', content: '헤헿' },
    { title: '더미 코멘트 4', content: '헤헿' },
    { title: '더미 코멘트 5', content: '헤헿' },
  ];
  const content = [
    {
      tab: 'feed',
      id: 0,
      content: dummyFeed,
    },
    {
      tab: 'like',
      id: 1,
      content: dummyLike,
    },
    {
      tab: 'comment',
      id: 2,
      content: dummyComment,
    },
  ];

  const modifyProfile = () => {
    console.log(index);
  };
  const switchTab = (e: React.MouseEvent<HTMLElement>) => {
    // console.log(e.target.value);
    const idx = e.target.value;
    setActiveIndex(Number(idx));
  };
  const searchFeed = () => {
    console.log('search');
  };
  const tmp = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.valueAsDate);
    console.log(event.target.valueAsNumber);
  };
  return (
    <Styled.MainContainer>
      <Title value="Profile" />
      <Styled.ProfileContainer>
        <Avatar src={'/images/icon/blank_user.png'} sx={{ width: 100, height: 100 }} />
        <Styled.columnContainer>
          <Styled.rowContainer>
            <Label>보노보노</Label>
            <Button onClick={modifyProfile}>
              <SettingsIcon />
            </Button>
          </Styled.rowContainer>
          <Styled.rowContainer>
            <Label>더위를 잘 타는 타입</Label>
          </Styled.rowContainer>
          <Styled.rowContainer>
            <Label>팔로잉 : </Label>
            <Label>팔로워 : </Label>
          </Styled.rowContainer>
        </Styled.columnContainer>
      </Styled.ProfileContainer>
      <Styled.rowContainer>
        {content.map((section, idx) => {
          return (
            <button key={idx} value={idx} onClick={switchTab}>
              {section.tab}
            </button>
          );
        })}
      </Styled.rowContainer>
      <Styled.contentContainer>
        {activeIndex === 0 ? (
          <Styled.rowContainer>
            기간 <input type="date" onChange={tmp}></input> ~ <input type="date"></input>
            <Button onClick={searchFeed}>
              <SearchIcon />
            </Button>
          </Styled.rowContainer>
        ) : null}
      </Styled.contentContainer>
      <Styled.contentContainer>
        {content[activeIndex].content.map((item, idx) => {
          return <Styled.columnContainer key={idx}>{item.title}</Styled.columnContainer>;
        })}
      </Styled.contentContainer>
    </Styled.MainContainer>
  );
};

export default User;
