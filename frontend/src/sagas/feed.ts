import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { apiInstance, authInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';
import {
  CREATE_FEED_REQUEST,
  CREATE_FEED_SUCCESS,
  CREATE_FEED_FAILURE,
  LOAD_FEED_REQUEST,
  LOAD_FEED_SUCCESS,
  LOAD_FEED_FAILURE,
  UPDATE_FEED_REQUEST,
  UPDATE_FEED_SUCCESS,
  UPDATE_FEED_FAILURE,
  DELETE_FEED_REQUEST,
  DELETE_FEED_SUCCESS,
  DELETE_FEED_FAILURE,
} from '@/action/feedAction';
import { FeedType } from '@/types/feed';

const api = apiInstance();
const authApi = authInstance();

//CREATE//

function* createFeed(action: any) {
  try {
    const result: Promise<AxiosResponse<FeedType>> = yield call(createFeedAPI, action);
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

//READ//

function* loadFeed(action: any) {
  try {
    const result: Promise<AxiosResponse<FeedType>> = yield call(loadFeedAPI, action.feedNo);
    yield put({
      type: LOAD_FEED_SUCCESS,
      data: result.data.content,
    });
  } catch (err: any) {
    yield put({
      type: LOAD_FEED_FAILURE,
      error: err.name,
    });
  }
}

function loadFeedAPI(feedNo: number): Promise<AxiosResponse<FeedType>> {
  return api.get(`/feed/details/${feedNo}`);
}

//UPDATE//

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

//DELETE//

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

//TAKELATEST //

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
