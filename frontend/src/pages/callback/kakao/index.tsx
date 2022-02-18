import React from 'react';
import type { NextPage } from 'next';
import KakaoTemplate from '@/template/callback/kakao';
import wrapper from '@/store/configureStore';
import { kakaoLoginRequest } from '@/action/userAction';
import { END } from 'redux-saga';

interface Props {
  code: string | string[] | undefined;
}

const Kakao: NextPage<Props> = ({ code }) => {
  return <KakaoTemplate code={code} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query }) => {
      const { code } = query;
      store.dispatch(kakaoLoginRequest(code));
      store.dispatch(END);
      await store.sagaTask.toPromise();
      return { props: { code } };
    },
);
export default Kakao;
