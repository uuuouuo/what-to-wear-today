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
import Link from 'next/link';

interface Props {
  feed: FeedType;
}

const FeedDetail: FunctionComponent<Props> = ({ feed }) => {
  useEffect(() => {
    if (window.location.href === `http://localhost:3000/feed/${feed.no}`) {
      setIsDetail(true);
    } else {
      setIsDetail(false);
    }
  }, []);

  const dispatch = useDispatch();
  const [isDetail, setIsDetail] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const viewUDBtn = isDetail && isUser;
  // const [isLike, setIsLike] = useState(feed)

  const none = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const moveFeedDetail = (e: React.MouseEvent) => {
    if (isDetail) {
      e.preventDefault();
    } else {
      Router.push(`feed/${feed.no}`);
    }
  };

  const deleteFeedAction = (e: React.MouseEvent) => {
    e.preventDefault();
    const feedNo = Number(feed.no);
    dispatch(deleteFeedRequest(feedNo));
    Router.back();
  };

  const likeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const feedNo = Number(feed.no);
    dispatch(feedNo);
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
        {viewUDBtn ? (
          <>
            <Styled.fixButton onClick={none}>
              <Link href={`/feed/feedupdate/${feed.no}`}>수정</Link>
            </Styled.fixButton>
            <Button bgColor="#fe7b45" onClick={deleteFeedAction}>
              <Text color="#fff" value="삭제" />
            </Button>
            <Styled.Button onClick={moveFeedDetail} bgColor="transparent">
              <FavoriteBorderIcon />
            </Styled.Button>
          </>
        ) : (
          <>
            <Styled.Button onClick={moveFeedDetail} bgColor="transparent">
              <ChatBubbleOutlineIcon />
            </Styled.Button>
            <Styled.Button onClick={moveFeedDetail} bgColor="transparent">
              <FavoriteBorderIcon />
            </Styled.Button>
          </>
        )}
      </FooterContainer>
    </Styled.FeedDetail>
  );
};

export default FeedDetail;
