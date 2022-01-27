import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Styled from './styled';
import KakaoButton from '@/components/molecules/KakaoButton/KakaoButton';

const Login: NextPage = () => {
  return (
    <Styled.Container>
      <Styled.LogoContainer>
        <Image src={'/images/Logo.png'} width={130} height={130} alt="Logo" />
        <Styled.Title level={1} value="오늘 뭐 입지?" color="#fff" />
      </Styled.LogoContainer>
      <Styled.ButtonContainer>
        <KakaoButton />
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

export default Login;
