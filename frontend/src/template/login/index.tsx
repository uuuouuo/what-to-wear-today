import React from 'react';
import type { NextPage } from 'next';
import { Image, FooterContainer } from '@/components/atoms';
import Styled from './styled';

const Login: NextPage = () => {
  return (
    <Styled.MainContainer>
      <Styled.Heading level={1}>
        <Image src="/images/icon/Logo.png" width={130} height={130} alt="Logo" />
        <Styled.Title value="오늘 뭐 입지?" size="2.5rem" color="#fff" />
      </Styled.Heading>
      <FooterContainer>
        <Styled.KakaoButton />
      </FooterContainer>
    </Styled.MainContainer>
  );
};

export default Login;
