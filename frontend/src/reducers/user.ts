import { KAKAO_LOGIN_REQUEST, KAKAO_LOGIN_SUCCESS, KAKAO_LOGIN_FAILURE } from '@/action/userAction';

// type 설정 필요
export const initialState = {
  myInfo: null,
  kakaoLoginLoading: false,
  kakaoLoginDone: false,
  kakaoLoginError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case KAKAO_LOGIN_REQUEST:
      return {
        ...state,
        kakaoLoginLoading: true,
        kakaoLoginError: null,
        kakaoLoginDone: false,
      };

    case KAKAO_LOGIN_SUCCESS:
      return {
        ...state,
        kakaoLoginLoading: false,
        userInfo: action.data,
        kakaoLoginDone: true,
      };

    case KAKAO_LOGIN_FAILURE:
      return {
        ...state,
        kakaoLoginLoading: false,
        kakaoLoginError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
