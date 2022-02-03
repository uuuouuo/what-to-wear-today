import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';

import Styled from './styled';
import { Title } from '@/components/molecules';
import { Label, Button, Text } from '@/components/atoms';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';

const User: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
  ];

  const modifyProfile = () => {};
  const switchTab = (event: React.MouseEvent<HTMLElement>) => {
    // console.log(event);
    const idx = event.target.value;
    setActiveIndex(idx);
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
            <Label>팔로잉 : </Label>
            <Label>팔로워 : </Label>
          </Styled.rowContainer>
        </Styled.columnContainer>
      </Styled.ProfileContainer>
      <Styled.rowContainer>
        {content.map((section, index) => {
          return (
            <button key={index} value={index} onClick={switchTab}>
              {section.tab}
            </button>
          );
        })}
      </Styled.rowContainer>
      <Styled.contentContainer>
        {content[activeIndex].content.map((item, index) => {
          return <Styled.columnContainer key={index}>{item.title}</Styled.columnContainer>;
        })}
      </Styled.contentContainer>
    </Styled.MainContainer>
  );
};

export default User;
