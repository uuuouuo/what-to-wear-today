import React from 'react';
import Link from 'next/link';

import Styled from './FooterNavbar.styled';

const FooterBar = () => {
  return (
    <Styled.FooterNavbar>
      {/* 홈 */}
      <Link href={'/'}>홈</Link>
      {/* 상세 검색 */}
      <Link href={'/'}>검색</Link>
      {/* 게시글 작성 */}
      <Link href={'/'}>게시글 작성</Link>
      {/* 좋아요피드 */}
      <Link href={'/'}>좋아요피드</Link>
      {/* 마이페이지 */}
      <Link href={'/'}>마이페이지</Link>
    </Styled.FooterNavbar>
  );
};

export default FooterBar;
