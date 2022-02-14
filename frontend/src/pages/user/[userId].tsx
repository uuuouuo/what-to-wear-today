import React from 'react';
import { NextPage } from 'next';
import UserTemplate from '@/template/user';
import wrapper from '@/store/configureStore';
import { END } from 'redux-saga';
import { loadMypageFeedsRequest } from 'action/MypageFeedAction';
import { loadMypageCOMMENTsRequest } from 'action/MypageCommentAction';

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
      store.dispatch(loadMypageFeedsRequest(data));
      store.dispatch(loadMypageCOMMENTsRequest(data));
      store.dispatch(END);
      await store.sagaTask.toPromise();
      return { props: { userId: data } };
    },
);

export default User;
