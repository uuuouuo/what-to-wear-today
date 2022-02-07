import React, { useState } from 'react';
import {
  SwipeableList,
  SwipeableListItem,
  TrailingActions,
  SwipeAction,
} from 'react-swipeable-list';
import { UserImage, Button } from '@/components/atoms';

import Styled from './NotificationContent.styled';

const NotificationContent = () => {
  const [datas, setData] = useState([
    { id: 0, name: '김' },
    { id: 1, name: '이' },
    { id: 2, name: '박' },
    { id: 3, name: '정' },
    { id: 4, name: '백' },
    { id: 5, name: '주' },
  ]);

  const follow = () => {
    console.log('follow!');
  };

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
                  <div>~~님이 ~~게시글에 댓글을 작성했습니다.</div>
                  <div>안녕 안녕 안녕하세요 안녕안녕 안녕하세요 ...</div>
                </Styled.ContentContainer>
                <Button onClick={follow} children="follow" />
              </Styled.Notification>
            </SwipeableListItem>
          );
        })}
      </SwipeableList>
    </Styled.NotificationContainer>
  );
};

export default NotificationContent;
