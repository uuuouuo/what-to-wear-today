import React from 'react';
import Styled from './styled';

import Link from '@mui/material/Link';
import { Header, FooterNavbar } from '@/components/molecules';
import CommentPage from '@/components/CommentPage/CommentPage';
import Dropdown from '@/components/Dropdown/Dropdown';
import ReportForm from '@/components/ReportForm/ReportForm';

import {
  UserImage,
  UserName,
  UserId,
  HashTag,
  ArticleContent,
  ArticleDate,
} from '@/components/atoms';

const FeedDetail = () => {
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
    <Styled.DetailPageLayout>
      <Header name="오늘 뭐 입지?" leftSide="pointer" rightSide="notification" />
      <Styled.TopArea>
        <Styled.ArticleArea>
          <Styled.UserInfoArea>
            <Link href={`/feed/1`} underline="none" sx={{ color: 'black' }}>
              <UserImage />
            </Link>

            <Styled.UserId>
              <Link href={`/feed/1`} underline="none" sx={{ color: 'black' }}>
                <UserName value={user.name} />
              </Link>
              <UserId value={user.id} />
            </Styled.UserId>
          </Styled.UserInfoArea>
          <Dropdown />
        </Styled.ArticleArea>

        <Styled.ArticleContent>
          <ArticleContent value={article.content} />
          <HashTag value={article.hashTag} />
          <Styled.DateLine>
            <ArticleDate value={article.date} />
            <ReportForm />
          </Styled.DateLine>
        </Styled.ArticleContent>
      </Styled.TopArea>
      <CommentPage />
      <FooterNavbar />
    </Styled.DetailPageLayout>
  );
};

export default FeedDetail;
