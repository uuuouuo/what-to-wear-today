import React, { useState } from 'react';
import Styled from './styled';
import type { NextPage } from 'next';

import { Header, FeedRegion, TabMenu, FooterNavbar } from '@/components/molecules';
import { Feed } from '@/components/organisms';
import { RegionType } from 'types/region';

const interestRegions: RegionType[] = [
  { no: 1, regionName: 'seoul', weather: '맑음' },
  { no: 2, regionName: 'gwangju', weather: '맑음' },
  { no: 3, regionName: 'ahnyang', weather: '맑음' },
  { no: 4, regionName: 'daejeon', weather: '맑음' },
  { no: 5, regionName: 'busan', weather: '맑음' },
];

const feeds = [
  {
    no: 1,
    userId: 'ssafy',
    nickname: '장다빈',
    profileImage: 'images/icon/blank_user.png',
    content: '히히히ㅣㅎ #따뜻 #패딩 히히히힣',
    createdAt: new Date(),
    photoDate: new Date(),
    weather: '맑음',
    privateMode: false,
    images: [
      '/images/profileIMG/sample.jpg',
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    ],
    tags: ['#패딩', '#코트'],
  },
  {
    no: 2,
    userId: 'ssafy',
    nickname: '장다빈',
    profileImage: 'images/icon/blank_user.png',
    content: '히히히ㅣㅎ #따뜻 #패딩 히히히힣',
    createdAt: new Date(),
    photoDate: new Date(),
    weather: '맑음',
    privateMode: false,
    tags: ['#따뜻', '#얼죽아'],
  },
];

const Home: NextPage = () => {
  const [value, setValue] = useState(0);
  return (
    <Styled.MainContainer>
      <Header leftSide="logo" name="오늘 뭐 입지?" rightSide="notification" />

      <Styled.FeedNavbar>
        <FeedRegion interestRegions={interestRegions} />
        <TabMenu
          tabList={['추천순', '인기순', '좋아요순', '최신순']}
          value={value}
          setValue={setValue}
        />
      </Styled.FeedNavbar>
      <Styled.FeedContent>
        {feeds.map((feed) => (
          <Feed key={feed.no} feed={feed} />
        ))}
      </Styled.FeedContent>
      <FooterNavbar />
    </Styled.MainContainer>
  );
};

export default Home;
