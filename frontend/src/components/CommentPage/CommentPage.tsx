import React from 'react';
// import Styled from './CommentPage.styled';

import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';

const action = () => {
  console.log('action에 넣을 함수');
};

const CommentPage = () => {
  return (
    <>
      {/* 댓글 입력 영역 */}
      <div>
        <div>프로필사진영역</div>
        <Input placeholder="댓글 달기..." value="" onChange={action} />
        <Button children="Reply" type="submit" onClick={action} />
      </div>
      {/* 댓글리스트 영역 */}
      <div>
        <div>프로필사진영역</div>
        <div>이름</div>
        <div>댓글내용</div>
        <div>날짜시각</div>
        <div>본인에게만 보이는 수정 삭제 아이콘</div>
      </div>
    </>
  );
};

export default CommentPage;
