import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { apiInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';

import { KAKAO_LOGIN_REQUEST, KAKAO_LOGIN_SUCCESS, KAKAO_LOGIN_FAILURE } from '@/action/userAction';

const api = apiInstance();

// todo: backend 연동 필요
function kakaoLoginAPI(code: string) {
  return api.post(`/user/kakao/${code}`);
}

function* kakaoLogin(action: any) {
  try {
    // const result = yield call(kakaoLoginAPI, action.code);

    // yield put({
    //   type: KAKAO_LOGIN_SUCCESS,
    //   data: result.data,
    // });

    yield put({
      type: KAKAO_LOGIN_FAILURE,
      error: 'error',
    });
  } catch (err: any) {
    yield put({
      type: KAKAO_LOGIN_FAILURE,
      error: err.response,
    });
  }
}
function* watchkakaoLogin() {
  yield takeLatest(KAKAO_LOGIN_REQUEST, kakaoLogin);
}

export default function* userSaga() {
  yield all([fork(watchkakaoLogin)]);
}
