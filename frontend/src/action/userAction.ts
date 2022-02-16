export const KAKAO_LOGIN_REQUEST = 'KAKAO_LOGIN_REQUEST';
export const KAKAO_LOGIN_SUCCESS = 'KAKAO_LOGIN_SUCCESS';
export const KAKAO_LOGIN_FAILURE = 'KAKAO_LOGIN_FAILURE';

export const kakaoLoginRequest = (code: string) => ({
  type: KAKAO_LOGIN_REQUEST,
  payload: code,
});

export const kakaoLoginSuccess = () => ({
  type: KAKAO_LOGIN_SUCCESS,
});

export const kakaoLoginFailure = () => ({
  type: KAKAO_LOGIN_FAILURE,
});
