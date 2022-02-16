import React from 'react';
import { NextPage } from 'next';
import HomeTemplate from '@/template';
import wrapper from '@/store/configureStore';
import { loadFeedsRequest } from '@/action/feedsAction';
import { END } from 'redux-saga';

const Home: NextPage = () => {
  return <HomeTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, params }) => {
      const data = 1; // region_no 값
      store.dispatch(loadFeedsRequest(data));
      store.dispatch(END);
      await store.sagaTask.toPromise();

      return { props: {} };
    },
);

export default Home;
