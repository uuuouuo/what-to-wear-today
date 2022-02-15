import { LOAD_FEEDS_REQUEST, LOAD_FEEDS_SUCCESS, LOAD_FEEDS_FAILURE } from 'action/feedsAction';
import { StateType } from '@/types/feeds';

export const initialState: StateType = {
  feeds: [],
  loadFeedsLoading: false,
  loadFeedsDone: false,
  loadFeedsError: null,
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_FEEDS_REQUEST:
      return {
        ...state,
        loadFeedsLoading: true,
        loadFeedsError: null,
        loadFeedsDone: false,
      };

    case LOAD_FEEDS_SUCCESS:
      return {
        ...state,
        loadFeedsLoading: false,
        feeds: [...state.feeds, ...action.data.content],
        loadFeedsDone: true,
      };

    case LOAD_FEEDS_FAILURE:
      return {
        ...state,
        loadFeedsLoading: false,
        loadFeedsError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
