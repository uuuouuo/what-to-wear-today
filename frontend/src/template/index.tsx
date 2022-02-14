import React, { useEffect } from 'react';
import Styled from './styled';
import type { NextPage } from 'next';
import axios from 'axios';

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
    user: {
      no: 'a123456789',
      userId: 'ssafy',
      nickName: '장다빈',
      profileImage: 'images/icon/blank_user.png',
    },
    content: '히히히ㅣㅎ #따뜻 #패딩 히히히힣',
    createdAt: '2022-02-09',
    photoDate: '2020-02-09',
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
    createdAt: '2022-02-09',
    photoDate: '2020-02-09',
    weather: '맑음',
    privateMode: false,
  },
];

const Home: NextPage = () => {
  useEffect(() => {
    if (navigator) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        const latitude: number = position.coords.latitude;
        const longitude: number = position.coords.longitude;
        axios({
          method: 'get',
          url: `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x=${longitude}&y=${latitude}`,
          headers: {
            Authorization: 'KakaoAK 39e2904a8ec248d9db91d79d53358ab1',
          },
        });
        // .then((response) => console.log(response))
      });
    }
  });

  return (
    <Styled.MainContainer>
      <Header leftSide="logo" name="오늘 뭐 입지?" rightSide="notification" />

      <Styled.FeedNavbar>
        <FeedRegion interestRegions={interestRegions} />
        <TabMenu tabList={['추천순', '인기순', '좋아요순', '최신순']} />
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
