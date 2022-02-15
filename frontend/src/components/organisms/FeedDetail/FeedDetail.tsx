import React, { FunctionComponent, useEffect, useState } from 'react';
import Router from 'next/router';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

import Styled from './FeedDetail.styled';
import { FooterContainer, Tag, Button, Text } from '@/components/atoms';
import { ArticleImage, FeedHeader } from '@/components/molecules';
import { FeedType } from '@/types/feed';
import { deleteFeedRequest } from '@/action/feedAction';
import { useDispatch } from 'react-redux';

interface Props {
  feed: FeedType;
}

const FeedDetail: FunctionComponent<Props> = ({ feed }) => {
  useEffect(() => {
    if (window.location.href === `http://localhost:3000/${feed.no}`) {
      setIsDetail(true);
    } else {
      setIsDetail(false);
    }
  }, []);

  const dispatch = useDispatch();
  const [isDetail, setIsDetail] = useState(false);

  const moveFeedDetail = (e: React.MouseEvent) => {
    Router.push(`feed/${feed.no}`);
  };

  const deleteFeedAction = (e: React.MouseEvent) => {
    e.preventDefault();
    Router.push('/');
    const feedNo = Number(feed.no);
    dispatch(deleteFeedRequest(feedNo));
  };

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
        {isDetail ? (
          <>
            <Styled.Button onClick={moveFeedDetail} bgColor="transparent">
              <ChatBubbleOutlineIcon />
            </Styled.Button>
            <Styled.Button onClick={moveFeedDetail} bgColor="transparent">
              <FavoriteBorderIcon />
            </Styled.Button>
          </>
        ) : (
          <>
            <Button bgColor="#000" onClick={moveFeedDetail}>
              <Text color="#fff" value="수정" />
            </Button>
            <Button bgColor="#fe7b45" onClick={deleteFeedAction}>
              <Text color="#fff" value="삭제" />
            </Button>
          </>
        )}
      </FooterContainer>
    </Styled.FeedDetail>
  );
};

export default FeedDetail;
