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

// import { UserImage, Button, Input } from '@/components/atoms/';
import { useDispatch, useSelector } from 'react-redux';
import { CommentType } from '@/types/comment';
import {
  createCommentRequest,
  deleteCommentRequest,
  updateCommentRequest,
} from 'action/commentAction';

interface Props {
  feedNo: number;
}

const CommentPage: FunctionComponent<Props> = ({ feedNo }) => {
  const { feed } = useSelector((state: RootState) => state.feed);
  const { comments } = useSelector((state: RootState) => state.comment);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [commentText, setCommentText] = useState('');
  const [update, setUpdate] = useState(Array.from({ length: comments.length }, () => false));

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText((text) => e.target.value);
  };

  const action = (e: React.MouseEvent<Element, MouseEvent>) => {
    dispatch(createCommentRequest(text, feed));
    setText('');
  };

  const deleteAction = (e: React.MouseEvent<Element, MouseEvent>) => {
    dispatch(deleteCommentRequest(e.target.attributes[0].value));
  };

  const changeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentText(e.target.value);
  };

  const updateAction = (e: React.MouseEvent<Element, MouseEvent>) => {
    update[e.target.attributes[0].value] = false;
    dispatch(
      updateCommentRequest(e.target.attributes[1].value, commentText, e.target.attributes[0].value),
    );
  };

  const updateClick = (e: ChangeEvent<HTMLInputElement>) => {
    if (update[e.target.attributes[1].value] === false) {
      setCommentText(e.target.attributes[0].value);
      let newUpdate = [...update];
      newUpdate[e.target.attributes[1].value] = true;
      setUpdate(newUpdate);
    } else {
      let newUpdate = [...update];
      newUpdate[e.target.attributes[1].value] = false;
      setUpdate(newUpdate);
      updateAction;
    }
  };

  return (
    <Styled.CommentPageLayout>
      <Styled.WriteArea>
        hello
        {/* <UserProfile user={user} />
        <Styled.Input placeholder="댓글 달기..." value={text} onChange={inputValue} />
        <Styled.Button type="submit" onClick={action}>
          <SendIcon />
        </Styled.Button>
      </Styled.WriteArea>
      <React.Fragment>
        {comments.map((comment: CommentType, idx: number) => (
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} key={idx}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <UserImage />
              </ListItemAvatar>
              <ListItemText
                primary={comment.nickname}
                secondary={
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {update[idx] ? (
                      <Input value={commentText} onChange={changeContent} />
                    ) : (
                      <span>{comment.content}</span>
                    )}
                  </Typography>
                }
              />
              {update[idx] ? (
                <Button onClick={updateAction} children={<p data-commentno={comment.no}>완료</p>} />
              ) : (
                <Button
                  onClick={updateClick}
                  children={
                    <p data-commentcontent={comment.content} data-commentidx={idx}>
                      수정
                    </p>
                  }
                />
              )}
              <Button onClick={deleteAction} children={<p data-commentno={comment.no}>삭제</p>} />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))} } */}
      {/* </> */}
    </Styled.CommentPageLayout>
  );
};

export default CommentPage;
