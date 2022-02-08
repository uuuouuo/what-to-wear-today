import React, { useState, useEffect } from 'react';
import Styled from './CommentPage.styled';
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

  const [text, setText] = useState('');
  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Styled.CommentPageLayout>
      {/* 댓글 입력 영역 */}
      <Styled.WriteArea>
        <UserImage userId={1} />
        <Styled.Input placeholder="댓글 달기..." value={text} onChange={inputValue} />
        <Styled.Button children={<SendIcon />} type="submit" onClick={action} />
      </Styled.WriteArea>
      {/* 댓글리스트 영역 */}
      <div>
        {comments.map((comment) => (
          <>
            <UserImage userId={1} />
            <div>이름:{comment.userNo}</div>
            <div>댓글내용:{comment.content}</div>
            <div>날짜시각:{comment.createAt}</div>
            {/* 슬라이드로 구현해볼까? */}
            <div>본인에게만 보이는 수정 삭제 아이콘</div>
          </>
        ))}
      </div>
    </Styled.CommentPageLayout>
  );
};

export default CommentPage;
