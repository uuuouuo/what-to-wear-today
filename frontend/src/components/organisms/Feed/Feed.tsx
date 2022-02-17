import React, { FunctionComponent } from 'react';
import Router from 'next/router';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import Styled from './Feed.styled';
import { Tag, FooterContainer } from '@/components/atoms';
import { ArticleImage, FeedHeader } from '@/components/molecules';
import { FeedType } from '@/types/feed';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

interface Props {
  feed: FeedType;
}

const Feed: FunctionComponent<Props> = ({ feed }) => {
  const moveFeedDetail = (e: React.MouseEvent) => {
    Router.push(`/feed/${feed.no}`);
  };
  return (
    <Styled.Feed>
      <FeedHeader
        user={{ userId: feed.userId, nickname: feed.nickname, profileImage: feed.profileImage }}
        createdAt={feed.createdAt}
        weather={feed.weather}
        feedNo={feed.no}
      />

      {feed.images ? <ArticleImage images={feed.images} /> : <></>}

      <Styled.FeedContent onClick={moveFeedDetail}>{feed.content}</Styled.FeedContent>
      <Styled.TagContainer>
        <LocalOfferOutlinedIcon />
        {feed.tags.map((tag) => (
          <Tag key={tag} value={tag} />
        ))}
      </Styled.TagContainer>

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
