import { all, fork, put, takeLatest, call, getContext } from 'redux-saga/effects';
import { apiInstance, authInstance, fileInstance } from '@/libs/axios';
import { FeedType } from '@/types/feed';
import { CommentType } from '@/types/comment';
import {
  loadFeedRequest,
  LOAD_FEED_REQUEST,
  LOAD_FEED_SUCCESS,
  LOAD_FEED_FAILURE,
  updateFeedRequest,
  UPDATE_FEED_REQUEST,
  UPDATE_FEED_SUCCESS,
  UPDATE_FEED_FAILURE,
  deleteFeedRequest,
  DELETE_FEED_REQUEST,
  DELETE_FEED_SUCCESS,
  DELETE_FEED_FAILURE,
  createFeedRequest,
  CREATE_FEED_REQUEST,
  CREATE_FEED_SUCCESS,
  CREATE_FEED_FAILURE,
} from '@/action/feedAction';

import { LOAD_COMMENTS_SUCCESS } from '@/action/commentAction';
import { AxiosResponse } from 'axios';

const api = apiInstance();
const authApi = authInstance();
const fileApi = fileInstance();

function* createFeed(action: ReturnType<typeof createFeedRequest>) {
  console.log('사가스 피드 생성 액션', action);
  try {
    const result: Promise<AxiosResponse<FeedType>> = yield call(createFeedAPI, action);
    yield put({
      type: CREATE_FEED_SUCCESS,
      data: result,
    });
  } catch (err: any) {
    yield put({
      type: CREATE_FEED_FAILURE,
      error: err,
    });
  }
}

function createFeedAPI(
  action: ReturnType<typeof createFeedRequest>,
): Promise<AxiosResponse<FeedType>> {
  let images = new FormData();
  action.images.forEach((file) => images.append('images', file));

  images.append('images', action.images);
  return fileApi.post(`/feed`, { request: action.request });
}

function* loadFeed(action: ReturnType<typeof loadFeedRequest>) {
  try {
    const result = yield call(loadFeedAPI, action.feedNo);
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

function loadFeedAPI(
  feedNo: number,
): Promise<AxiosResponse<{ feedRes: FeedType; commentRes: CommentType[] }>> {
  return api.get(`/feed/details/${feedNo}`);
}

function* updateFeed(action: ReturnType<typeof updateFeedRequest>) {
  try {
    const result: Promise<AxiosResponse<FeedType>> = yield call(updateFeedAPI, action);
    yield put({
      type: UPDATE_FEED_SUCCESS,
      data: result,
    });
  } catch (err: any) {
    yield put({
      type: UPDATE_FEED_FAILURE,
      error: err.response,
    });
  }
}

function updateFeedAPI(
  action: ReturnType<typeof updateFeedRequest>,
): Promise<AxiosResponse<FeedType>> {
  return authApi.put(`/feed/${action}`, action);
}

function* deleteFeed(action: ReturnType<typeof deleteFeedRequest>) {
  try {
    const result: Promise<AxiosResponse<FeedType>> = yield call(deleteFeedAPI, action);
    yield put({
      type: DELETE_FEED_SUCCESS,
      data: result,
    });
    const history = yield getContext('history');
    history.push('/');
  } catch (err: any) {
    yield put({
      type: DELETE_FEED_FAILURE,
      error: err.response,
    });
  }
}

function deleteFeedAPI(action: any): Promise<AxiosResponse<FeedType>> {
  return authApi.delete(`/feed/${action.feedNo}`);
}

function* watchCreateFeed() {
  yield takeLatest(CREATE_FEED_REQUEST, createFeed);
}
function* watchLoadFeed() {
  yield takeLatest(LOAD_FEED_REQUEST, loadFeed);
}
function* watchUpdateFeed() {
  yield takeLatest(UPDATE_FEED_REQUEST, updateFeed);
}
function* watchDeleteFeed() {
  yield takeLatest(DELETE_FEED_REQUEST, deleteFeed);
}

export default function* feedSaga() {
  yield all([
    fork(watchCreateFeed),
    fork(watchLoadFeed),
    fork(watchUpdateFeed),
    fork(watchDeleteFeed),
  ]);
}
