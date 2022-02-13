import React, { useState } from 'react';
import Styled from './CommentPage.styled';
import type { RootState } from '@/reducers';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import { UserProfile } from '@/components/molecules';
import { useDispatch, useSelector } from 'react-redux';
import { CommentType } from '@/types/comment';
import { UserProfileType } from '@/types/user';

const user: UserProfileType = {
  no: 'a123456789',
  userId: 'ssafy',
  nickName: '장다비',
  profileImage: './images/icon/blank_user.png',
};

const action = () => {
  console.log('action에 넣을 함수');
};

const CommentPage = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state: RootState) => state.comment);

  // input값 받는 함수
  const [text, setText] = useState('');
  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Styled.CommentPageLayout>
      <Styled.WriteArea>
        <UserProfile user={user} />
        <Styled.Input placeholder="댓글 달기..." value={text} onChange={inputValue} />
        <Styled.Button type="submit" onClick={action}>
          <SendIcon />
        </Styled.Button>
      </Styled.WriteArea>
      <>
        hello
        {/* {comments.map((comment: CommentType) => (
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                유저 이미지
                <UserImage user={user} />
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
                    {'d'}
                  </Typography>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        ))} */}
      </>
    </Styled.CommentPageLayout>
  );
};

export default CommentPage;
