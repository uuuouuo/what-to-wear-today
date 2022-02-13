import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import Styled from './styled';
import { Title } from '@/components/molecules';
import { Label, Button, Text } from '@/components/atoms';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import FollowingModal from '@/components/Following_modal/Following_modal';
import DrawerMenu from '@/components/Drawer_menu/Drawer_menu';

import MypageFeeds from '@/components/MypageFeeds/MypageFeeds';
import MypageComments from '@/components/MypageComments/MypageComments';

const User: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

  const modifyProfile = () => {
    console.log(userId);
    console.log(typeof userId);
  };

  return (
    <Styled.MainContainer>
      <Title value="Profile" />
      <DrawerMenu userId={userId} />
      <Styled.ProfileContainer>
        <Avatar src={'/images/icon/blank_user.png'} sx={{ width: 100, height: 100 }} />
        <Styled.columnContainer>
          <Styled.rowContainer>
            <Label>보노보노</Label>
            {Number(userId) === 1 ? (
              <Button onClick={modifyProfile}>
                <SettingsIcon />
              </Button>
            ) : (
              <Button onClick={modifyProfile}>
                <Text value="Follow" />
              </Button>
            )}
          </Styled.rowContainer>
          <Styled.rowContainer>
            <Label>더위를 잘 타는 타입</Label>
          </Styled.rowContainer>
          <Styled.rowContainer>
            <FollowingModal title="팔로워" />
            <FollowingModal title="팔로잉" />
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
      <Styled.contentContainer></Styled.contentContainer>
      <Styled.contentContainer>
        {value === 0 && userId !== undefined ? <MypageFeeds userId={userId} /> : null}
        {value === 2 && userId !== undefined ? <MypageComments userId={userId} /> : null}
      </Styled.contentContainer>
    </Styled.MainContainer>
  );
};

export default User;
