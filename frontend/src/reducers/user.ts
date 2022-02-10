import { KAKAO_LOGIN_REQUEST, KAKAO_LOGIN_SUCCESS, KAKAO_LOGIN_FAILURE } from '@/action/userAction';
import { StateType } from '@/types/user';

// type 설정 필요
export const initialState: StateType = {
  myInfo: null,
  kakaoLoginLoading: false,
  kakaoLoginDone: false,
  kakaoLoginError: null,
};

const reducer = (state = initialState, action: any) => {
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
