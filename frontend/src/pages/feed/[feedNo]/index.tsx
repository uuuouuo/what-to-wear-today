import React, { useEffect } from 'react';
import type { NextPage, NextPageContext } from 'next';
import FeedDetailTemplate from '@/template/feed/detail';
import wrapper from '@/store/configureStore';
import { loadFeedRequest } from '@/action/feedAction';
import { END } from 'redux-saga';

const FeedDetail: NextPage<Props> = () => {
  return <FeedDetailTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, params }) => {
      const data = Number(params.feedNo);
      store.dispatch(loadFeedRequest(data));
      store.dispatch(END);
      await store.sagaTask.toPromise();

      return { props: { feedNo: data } };
    },
);

export default FeedDetail;
