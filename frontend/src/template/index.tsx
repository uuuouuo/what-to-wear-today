import React from 'react';
import Styled from './styled';
import type { NextPage } from 'next';

import { Header, FeedRegion, TabMenu, FooterNavbar, Feed } from '@/components/molecules';
import { RegionType } from 'types/region';

const interestRegions: RegionType[] = [
  { no: 1, regionName: 'seoul', temperature: -3 },
  { no: 2, regionName: 'gwangju', temperature: -1 },
  { no: 3, regionName: 'ahnyang', temperature: 1 },
  { no: 4, regionName: 'daejeon', temperature: 5 },
  { no: 5, regionName: 'busan', temperature: 7 },
];

const feeds = [
  {
    no: 1,
    user: {
      no: 'a123456789',
      userId: 'ssafy',
      nickName: '장다빈',
      profileImage: 'images/icon/blank_user.png',
    },
    content: '히히히ㅣㅎ #따뜻 #패딩 히히히힣',
    createdAt: new Date('2022-02-09'),
    photoDate: new Date('2020-02-09'),
    weather: '맑음',
    privateMode: false,
    images: [
      {
        no: 1,
        imgUrl: '/images/profileIMG/sample.jpg',
        feedNo: 1,
      },
      {
        no: 2,
        imgUrl:
          'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        feedNo: 1,
      },
    ],
  },
  {
    no: 2,
    user: {
      no: 'a123456789',
      userId: 'ssafy',
      nickName: '장다빈',
      profileImage: 'images/icon/blank_user.png',
    },
    content: '히히히ㅣㅎ #따뜻 #패딩 히히히힣',
    createdAt: new Date('2022-02-09'),
    photoDate: new Date('2020-02-09'),
    weather: '맑음',
    privateMode: false,
  },
];

const Home: NextPage = () => {
  return (
    <Styled.MainContainer>
      <Header leftSide="logo" name="오늘 뭐 입지?" rightSide="notification" />

      <Styled.FeedNavbar>
        <FeedRegion interestRegions={interestRegions} />
        <TabMenu tabList={['추천순', '인기순', '좋아요순', '최신순']} />
      </Styled.FeedNavbar>
      <Styled.FeedContent>
        {feeds.map((feed) => (
          <Feed feed={feed} />
        ))}
      </Styled.FeedContent>
      <FooterNavbar />
    </Styled.MainContainer>
  );
};

export default Home;
