import React from 'react';
import Styled from './styled';
import type { NextPage } from 'next';
import type { RootState } from '@/reducers';
import { useSelector } from 'react-redux';
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
  feedNo: number;
}

const FeedDetail: NextPage<Props> = ({ feedNo }) => {
  const { feed } = useSelector((state: RootState) => state.feed);

  return (
    <Styled.DetailPageLayout>
      <Header
        name="오늘 뭐 입지?"
        leftSide="pointer"
        rightSide="notification"
        userId={feed[0].userId}
      />
      <Styled.TopArea>
        <Styled.ArticleArea>
          <Styled.UserInfoArea>
            <Link href={`/user/${feed[0].userId}`} underline="none" sx={{ color: 'black' }}>
              <UserImage />
            </Link>

            <Styled.UserId>
              <Link href={`/user/${feed[0].userId}`} underline="none" sx={{ color: 'black' }}>
                <UserName value={feed[0].userId} />
              </Link>
            </Styled.UserId>
          </Styled.UserInfoArea>
          <Dropdown />
        </Styled.ArticleArea>

        <Styled.ArticleContent>
          <ArticleContent value={feed[0].content} />
          <HashTag value={[feed[0].tags]} />
          <Styled.DateLine>
            <ArticleDate value={feed[0].createdAt} />
            <ReportForm />
          </Styled.DateLine>
        </Styled.ArticleContent>
      </Styled.TopArea>
      <CommentPage feedNo={feedNo} />
      <FooterNavbar />
    </Styled.DetailPageLayout>
  );
};

export default FeedDetail;
