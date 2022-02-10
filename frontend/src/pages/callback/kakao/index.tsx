import React from 'react';
import type { NextPage, NextPageContext } from 'next';
import KakaoTemplate from '@/template/callback/kakao';

interface Props {
  code: string | string[] | undefined;
}

const Kakao: NextPage<Props> = ({ code }) => {
  return <KakaoTemplate code={code}></KakaoTemplate>;
};

Kakao.getInitialProps = ({ query: { code } }: NextPageContext) => {
  return { code };
};

export default Kakao;
