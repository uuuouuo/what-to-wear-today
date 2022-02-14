import React, { useEffect } from 'react';
import type { NextPage, NextPageContext } from 'next';
import FeedDetailTemplate from '@/template/feed/detail';
import wrapper from '@/store/configureStore';
import { loadFeedRequest } from '@/action/feedAction';
import { loadCommentsRequest, LOAD_COMMENTS_REQUEST } from '@/action/commentAction';
import { END } from 'redux-saga';
import { RootState } from 'reducers';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  feedNo: number;
}

interface Props {
  feedNo: number | undefined;
}

const FeedDetail: NextPage<Props> = ({ feedNo = 1 }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state: RootState) => state.comment);

  useEffect(() => {
    dispatch({
      type: LOAD_COMMENTS_REQUEST,
      feedNo,
    });
  }, []);

  const feed = {
    no: 1,
    user: {
      no: 'a123456789',
      userId: 'ssafy',
      nickName: '장다빈',
      profileImage: 'images/icon/blank_user.png',
    },
    content: '히히히ㅣㅎ #따뜻 #패딩 히히히힣',
    createdAt: new Date('2022-02-09'),
    photoDate: new Date('2020-02-09'),
    weather: '맑음',
    privateMode: false,
    images: [
      {
        no: 1,
        imgUrl: '/images/profileIMG/sample.jpg',
        feedNo: 1,
      },
      {
        no: 2,
        imgUrl:
          'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        feedNo: 1,
      },
    ],
  };
  return <FeedDetailTemplate feed={feed} comments={comments} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, params }) => {
      const data = Number(params.feedNo);
      store.dispatch(loadFeedRequest(data));
      store.dispatch(loadCommentsRequest(data));
      store.dispatch(END);
      await store.sagaTask.toPromise();

      return { props: { feedNo: data } };
    },
);

export default FeedDetail;
