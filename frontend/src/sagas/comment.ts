import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { apiInstance, authInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';

import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
  COMMENT_CREATE,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAILURE,
} from 'action/commentAction';

import { CommentType } from '@/types/comment';

const api = apiInstance();
const authApi = authInstance();

function loadCommentsAPI(feedNo: number): Promise<AxiosResponse<CommentType[]>> {
  return api.get(`/comment/${feedNo}`);
}

function createCommentsAPI(action: any): Promise<AxiosResponse<CommentType[]>> {
  return authApi.post(`/comment/${action.feedNo}`, action.request);
}

function* loadComments(action: any) {
  try {
    const result: Promise<AxiosResponse<CommentType[]>> = yield call(
      loadCommentsAPI,
      action.feedNo,
    );
    console.log(result);
    yield put({
      type: LOAD_COMMENTS_SUCCESS,
      data: result.data,
    });
  } catch (err: any) {
    yield put({
      type: LOAD_COMMENTS_FAILURE,
      error: err.response,
    });
  }
}

function* createComment(action: any) {
  try {
    const result: Promise<AxiosResponse<CommentType[]>> = yield call(createCommentsAPI, action);

    console.log('결과값', result.data);
    // yield put({
    //   type: COMMENT_CREATE_SUCCESS,
    //   data: result.data,
    // });
  } catch (err: any) {
    yield put({
      type: COMMENT_CREATE_FAILURE,
      error: err.response,
    });
  }
}

function* watchLoadComments() {
  yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments);
}

function* watchCreateComment() {
  yield takeLatest(COMMENT_CREATE, createComment);
}

export default function* commentSaga() {
  yield all([fork(watchLoadComments), fork(watchCreateComment)]);
}
