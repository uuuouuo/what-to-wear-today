import React, { FunctionComponent } from 'react';
import Router from 'next/router';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

import Styled from './FeedDetail.styled';
import { FooterContainer, Tag } from '@/components/atoms';
import { ArticleImage, FeedHeader } from '@/components/molecules';
import { FeedType } from '@/types/feed';

interface Props {
  feed: FeedType;
}

const FeedDetail: FunctionComponent<Props> = ({ feed }) => {
  const moveFeedDetail = (e: React.MouseEvent) => {
    Router.push(`feed/${feed.no}`);
  };
  return (
    <Styled.FeedDetail>
      <FeedHeader
        user={{ userId: feed.userId, nickname: feed.nickname, profileImage: feed.profileImage }}
        createdAt={feed.createdAt}
        weather={feed.weather}
      />

      {feed.images ? <ArticleImage images={feed.images} /> : <></>}

      <Styled.FeedContent>{feed.content}</Styled.FeedContent>
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
    </Styled.FeedDetail>
  );
};

export default FeedDetail;
