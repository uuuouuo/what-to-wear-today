import React, { useState, useEffect } from 'react';
import Styled from './CommentPage.styled';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import { UserImage } from '@/components/atoms/';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_COMMENTS_REQUEST } from '@/action/CommentAction';

const action = () => {
  console.log('action에 넣을 함수');
};

const CommentPage = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comment);
  useEffect(() => {
    dispatch({
      type: LOAD_COMMENTS_REQUEST,
      feedNo: 1,
    });
  }, []);

  // input값 받는 함수
  const [text, setText] = useState('');
  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Styled.CommentPageLayout>
      <Styled.WriteArea>
        <UserImage userId={1} />
        <Styled.Input placeholder="댓글 달기..." value={text} onChange={inputValue} />
        <Styled.Button children={<SendIcon />} type="submit" onClick={action} />
      </Styled.WriteArea>
      <React.Fragment>
        {comments.map((comment) => (
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                {/* 유저 이미지 */}
                <UserImage userId={1} />
              </ListItemAvatar>
              <ListItemText
                // 유저 아이디 부분
                primary="dobby"
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
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))}
      </React.Fragment>
    </Styled.CommentPageLayout>
  );
};

export default CommentPage;
