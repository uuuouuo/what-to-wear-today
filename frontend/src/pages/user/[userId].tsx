import React from 'react';
import { NextPage } from 'next';
import UserTemplate from '@/template/user';
import wrapper from '@/store/configureStore';
import { END } from 'redux-saga';
import { loadMypageFeedsRequest } from '@/action/myPageFeedAction';
import { loadMypageCommentsRequest } from '@/action/myPageCommentAction';

interface Props {
  userId: string;
}

const User: NextPage<Props> = ({ userId }) => {
  return <UserTemplate userId={userId} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, params }) => {
      const data = params.userId;

      if (typeof data !== 'string') return { props: { userId: null } };

      store.dispatch(loadMypageFeedsRequest(data));
      store.dispatch(loadMypageCommentsRequest(data));
      store.dispatch(END);
      await store.sagaTask.toPromise();
      return { props: { userId: data } };
    },
);

export default User;
