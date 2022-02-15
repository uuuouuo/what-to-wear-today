import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { apiInstance, authInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';

import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
} from '@/action/CommentAction';

import { CommentType } from '@/types/comment';

const api = apiInstance();
const authApi = authInstance();

//CREATE//

function* createComment(action: any) {
  try {
    const result: Promise<AxiosResponse<CommentType[]>> = yield call(createCommentsAPI, action);
    console.log('sagaa!!!', result);
    yield put({
      type: CREATE_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err: any) {
    yield put({
      type: CREATE_COMMENT_FAILURE,
      error: err.response,
    });
  }
}

function createCommentsAPI(action: any): Promise<AxiosResponse<CommentType[]>> {
  return authApi.post(`/comment/${action.feedNo}`, action.request);
}

//READ//

function* loadComments(action: any) {
  try {
    const result: Promise<AxiosResponse<CommentType[]>> = yield call(
      loadCommentsAPI,
      action.feedNo,
    );

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

function loadCommentsAPI(feedNo: number): Promise<AxiosResponse<CommentType[]>> {
  return api.get(`/comment/${feedNo}`);
}

//UPDATE//

function* updateComment(action: any) {
  try {
    const result: Promise<AxiosResponse<CommentType[]>> = yield call(updateCommentsAPI, action);
    yield put({
      type: UPDATE_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err: any) {
    yield put({
      type: UPDATE_COMMENT_FAILURE,
      error: err.response,
    });
  }
}

function updateCommentsAPI(action: any): Promise<AxiosResponse<CommentType[]>> {
  return authApi.put(`/comment/${action.commentNo}`, action.request);
}

//DELETE//

function* deleteComment(action: any) {
  try {
    const result: Promise<AxiosResponse<CommentType[]>> = yield call(
      deleteCommentsAPI,
      action.commentNo,
    );
    yield put({
      type: DELETE_COMMENT_SUCCESS,
      data: action.commentNo,
    });
  } catch (err: any) {
    yield put({
      type: DELETE_COMMENT_FAILURE,
      error: err.response,
    });
  }
}

function deleteCommentsAPI(commentNo: number): Promise<AxiosResponse<CommentType[]>> {
  return authApi.delete(`/comment/${commentNo}`);
}

//TAKELATEST//

function* watchCreateComment() {
  yield takeLatest(CREATE_COMMENT_REQUEST, createComment);
}

function* watchLoadComments() {
  yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments);
}

function* watchUpdateComment() {
  yield takeLatest(UPDATE_COMMENT_REQUEST, updateComment);
}

function* watchDeleteComment() {
  yield takeLatest(DELETE_COMMENT_REQUEST, deleteComment);
}

export default function* commentSaga() {
  yield all([
    fork(watchCreateComment),
    fork(watchLoadComments),
    fork(watchUpdateComment),
    fork(watchDeleteComment),
  ]);
}
