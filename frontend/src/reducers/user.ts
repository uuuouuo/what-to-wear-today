import {
  KAKAO_LOGIN_REQUEST,
  KAKAO_LOGIN_SUCCESS,
  KAKAO_LOGIN_FAILURE,
  CREATE_USER_PROFILE,
  CREATE_USER_INTEREST,
  CREATE_USER_TYPE,
  CREATE_KAKAO_USER_REQUEST,
  CREATE_KAKAO_USER_SUCCESS,
  CREATE_KAKAO_USER_FAILURE,
} from '@/action/userAction';
import { StateType } from '@/types/user';

// type 설정 필요
export const initialState: StateType = {
  newUser: null,
  isMember: false,
  myInfo: null,
  kakaoLoginLoading: false,
  kakaoLoginDone: false,
  kakaoLoginError: null,
  kakaoSignupLoading: false,
  kakaoSignupDone: false,
  kakaoSignupError: null,
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
      console.log(action.data);
      return {
        ...state,
        kakaoLoginLoading: false,
        isMember: action.data.isMember,
        kakaoLoginDone: true,
      };

    case KAKAO_LOGIN_FAILURE:
      return {
        ...state,
        kakaoLoginLoading: false,
        kakaoLoginError: action.error,
      };

    case CREATE_USER_PROFILE:
      return {
        ...state,
        newUser: {
          imageName: action.profile,
          nickname: action.nickname,
        },
      };

    case CREATE_USER_INTEREST:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          interestNos: action.interestNos,
        },
      };

    case CREATE_USER_TYPE:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          typeNos: action.typeNos,
        },
      };

    case CREATE_KAKAO_USER_REQUEST:
      return {
        ...state,
        kakaoSignupLoading: true,
        kakaoSignupError: null,
        kakaoSignupDone: false,
      };

    case CREATE_KAKAO_USER_SUCCESS:
      return {
        ...state,
        kakaoSignupLoading: false,
        kakaoSignupDone: true,
      };

    case CREATE_KAKAO_USER_FAILURE:
      return {
        ...state,
        kakaoSignupLoading: false,
        kakaoSignupError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
