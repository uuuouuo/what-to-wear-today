import React, { useEffect } from 'react';
import Styled from './styled';
import type { NextPage } from 'next';

import type { RootState } from '@/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_FEED_REQUEST } from '@/action/feedAction';

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

interface Props {
  data: number | undefined;
}

const FeedDetail: NextPage<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const { feed } = useSelector((state: RootState) => state.feed);
  useEffect(() => {
    dispatch({
      type: LOAD_FEED_REQUEST,
      feedNo: { data },
    });
  }, []);

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
                <UserName value={'user.name'} />
              </Link>
              <UserId value={'user.id'} />
            </Styled.UserId>
          </Styled.UserInfoArea>
          <Dropdown />
        </Styled.ArticleArea>

        <Styled.ArticleContent>
          <ArticleContent value={'feed'} />
          <HashTag value={['article.hashTag']} />
          <Styled.DateLine>
            <ArticleDate value={'article.date'} />
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
