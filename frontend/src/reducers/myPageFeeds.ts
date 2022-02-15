import {
  LOAD_MYPAGE_FEED_REQUEST,
  LOAD_MYPAGE_FEED_SUCCESS,
  LOAD_MYPAGE_FEED_FAILURE,
} from '@/action/myPageFeedAction';

export const initialState: any = {
  myFeeds: [],
  loadMyFeedsLoading: false,
  loadMyFeedsDone: false,
  loadMyFeedsError: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_MYPAGE_FEED_REQUEST:
      return {
        ...state,
        loadMyFeedsLoading: true,
        loadMyFeedsError: null,
        loadMyFeedsDone: false,
      };

    case LOAD_MYPAGE_FEED_SUCCESS:
      return {
        ...state,
        loadMyFeedsLoading: false,
        myFeeds: action.data,
        loadMyFeedsDone: true,
      };

    case LOAD_MYPAGE_FEED_FAILURE:
      return {
        ...state,
        loadMyFeedsLoading: false,
        loadMyFeedsError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
