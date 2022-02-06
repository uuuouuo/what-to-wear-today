import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import Styled from './styled';
import { Title } from '@/components/molecules';
import { Label, Button } from '@/components/atoms';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const User: NextPage = () => {
  const router = useRouter();
  const { index } = router.query;

  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
      content: dummyFeed,
    },
    {
      tab: 'like',
      content: dummyLike,
    },
    {
      tab: 'comment',
      content: dummyComment,
    },
  ];

  const modifyProfile = () => {
    console.log(index);
  };
  const searchFeed = () => {
    console.log('search');
  };
  const setDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'start') {
      setStartDate(event.target.valueAsDate);
    } else if (event.target.name === 'end') {
      setEndDate(event.target.valueAsDate);
    }
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
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Feeds" />
            <Tab label="Likes" />
            <Tab label="Comments" />
          </Tabs>
        </Box>
      </Styled.rowContainer>
      <Styled.contentContainer>
        {value === 0 ? (
          <Styled.rowContainer>
            기간 <input type="date" name="start" onChange={setDate}></input> ~{' '}
            <input type="date" name="end" onChange={setDate}></input>
            <Button onClick={searchFeed}>
              <SearchIcon />
            </Button>
          </Styled.rowContainer>
        ) : null}
      </Styled.contentContainer>
      <Styled.contentContainer>
        {content[value].content.map((item, idx) => {
          return <Styled.columnContainer key={idx}>{item.title}</Styled.columnContainer>;
        })}
      </Styled.contentContainer>
    </Styled.MainContainer>
  );
};

export default User;
