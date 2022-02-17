import React, { FunctionComponent, useEffect, useState } from 'react';
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
  useEffect(() => {
    if (window.location.href === `http://http://i6c106.p.ssafy.io:3000/feed/${feed.no}`) {
      setIsDetail(true);
    } else {
      setIsDetail(false);
    }
  }, []);

  const [isDetail, setIsDetail] = useState(false);
  const moveFeedDetail = (e: React.MouseEvent) => {
    if (isDetail) {
      e.preventDefault();
    } else {
      Router.push(`feed/${feed.no}`);
    }
  };

  // const likeClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   const feedNo = Number(feed.no);
  //   dispatch(feedNo);
  // };

  return (
    <Styled.FeedDetail>
      <FeedHeader
        user={{
          userId: feed.userId,
          nickname: feed.nickname,
          profileImage: feed.profileImage,
        }}
        createdAt={feed.createdAt}
        weather={feed.weather}
        feedNo={feed.no}
      />

      {feed.images ? <ArticleImage images={feed.images} /> : <></>}

      <Styled.FeedContent>{feed.content}</Styled.FeedContent>
      {feed.tags ? (
        <Styled.TagContainer>
          <LocalOfferOutlinedIcon />
          {feed.tags.map((tag) => (
            <Tag key={tag} value={tag} />
          ))}
        </Styled.TagContainer>
      ) : (
        <></>
      )}

      <FooterContainer>
        <>
          <Styled.Button onClick={moveFeedDetail} bgColor="transparent">
            <ChatBubbleOutlineIcon />
          </Styled.Button>
          <Styled.Button onClick={moveFeedDetail} bgColor="transparent">
            <FavoriteBorderIcon />
          </Styled.Button>
        </>
      </FooterContainer>
    </Styled.FeedDetail>
  );
};

export default FeedDetail;
