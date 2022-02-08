import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { apiInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';

import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
} from '@/action/CommentAction';

const api = apiInstance();

function loadCommentsAPI(feedNo: number) {
  return api.get(`/comment/${feedNo}`);
}

function* loadComments(action) {
  try {
    const result = yield call(loadCommentsAPI, action.feedNo);
    yield put({
      type: LOAD_COMMENTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_COMMENTS_FAILURE,
      error: err.response,
    });
  }
}
function* watchLoadComments() {
  yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments);
}

export default function* commentSaga() {
  yield all([fork(watchLoadComments)]);
}
