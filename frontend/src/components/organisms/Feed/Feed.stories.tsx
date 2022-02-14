import React from 'react';
import Feed from './Feed';

export default {
  title: 'Molecules/Feed',
  component: Feed,
};

export const Default = () => {
  const feed = {
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
  };
  return <Feed feed={feed} />;
};
