import React from 'react';

import Comment from './Comment';
import { CommentType } from '@/types/comment';

export default {
  title: 'Molecules/Comment',
  component: Comment,
};

export const Default = () => {
  const comment: CommentType = {
    no: 1,
    userId: 'ssafy',
    nickname: '장다비',
    profileImage: 'images/profileIMG/sample.jpg',
    content: 'h2h2dfgdfsgdsf gsasdfasdfg sgregfadsf',
    createdAt: new Date(),
    feedNo: 1,
    parent: null,
  };
  return <Comment comment={comment} />;
};
