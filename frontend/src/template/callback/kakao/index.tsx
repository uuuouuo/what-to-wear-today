import React, { useEffect, useCallback } from 'react';
import type { NextPage, NextPageContext } from 'next';
import Styled from './styled';
import Router from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import { Modal } from '@/components/molecules';
import { UserType } from 'types/user';
import { useDisplay } from 'hooks';
import { useSelector } from 'react-redux';
import type { RootState } from '@/reducers';

interface Props {
  code: string | string[] | undefined;
}

const KakaoTemplate: NextPage<Props> = ({ code }) => {
  const { myInfo } = useSelector((state: RootState) => state.user);
  const [open, , openModal, closeModal] = useDisplay(false);
  useEffect(() => {
    if (myInfo) setTimeout(() => Router.push('/'), 3000);
    else openModal();
  }, []);

  const agreeFunction = useCallback(() => {
    closeModal();
    setTimeout(() => Router.push('/signup'), 3000);
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
        content="회원가입 ㄱ?"
        disagreeFunction={disagreeFunction}
        agreeFunction={agreeFunction}
      />
    </Styled.MainContainer>
  );
};

export default KakaoTemplate;
