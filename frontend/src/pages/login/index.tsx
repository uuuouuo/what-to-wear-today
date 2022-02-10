import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Styled from './styled';

import { FooterContainer } from '@/components/atoms';

const Login: NextPage = () => {
  return (
    <>
      <Styled.MainContainer>
        <Styled.LogoContainer level={1}>
          <Image src={'/images/icon/Logo.png'} width={130} height={130} alt="Logo" />
          <Styled.Title value="오늘 뭐 입지?" size="2.5rem" color="#fff" />
        </Styled.LogoContainer>
        <FooterContainer>
          <Styled.KakaoButton />
        </FooterContainer>
      </Styled.MainContainer>
    </>
  );
};

export default Login;
