import React from 'react';

// material UI 아이콘
import NotificationsIcon from '@mui/icons-material/Notifications';

// emotion 설정
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// nextjs Link 설정
import Link from 'next/link';

// style import
import Styled from './styled';

import Feed_regionFilter from '../../components/Feed_regionFilter/Feed_regionFilter';
import Feed_filter from '../../components/Feed_filter/Feed_filter';
import Feed_content from '../../components/Feed_content/Feed_content';
import FooterNavbar from '../../components/FooterNavbar/FooterNavbar';

const Feed = () => {
  const userId: number = 1;
  return (
    <Styled.FeedLayout>
      <Styled.FeedHeader>
        {/* 로고 */}
        <p>로고</p>
        {/* 이름 */}
        <Link href={{ pathname: `/UserInfo`, query: { userId: userId } }} as={`/UserInfo`}>
          <p>user.name</p>
        </Link>
        {/* 알림 */}
        <Link href={'/notification'}>
          <NotificationsIcon />
        </Link>
      </Styled.FeedHeader>

      <Styled.FeedNavbar>
        <Feed_regionFilter />
        <div>날씨정보</div>
      </Styled.FeedNavbar>

      <Styled.FeedFilter>
        <Feed_filter />
      </Styled.FeedFilter>

      <Styled.FeedContent>
        <Feed_content />
      </Styled.FeedContent>

      <FooterNavbar />
    </Styled.FeedLayout>
  );
};

export default Feed;
