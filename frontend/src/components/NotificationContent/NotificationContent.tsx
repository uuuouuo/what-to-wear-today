import React, { useState } from 'react';
import {
  SwipeableList,
  SwipeableListItem,
  TrailingActions,
  SwipeAction,
} from 'react-swipeable-list';
import { UserImage } from '@/components/atoms';

import Styled from './NotificationContent.styled';
import Link from 'next/link';

const NotificationContent = () => {
  const [datas, setData] = useState([
    { id: 0, name: '김' },
    { id: 1, name: '이' },
    { id: 2, name: '박' },
    { id: 3, name: '정' },
    { id: 4, name: '백' },
    { id: 5, name: '주' },
  ]);

  const removeItem = (id: number) => {
    setData(datas.filter((value, index) => value.id !== id));
  };

  const trailingActions = (id: number) => (
    <TrailingActions>
      <SwipeAction children={''} destructive={false} onClick={() => removeItem(id)} />
    </TrailingActions>
  );

  return (
    <Styled.NotificationContainer>
      <SwipeableList>
        {datas.map((notifi, idx) => {
          return (
            <SwipeableListItem
              key={notifi.id}
              trailingActions={trailingActions(notifi.id)}
              fullSwipe={true}
            >
              <Styled.Notification key={idx}>
                <Styled.UserImageContainer>
                  <UserImage userId={1} />
                </Styled.UserImageContainer>
                <Styled.ContentContainer>
                  <div>
                    <Link href={`/feed/${notifi.id}`}>
                      <Styled.UserName>{notifi.name}</Styled.UserName>
                    </Link>
                    님이 ~~게시글에 댓글을 작성했습니다.
                  </div>
                  <div>안녕 안녕 안녕하세요 안녕안녕 안녕하세요 ...</div>
                </Styled.ContentContainer>
              </Styled.Notification>
            </SwipeableListItem>
          );
        })}
      </SwipeableList>
    </Styled.NotificationContainer>
  );
};

export default NotificationContent;
