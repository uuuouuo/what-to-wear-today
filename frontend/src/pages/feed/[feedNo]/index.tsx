import React from 'react';
import { NextPage } from 'next';
import FeedDetailTemplate from '@/template/feed/detail';
import wrapper from '@/store/configureStore';
import { loadFeedRequest } from '@/action/feedAction';
import { END } from 'redux-saga';
interface Props {
  feedNo: number;
}

const FeedDetail: NextPage<Props> = ({ feedNo }) => {
  return <FeedDetailTemplate feedNo={feedNo}></FeedDetailTemplate>;
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
