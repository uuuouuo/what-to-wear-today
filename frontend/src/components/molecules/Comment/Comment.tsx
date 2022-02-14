import React, { FunctionComponent } from 'react';
import Styled from './Comment.styled';
import { Button, Text } from '@/components/atoms';
import { CommentForm, UserProfileWithInfo } from '@/components/molecules';
import { CommentType } from '@/types/comment';
import { useChange, useDisplay } from '@/hooks';

import { useDispatch } from 'react-redux';
import { deleteCommentRequest, updateCommentRequest } from 'action/commentAction';

interface Props {
  className?: string;
  comment: CommentType;
}

const Comment: FunctionComponent<Props> = ({ className, comment }) => {
  const dispatch = useDispatch();
  const [display, , openDisplay, closeDisplay] = useDisplay(true);
  const [commentValue, setCommentValue, onCommentValueChange] = useChange(comment.content);

  const updateComment = (e: React.MouseEvent) => {
    e.preventDefault();
    openDisplay();
    dispatch(updateCommentRequest(comment.no, commentValue));
  };

  const showEdit = (e: React.MouseEvent) => {
    setCommentValue(comment.content);
    closeDisplay();
  };

  const closeEdit = (e: React.MouseEvent) => {
    openDisplay();
  };

  const deleteComment = (e: React.MouseEvent) => {
    dispatch(deleteCommentRequest(comment.no));
  };

  return (
    <Styled.Container className={className}>
      <UserProfileWithInfo
        user={{
          userId: comment.userId,
          nickname: comment.nickname,
          profileImage: comment.profileImage,
        }}
        createdAt={comment.createdAt}
      />
      {display ? (
        <>
          <Styled.ButtonContainer>
            <Button bgColor="#000" onClick={showEdit}>
              <Text color="#fff" value="수정" />
            </Button>
            <Button bgColor="#fe7b45" onClick={deleteComment}>
              <Text color="#fff" value="삭제" />
            </Button>
          </Styled.ButtonContainer>
          <Styled.ContentContainer>
            <Text color="#000" value={comment.content} />
          </Styled.ContentContainer>
        </>
      ) : (
        <>
          <Styled.ButtonContainer>
            <Button bgColor="#fe7b45" onClick={closeEdit}>
              <Text color="#fff" value="취소" />
            </Button>
          </Styled.ButtonContainer>
          <CommentForm
            value={commentValue}
            onChange={onCommentValueChange}
            onClick={updateComment}
          />
        </>
      )}
    </Styled.Container>
  );
};

export default Comment;
