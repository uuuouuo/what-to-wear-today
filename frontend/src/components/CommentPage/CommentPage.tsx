import React from 'react';
import Styled from './CommentPage.styled';

import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
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
        <Input placeholder="댓글 달기..." value="" onChange={action} />
        <Button children="Reply" type="submit" onClick={action} />
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
