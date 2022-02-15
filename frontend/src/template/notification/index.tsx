import React, { useState } from 'react';
import Styled from './styled';
import type { NextPage } from 'next';

import {
  SwipeableList,
  SwipeableListItem,
  TrailingActions,
  SwipeAction,
} from 'react-swipeable-list';

import { Text } from '@/components/atoms';
import { Header, FooterNavbar } from '@/components/molecules';
import NotificationContent from 'components/molecules/NotificationContent/NotificationContent';
import { NotificationType } from 'types/notification';

import 'react-swipeable-list/dist/styles.css';

const data: NotificationType[] = [
  {
    no: 1,
    sender: {
      userId: 'ssafy',
      nickname: '장다빈',
      profileImage: 'images/icon/blank_user.png',
    },
  },
  {
    no: 2,
    sender: {
      userId: 'ssafy',
      nickname: '장다빈',
      profileImage: 'images/icon/blank_user.png',
    },
    comment: {
      no: 1,
      parent: -1,
      userId: 'ssafy',
      nickname: '장다비',
      profileImage: 'images/profileIMG/sample.jpg',
      content: 'h2h2dfgdfsgdsf gsasdfasdfg sgregfadsf',
      createdAt: new Date(),
      feedNo: 1,
    },
  },
  {
    no: 3,
    sender: {
      userId: 'ssafy',
      nickname: '장다빈',
      profileImage: 'images/icon/blank_user.png',
    },
    feed: {
      no: 1,
      userId: 'ssafy',
      nickname: '장다빈',
      profileImage: 'images/icon/blank_user.png',
      content: '히히히ㅣㅎ #따뜻 #패딩 히히히힣',
      createdAt: new Date(),
      photoDate: new Date(),
      weather: '맑음',
      privateMode: false,
      images: [
        '/images/profileIMG/sample.jpg',
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      ],
    },
  },
];

const NotificationTemplate: NextPage = () => {
  const [notifications, setNotifications] = useState(data);
  const removeItem = (no: number) => {
    setNotifications(
      notifications.filter((value: NotificationType, index: number) => value.no !== no),
    );
  };

  const trailingActions = (no: number) => (
    <TrailingActions>
      <SwipeAction destructive={false} onClick={() => removeItem(no)}>
        <Styled.Delete>
          <Text color="#fff" value="DELETE" />
        </Styled.Delete>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <Styled.NotificationLayout>
      <Header leftSide="pointer" rightSide="" name="NOTIFICATION" />
      <Styled.MainContent>
        <Styled.Container>
          <SwipeableList>
            {notifications.map((notification: NotificationType) => (
              <SwipeableListItem
                key={notification.no}
                trailingActions={trailingActions(notification.no)}
                fullSwipe
              >
                <NotificationContent key={notification.no} notification={notification} />
              </SwipeableListItem>
            ))}
          </SwipeableList>
        </Styled.Container>
      </Styled.MainContent>
      <FooterNavbar />
    </Styled.NotificationLayout>
  );
};

export default NotificationTemplate;
