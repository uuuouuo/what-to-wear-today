import React from 'react';
import Styled from './styled';
import FooterBar from '@/components/FooterNavbar/FooterNavbar';
import type { NextPage } from 'next';

import Header from '@/components/Header/Header';
import NotificationContent from '@/components/NotificationContent/NotificationContent';

///////////////////////////

const Notification: NextPage = () => {
  return (
    <Styled.NotificationLayout>
      <Header leftSide="pointer" name="알림" />
      <NotificationContent />
      <FooterBar />
    </Styled.NotificationLayout>
  );
};

export default Notification;
