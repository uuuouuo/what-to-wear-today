import React, { useEffect, useCallback } from 'react';
import type { NextPage } from 'next';
import Styled from './styled';
import Router from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import { Modal } from '@/components/molecules';
import { useDisplay } from 'hooks';
import { useSelector } from 'react-redux';
import type { RootState } from '@/reducers';

interface Props {
  code: string | string[] | undefined;
}

const KakaoTemplate: NextPage<Props> = ({ code }) => {
  const { isMember } = useSelector((state: RootState) => state.user);
  const [open, , openModal, closeModal] = useDisplay(false);
  useEffect(() => {
    if (isMember) Router.push('/');
    else openModal();
  }, []);

  const agreeFunction = useCallback(() => {
    closeModal();
    Router.push('/signup');
  }, []);

  const disagreeFunction = useCallback(() => {
    closeModal();
    Router.push('/login');
  }, []);

  return (
    <Styled.MainContainer>
      <CircularProgress
        disableShrink
        sx={{
          color: (theme) => '#fff',
          animationDuration: '550ms',
        }}
        size={40}
        thickness={4}
      />
      <Modal
        open={open}
        title="회원가입 필요(╬▔皿▔)╯"
        content="회원가입 할꺼냐능?"
        disagreeFunction={disagreeFunction}
        agreeFunction={agreeFunction}
      />
    </Styled.MainContainer>
  );
};

export default KakaoTemplate;
