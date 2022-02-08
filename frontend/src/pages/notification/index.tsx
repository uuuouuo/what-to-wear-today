import React from 'react';
import Styled from './styled';
import type { NextPage } from 'next';

import { Header, FooterNavbar } from '@/components/molecules';
import NotificationContent from '@/components/NotificationContent/NotificationContent';

const Notification: NextPage = () => {
  return (
    <Styled.NotificationLayout>
      <Header leftSide="pointer" name="알림" />
      <NotificationContent />
      <FooterNavbar />
    </Styled.NotificationLayout>
  );
};

export default Notification;
