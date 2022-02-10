import React from 'react';
import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import FeedDetailTemplate from '@/template/feed/detail';
interface Props {
  data: number | undefined;
}

const FeedDetail: NextPage<Props> = ({ data }) => {
  return <FeedDetailTemplate feedNo={data}></FeedDetailTemplate>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = context.query.feedNo;

  return { props: { data: data } };
};

export default FeedDetail;
