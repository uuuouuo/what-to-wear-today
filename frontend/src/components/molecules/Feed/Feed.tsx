import React, { FunctionComponent } from 'react';
import Router from 'next/router';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import Styled from './Feed.styled';
import { Text, FooterContainer } from '@/components/atoms';
import { ArticleImage, UserProfileWithNickname } from '@/components/molecules';
import { FeedType } from '@/types/feed';

interface Props {
  feed: FeedType;
}

const Feed: FunctionComponent<Props> = ({ feed }) => {
  const moveFeedDetail = (e: React.MouseEvent) => {
    Router.push(`feed/${feed.no}`);
  };
  return (
    <Styled.Feed onClick={moveFeedDetail}>
      <Styled.FeedHeader>
        <UserProfileWithNickname user={feed.user} />
        <Text value={feed.createdAt.toLocaleDateString()} />
      </Styled.FeedHeader>

      {feed.images ? <ArticleImage images={feed.images} /> : <></>}

      <Styled.FeedContent>
        {feed.content.split(/(#[^#\s]+|\n)/g).map((text, index) => {
          if (text.match(/(#[^#\s]+)/)) {
            return <Text className="hashtag" value={text} />;
          }
          if (text.match(/\n/)) {
            return <br />;
          }
          return <Text value={text} />;
        })}
      </Styled.FeedContent>

      <FooterContainer>
        <Styled.Button onClick={moveFeedDetail} bgColor="transparent">
          <ChatBubbleOutlineIcon />
        </Styled.Button>
        <Styled.Button onClick={moveFeedDetail} bgColor="transparent">
          <FavoriteBorderIcon />
        </Styled.Button>
      </FooterContainer>
    </Styled.Feed>
  );
};

export default Feed;
