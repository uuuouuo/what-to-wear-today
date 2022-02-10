import { LOAD_FEED_REQUEST, LOAD_FEED_SUCCESS, LOAD_FEED_FAILURE } from 'action/feedAction';
import { StateType } from '@/types/feed';

export const initialState: StateType = {
  feed: null,
  loadFeedLoading: false,
  loadFeedDone: false,
  loadFeedError: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_FEED_REQUEST:
      return {
        ...state,
        loadFeedLoading: true,
        loadFeedError: null,
        loadFeedDone: false,
      };

    case LOAD_FEED_SUCCESS:
      return {
        ...state,
        loadFeedLoading: false,
        comments: action.data,
        loadFeedDone: true,
      };

    case LOAD_FEED_FAILURE:
      return {
        ...state,
        loadFeedLoading: false,
        loadFeedError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
