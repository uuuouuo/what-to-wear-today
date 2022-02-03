import React from 'react';
// import Styled from './styled';

import Header from 'components/Header/Header';
import CommentPage from 'components/CommentPage/CommentPage';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import {
  UserImage,
  UserName,
  UserId,
  HashTag,
  ArticleContent,
  ArticleDate,
  Button,
} from '../../components/atoms';

const feeddetail = () => {
  const dropdown = () => {
    console.log('드롭다운 만들어야 해!');
  };

  const user = {
    userId: 1,
    name: '김',
    id: 'dobby0807',
  };

  const article = {
    id: 1,
    content: 'qweqweqwe',
    hashTag: ['추워', '아냐 더워', '아냐 적당해'],
    date: '220203',
  };

  return (
    <>
      <Header name="오늘 뭐 입지?" rightSide="notification" />
      <div>
        <UserImage userId={user.userId} />
        <div>
          <UserName value={user.name} />
          <UserId value={user.id} />
        </div>
        <Button type="button" children={<MoreHorizIcon />} onClick={dropdown} />
      </div>
      <div>
        <ArticleContent value={article.content} />
        <HashTag value={article.hashTag} />
      </div>
      <div>
        <ArticleDate value={article.date} />
      </div>
      {/* 댓글 부분 */}
      <CommentPage />
    </>
  );
};

export default feeddetail;
