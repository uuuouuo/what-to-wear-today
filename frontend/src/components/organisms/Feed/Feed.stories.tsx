import React from 'react';
import { FeedType } from '@/types/feed';
import Feed from './Feed';

export default {
  title: 'Molecules/Feed',
  component: Feed,
};

export const Default = () => {
  const feed: FeedType = {
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
    tags: ['#패딩'],
  };
  return <Feed feed={feed} />;
};
