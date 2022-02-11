import React from 'react';

import Comment from './Comment';

export default {
  title: 'Molecules/Comment',
  component: Comment,
};

export const Default = () => {
  const comment = {
    no: 1,
    user: {
      no: 'a123456789',
      userId: 'ssafy',
      nickName: '장다비',
      profileImage: 'images/profileIMG/sample.jpg',
    },
    content: 'h2h2dfgdfsgdsf gsasdfasdfg sgregfadsf',
    createdAt: new Date(),
    feedNo: 1,
  };
  return <Comment comment={comment} />;
};
