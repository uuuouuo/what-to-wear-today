import {
  LOAD_SEARCH_FEEDS_REQUEST,
  LOAD_SEARCH_FEEDS_SUCCESS,
  LOAD_SEARCH_FEEDS_FAILURE,
} from 'action/searchFeedsAction';
import { StateType } from '@/types/searchedFeeds';

export const initialState: StateType = {
  searchedFeeds: [],
  loadSearchedFeedsLoading: false,
  loadSearchedFeedsDone: false,
  loadSearchedFeedsError: null,
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_SEARCH_FEEDS_REQUEST:
      return {
        ...state,
        loadSearchedFeedsLoading: true,
        loadSearchedFeedsError: null,
        loadSearchedFeedsDone: false,
      };

    case LOAD_SEARCH_FEEDS_SUCCESS:
      return {
        ...state,
        loadSearchedFeedsLoading: false,
        searchedFeeds: action.data.content,
        loadSearchedFeedsDone: true,
      };

    case LOAD_SEARCH_FEEDS_FAILURE:
      return {
        ...state,
        loadSearchedFeedsLoading: false,
        loadSearchedFeedsError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
