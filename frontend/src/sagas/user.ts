import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { apiInstance } from '@/libs/axios';
import { AxiosResponse } from 'axios';
import cookie from 'react-cookies';

import {
  KAKAO_LOGIN_REQUEST,
  KAKAO_LOGIN_SUCCESS,
  KAKAO_LOGIN_FAILURE,
  CREATE_KAKAO_USER_REQUEST,
  CREATE_KAKAO_USER_SUCCESS,
  CREATE_KAKAO_USER_FAILURE,
} from '@/action/userAction';
import { CreateUserType } from '@/types/user';

const api = apiInstance();

function kakaoLoginAPI(code: string) {
  return api.post(`/user/login/kakao`, code);
}

function* kakaoLogin(action: any) {
  try {
    const result = yield call(kakaoLoginAPI, action.code);
    // cookie.save('JWT', result.headers.jwt);
    yield put({
      type: KAKAO_LOGIN_SUCCESS,
      data: result.data,
    });
  } catch (err: any) {
    yield put({
      type: KAKAO_LOGIN_FAILURE,
      error: err,
    });
  }
}

function kakaoSignupAPI(request: CreateUserType) {
  const formData = new FormData();

  return api.post(`/user/kakao`, request);
}

function* kakaoSignup(action: any) {
  console.log('create~~~', action.request);
  try {
    console.log('create~~~', action.request);
    const result = yield call(kakaoSignupAPI, action.request);

    yield put({
      type: CREATE_KAKAO_USER_SUCCESS,
      data: result.data,
    });
  } catch (err: any) {
    yield put({
      type: CREATE_KAKAO_USER_FAILURE,
      error: err.response,
    });
  }
}

function* watchKakaoLogin() {
  yield takeLatest(KAKAO_LOGIN_REQUEST, kakaoLogin);
}

function* watchKakaoSignup() {
  yield takeLatest(CREATE_KAKAO_USER_REQUEST, kakaoSignup);
}

export default function* userSaga() {
  yield all([fork(watchKakaoLogin), fork(watchKakaoSignup)]);
}
