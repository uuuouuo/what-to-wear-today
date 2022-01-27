import React from 'react';
import FooterBar from 'components/FooterNavbar';

const Notification = () => {
  return (
    <>
      <header>
        <span>뒤로가기 버튼</span>
        <span>알림 목록</span>
      </header>

      <article>
        <div>유저 사진</div>
        <div>알림 내용</div>
        <div>팔로우 버튼</div>
      </article>
      <FooterBar />
    </>
  );
};

export default Notification;
