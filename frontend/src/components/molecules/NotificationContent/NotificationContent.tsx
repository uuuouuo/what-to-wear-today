import React, { useState, FunctionComponent } from 'react';
import { UserProfile } from '@/components/molecules';

import Styled from './NotificationContent.styled';
import Link from 'next/link';
import { NotificationType } from 'types/notification';

interface Props {
  className?: string;
  notification: NotificationType;
}

const NotificationContent: FunctionComponent<Props> = ({ className, notification }) => {
  return (
    <Styled.Notification>
      <UserProfile user={notification.sender} />
      <Styled.ContentContainer>
        {notification.comment ? (
          <div>
            <Link href={`/feed/${notification.comment.feedNo}`}>
              <Styled.UserName>{notification.sender.nickname}</Styled.UserName>
            </Link>
            님이 댓글을 작성했습니다.
            <Styled.Content>{notification.comment.content}</Styled.Content>
          </div>
        ) : notification.feed ? (
          <div>
            <Link href={`/feed/${notification.feed.no}`}>
              <Styled.UserName>{notification.sender.nickname}</Styled.UserName>
            </Link>
            님이 피드를 좋아합니다.
            <Styled.Content>{notification.feed.content}</Styled.Content>
          </div>
        ) : (
          <div>
            <Link href={`/user/${notification.sender.userId}`}>
              <Styled.UserName>{notification.sender.nickname}</Styled.UserName>
            </Link>
            님이 팔로우하기 시작했습니다.
          </div>
        )}
      </Styled.ContentContainer>
    </Styled.Notification>
  );
};

export default NotificationContent;
