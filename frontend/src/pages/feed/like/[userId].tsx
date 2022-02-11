import React from 'react';
import { NextPage } from 'next';
import LikeFeedTemplate from 'template/feed/like/[userId]';

const LikeFeed: NextPage = () => {
  return <LikeFeedTemplate />;
};

export default LikeFeed;
