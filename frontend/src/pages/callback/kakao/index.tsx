import React, { useEffect, useCallback } from 'react';
import type { NextPage, NextPageContext } from 'next';
import Styled from './styled';
import Router from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import { Modal } from '@/components/molecules';
import { UserType } from 'types/user';
import { useDisplay } from 'hooks';

interface Props {
  code: string | string[] | undefined;
}

const Kakao: NextPage<Props> = ({ code }) => {
  const [open, , openModal, closeModal] = useDisplay(false);
  useEffect(() => {
    // const user: UserType = {
    //   _no: 'p123456789',
    //   id: '잠소면',
    //   password: undefined,
    //   platform: 1,
    //   age_range: undefined,
    //   gender: undefined,
    // };

    const user = undefined;

    if (user) setTimeout(() => Router.push('/'), 3000);
    else {
      openModal();
    }
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

Kakao.getInitialProps = ({ query: { code } }: NextPageContext) => {
  return { code };
};

export default Kakao;
