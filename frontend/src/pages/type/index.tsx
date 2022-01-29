import React, { useCallback } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
import Styled from './styled';

import { Text } from '@/components/atoms';
import { Title } from '@/components/molecules';
import { useCheck } from '@/hooks';

const Login: NextPage = () => {
  const skipFunction = useCallback(() => {
    Router.push('/');
  }, []);

  const nextFunction = useCallback(() => {
    Router.push('/');
  }, []);
  return (
    <Styled.MainContainer>
      <Title value="TYPE" />
      <Styled.ButtonContainer>
        <Styled.Button className="left" onClick={skipFunction}>
          <Text value="SKIP" />
        </Styled.Button>
        <Styled.Button className="right" onClick={nextFunction}>
          <Text value="NEXT" />
        </Styled.Button>
      </Styled.ButtonContainer>
    </Styled.MainContainer>
  );
};

export default Login;
