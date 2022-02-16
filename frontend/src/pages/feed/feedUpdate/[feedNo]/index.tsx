import React from 'react';
import { NextPage } from 'next';
import FeedUpdateTemplate from 'template/feed/updateFeed';
import wrapper from '@/store/configureStore';
import { loadFeedRequest } from '@/action/feedAction';
import { END } from 'redux-saga';

const FeedWrite: NextPage = () => {
  return <FeedUpdateTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, params }) => {
      const data = Number(params.feedNo);
      store.dispatch(loadFeedRequest(data));
      store.dispatch(END);
      await store.sagaTask.toPromise();

      return { props: {} };
    },
);

export default FeedWrite;
