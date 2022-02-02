import React from 'react';
import FooterBar from '../../components/FooterNavbar/FooterNavbar';

import Header from 'components/Header/Header';

const Notification = () => {
  return (
    <>
      <Header leftSide="pointer" name="알림" />

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
