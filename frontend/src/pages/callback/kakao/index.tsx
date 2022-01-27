import React, { useEffect } from 'react';
import type { NextPage, NextPageContext } from 'next';
import Styled from './styled';
import Router from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import { UserType } from 'types/user';

interface Props {
  code: string | string[] | undefined;
}

const Kakao: NextPage<Props> = ({ code }) => {
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
    else setTimeout(() => Router.push('/signup'), 3000);
  }, []);

  return (
    <Styled.Container>
      <CircularProgress
        disableShrink
        sx={{
          color: (theme) => '#fff',
          animationDuration: '550ms',
        }}
        size={40}
        thickness={4}
      />
    </Styled.Container>
  );
};

Kakao.getInitialProps = ({ query: { code } }: NextPageContext) => {
  return { code };
};

export default Kakao;
