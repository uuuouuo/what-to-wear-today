export const KAKAO_LOGIN_REQUEST = 'KAKAO_LOGIN_REQUEST';
export const KAKAO_LOGIN_SUCCESS = 'KAKAO_LOGIN_SUCCESS';
export const KAKAO_LOGIN_FAILURE = 'KAKAO_LOGIN_FAILURE';
export const CREATE_USER_PROFILE = 'CREATE_USER_PROFILE';
export const CREATE_USER_INTEREST = 'CREATE_USER_INTEREST';
export const CREATE_USER_TYPE = 'CREATE_USER_TYPE';
export const CREATE_KAKAO_USER_REQUEST = 'CREATE_KAKAO_USER_REQUEST';
export const CREATE_KAKAO_USER_SUCCESS = 'CREATE_KAKAO_USER_SUCCESS';
export const CREATE_KAKAO_USER_FAILURE = 'CREATE_KAKAO_USER_FAILURE';

export const kakaoLoginRequest = (code: string | string[]) => ({
  type: KAKAO_LOGIN_REQUEST,
  code,
});

export const kakaoLoginSuccess = (isMember) => ({
  type: KAKAO_LOGIN_SUCCESS,
  isMember,
});

export const kakaoLoginFailure = () => ({
  type: KAKAO_LOGIN_FAILURE,
});

export const createUserProfile = (profile, nickname) => ({
  type: CREATE_USER_PROFILE,
  profile,
  nickname,
});

export const createUserInterest = (interestNos) => ({
  type: CREATE_USER_INTEREST,
  interestNos,
});

export const createUserType = (typeNos) => ({
  type: CREATE_USER_TYPE,
  typeNos,
});

export const createKakaoUserRequest = (request) => ({
  type: CREATE_KAKAO_USER_REQUEST,
  request,
});

export const createKakaoUserSuccess = () => ({
  type: KAKAO_LOGIN_SUCCESS,
});

export const createKakaoUserFailure = () => ({
  type: CREATE_KAKAO_USER_FAILURE,
});
