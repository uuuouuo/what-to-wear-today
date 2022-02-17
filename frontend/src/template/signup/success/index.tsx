import React, { useCallback, useEffect } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
import Styled from './styled';
import type { RootState } from '@/reducers';
import { Text, FooterContainer } from '@/components/atoms';
import { Title, SuccessBadge } from '@/components/molecules';
import { useDispatch, useSelector } from 'react-redux';
import { createKakaoUserRequest } from '@/action/userAction';

const SuccessTemplate: NextPage = () => {
  const dispatch = useDispatch();
  const { newUser } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    console.log(newUser);
    dispatch(createKakaoUserRequest(newUser));
  }, []);

  const nextFunction = useCallback(() => {
    Router.push('/');
  }, []);

  return (
    <Styled.MainContainer>
      <Title value="SIGN UP" />
      <SuccessBadge />

      <FooterContainer>
        <Styled.Button bgColor="#fff" onClick={nextFunction}>
          <Text value="MAIN" />
        </Styled.Button>
      </FooterContainer>
    </Styled.MainContainer>
  );
};

export default SuccessTemplate;
