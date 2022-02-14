import React from 'react';
import Styled from './styled';
import type { NextPage } from 'next';
import type { RootState } from '@/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { Header, FooterNavbar, Comment, CommentForm } from '@/components/molecules';
import { FeedDetail } from '@/components/organisms';
import { CommentType } from '@/types/comment';

import { createCommentRequest } from '@/action/commentAction';
import { useChange } from '@/hooks';

const FeedDetailTemplate: NextPage<Props> = () => {
  const dispatch = useDispatch();
  const { feed } = useSelector((state: RootState) => state.feed);
  const { comments } = useSelector((state: RootState) => state.comment);

  const [commentValue, setCommentValue, onCommentValueChange] = useChange('');
  const sendComment = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(createCommentRequest(commentValue, feed.no));
    setCommentValue('');
  };

  return (
    <Styled.MainContainer>
      <Header name="오늘 뭐 입지?" leftSide="pointer" rightSide="notification" />

      <Styled.ArticleArea>
        <FeedDetail feed={feed} />
        <div>
          <CommentForm value={commentValue} onChange={onCommentValueChange} onClick={sendComment} />
          {comments.map((comment: CommentType) => (
            <Comment key={comment.no} comment={comment} />
          ))}
        </div>
      </Styled.ArticleArea>
      <FooterNavbar />
    </Styled.MainContainer>
  );
};

export default FeedDetailTemplate;
