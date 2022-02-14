import React, { FunctionComponent, useState } from 'react';
import Styled from './CommentPage.styled';
import type { RootState } from '@/reducers';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { UserImage } from '@/components/atoms/';
import { useDispatch, useSelector } from 'react-redux';
import { CommentType } from '@/types/comment';
import { createCommentRequest, deleteCommentRequest } from '@/action/commentAction';

interface Props {
  feedNo: number;
}

const CommentPage: FunctionComponent<Props> = ({ feedNo }) => {
  const { feed } = useSelector((state: RootState) => state.feed);
  const { comments } = useSelector((state: RootState) => state.comment);
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const action = (e: React.MouseEvent<Element, MouseEvent>) => {
    dispatch(createCommentRequest(text, feed));
    setText('');
  };

  const deleteAction = (comment: any) => {
    dispatch(deleteCommentRequest(comment.comment.no));
  };

  return (
    <Styled.CommentPageLayout>
      <Styled.WriteArea>
        <UserImage />
        <Styled.Input placeholder="댓글 달기..." value={text} onChange={inputValue} />
        <Styled.Button children={<SendIcon />} type="submit" onClick={action} />
      </Styled.WriteArea>
      <React.Fragment>
        {comments.map((comment: CommentType, idx: number) => (
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} key={idx}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <UserImage />
              </ListItemAvatar>
              <ListItemText
                primary={comment.userId}
                secondary={
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {comment.content}
                  </Typography>
                }
              />
              <Button onClick={() => deleteAction({ comment })} children={<p>삭제</p>} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))}
      </React.Fragment>
    </Styled.CommentPageLayout>
  );
};

export default CommentPage;
