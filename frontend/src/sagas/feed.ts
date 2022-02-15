import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { apiInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';
import { LOAD_FEED_REQUEST, LOAD_FEED_SUCCESS, LOAD_FEED_FAILURE } from '@/action/feedAction';
import { FeedType } from '@/types/feed';
import { LOAD_COMMENTS_SUCCESS } from '@/action/commentAction';

const api = apiInstance();

function loadFeedAPI(feedNo: number): Promise<AxiosResponse<FeedType>> {
  return api.get(`/feed/details/${feedNo}`);
}

function* loadFeed(action: any) {
  try {
    const result: Promise<AxiosResponse<FeedType>> = yield call(loadFeedAPI, action.feedNo);
    yield put({
      type: LOAD_FEED_SUCCESS,
      data: result.data.feedRes,
    });
    yield put({
      type: LOAD_COMMENTS_SUCCESS,
      data: result.data.commentRes,
    });
  } catch (err: any) {
    yield put({
      type: LOAD_FEED_FAILURE,
      error: err.name,
    });
  }
}

function* watchLoadFeed() {
  yield takeLatest(LOAD_FEED_REQUEST, loadFeed);
}

export default function* feedSaga() {
  yield all([fork(watchLoadFeed)]);
}
