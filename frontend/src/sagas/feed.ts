import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { apiInstance, authInstance } from '@/libs/axios';
import { FeedType } from '@/types/feed';
import { CommentType } from '@/types/comment';
import {
  loadFeedRequest,
  LOAD_FEED_REQUEST,
  LOAD_FEED_SUCCESS,
  LOAD_FEED_FAILURE,
  UPDATE_FEED_REQUEST,
  UPDATE_FEED_SUCCESS,
  UPDATE_FEED_FAILURE,
  DELETE_FEED_REQUEST,
  DELETE_FEED_SUCCESS,
  DELETE_FEED_FAILURE,
  CREATE_FEED_REQUEST,
  CREATE_FEED_SUCCESS,
  CREATE_FEED_FAILURE,
} from '@/action/feedAction';

import { LOAD_COMMENTS_SUCCESS } from '@/action/commentAction';
import { AxiosResponse } from 'axios';

const api = apiInstance();
const authApi = authInstance();

function* createFeed(action: any) {
  console.log('사가스 피드 생성 액션', action);
  try {
    const result: Promise<AxiosResponse<FeedType>> = yield call(createFeedAPI, action);
    console.log('답이온다', result);
    yield put({
      type: CREATE_FEED_SUCCESS,
      data: result,
    });
  } catch (err: any) {
    yield put({
      type: CREATE_FEED_FAILURE,
      error: err.name,
    });
  }
}

function createFeedAPI(action: any): Promise<AxiosResponse<FeedType>> {
  return authApi.post(`/feed`, action.request);
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

function* updateFeed(action: any) {
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

function updateFeedAPI(action: any): Promise<AxiosResponse<FeedType>> {
  return authApi.put(`/feed/${action.feedNo}`, action.request);
}

function* deleteFeed(action: any) {
  try {
    const result: Promise<AxiosResponse<FeedType>> = yield call(deleteFeedAPI, action);
    yield put({
      type: DELETE_FEED_SUCCESS,
      data: result,
    });
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
