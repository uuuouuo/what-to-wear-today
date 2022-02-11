import React, { FunctionComponent } from 'react';
import Styled from './Comment.styled';
import { Text } from '@/components/atoms';
import { UserProfileWithNickname } from '@/components/molecules';
import { CommentType } from '@/types/comment';

interface Props {
  comment: CommentType;
}

const Comment: FunctionComponent<Props> = ({ comment }) => {
  return (
    <Styled.Container>
      <UserProfileWithNickname user={comment.user} />
      <Text color="#eee" value={comment.content} />
    </Styled.Container>
  );
};

export default Comment;
