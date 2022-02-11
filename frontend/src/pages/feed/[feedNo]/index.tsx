import React from 'react';
import { NextPage } from 'next';
import FeedDetailTemplate from '@/template/feed/detail';

interface Props {
  feedNo: string | string[] | undefined;
}

const FeedDetail: NextPage<Props> = ({ feedNo }) => {
  const feed = {};
  return <FeedDetailTemplate feed={feed} />;
};

FeedDetail.getInitialProps = ({ params: { feedNo } }: NextPageContext) => {
  return { feedNo };
};

export default FeedDetail;
