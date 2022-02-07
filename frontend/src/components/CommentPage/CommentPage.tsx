import React from 'react';
import Styled from './CommentPage.styled';
import SendIcon from '@mui/icons-material/Send';
import { UserImage } from '@/components/atoms/';

const action = () => {
  console.log('action에 넣을 함수');
};

const CommentPage = () => {
  return (
    <Styled.CommentPageLayout>
      {/* 댓글 입력 영역 */}
      <Styled.WriteArea>
        <UserImage userId={1} />
        <Styled.Input placeholder="댓글 달기..." value="" onChange={action} />
        <Styled.Button children={<SendIcon />} type="submit" onClick={action} />
      </Styled.WriteArea>
      {/* 댓글리스트 영역 */}
      <div>
        <UserImage userId={1} />
        <div>이름</div>
        <div>댓글내용</div>
        <div>날짜시각</div>
        {/* 슬라이드로 구현해볼까? */}
        <div>본인에게만 보이는 수정 삭제 아이콘</div>
      </div>
    </Styled.CommentPageLayout>
  );
};

export default CommentPage;
