import React, { FunctionComponent } from 'react';
import Styled from './styled';
import type { NextPage } from 'next';
import type { RootState } from '@/reducers';
import { useSelector } from 'react-redux';
import Link from '@mui/material/Link';
import { Header, FooterNavbar, Comment } from '@/components/molecules';

import { FeedDetail } from '@/components/organisms';

interface Props {
  feedNo: number;
}

const FeedDetailTemplate: NextPage<Props> = ({ feedNo }) => {
  const { feed } = useSelector((state: RootState) => state.feed);

  return (
    <Styled.MainContainer>
      <Header name="오늘 뭐 입지?" leftSide="pointer" rightSide="notification" />
      {/* <Styled.TopArea> */}
      {/* <Styled.ArticleArea>
          <Styled.UserInfoArea>
            <Link href="/feed/1" underline="none" sx={{ color: 'black' }}>
              <UserImage />
            </Link>

            <Styled.UserId>
              <Link href="/feed/1" underline="none" sx={{ color: 'black' }}>
                <UserName value={user.name} />
              </Link>
              <UserId value="feed.userId" />
            </Styled.UserId>
          </Styled.UserInfoArea>
          <Dropdown />
        </Styled.ArticleArea>

        <Styled.ArticleContent>
          <ArticleContent value={feed[0].content} />
          <HashTag value={[feed[0].tags]} />
          <Styled.DateLine>
            <ArticleDate value="feed.createdAt" />
            <ReportForm />
          </Styled.DateLine>
        </Styled.ArticleContent>
      </Styled.TopArea>
      <CommentPage /> */}
      <Styled.ArticleArea>
        <FeedDetail feed={feed} />
        <div>
          {/* {comments.map((comment) => (
            <Comment key={comment.no} comment={comment} />
          ))} */}
        </div>
      </Styled.ArticleArea>
      <FooterNavbar />
    </Styled.MainContainer>
  );
};

export default FeedDetailTemplate;
