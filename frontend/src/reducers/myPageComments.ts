import {
  LOAD_MYPAGE_COMMENT_REQUEST,
  LOAD_MYPAGE_COMMENT_SUCCESS,
  LOAD_MYPAGE_COMMENT_FAILURE,
} from '@/action/myPageCommentAction';

export const initialState: any = {
  myComments: [],
  loadMyCommentsLoading: false,
  loadMyCommentsDone: false,
  loadMyCommentsError: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_MYPAGE_COMMENT_REQUEST:
      return {
        ...state,
        loadMyCommentsLoading: true,
        loadMyCommentsError: null,
        loadMyCommentsDone: false,
      };

    case LOAD_MYPAGE_COMMENT_SUCCESS:
      return {
        ...state,
        loadMyCommentsLoading: false,
        myComments: action.data,
        loadMyCommentsDone: true,
      };

    case LOAD_MYPAGE_COMMENT_FAILURE:
      return {
        ...state,
        loadMyCommentsLoading: false,
        loadMyCommentsError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
