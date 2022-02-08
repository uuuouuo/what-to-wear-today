import React, { useCallback } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
import Styled from './styled';
import { Heading, Text, FooterContainer } from '@/components/atoms';
import { Title, SuccessBadge } from '@/components/molecules';

const Success: NextPage = () => {
  const nextFunction = useCallback(() => {
    Router.push('/');
  }, []);

  return (
    <Styled.MainContainer>
      <Title value="SIGN UP" />
      <SuccessBadge />

      <FooterContainer>
        <Styled.Button bgColor="#fff" onClick={nextFunction}>
          <Text value="LOGIN" />
        </Styled.Button>
      </FooterContainer>
    </Styled.MainContainer>
  );
};

export default Success;
