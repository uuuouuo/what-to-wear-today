import {
  CREATE_FEED_REQUEST,
  CREATE_FEED_SUCCESS,
  CREATE_FEED_FAILURE,
  LOAD_FEED_REQUEST,
  LOAD_FEED_SUCCESS,
  LOAD_FEED_FAILURE,
  LOAD_FEEDS_REQUEST,
  LOAD_FEEDS_SUCCESS,
  LOAD_FEEDS_FAILURE,
  UPDATE_FEED_REQUEST,
  UPDATE_FEED_SUCCESS,
  UPDATE_FEED_FAILURE,
  DELETE_FEED_REQUEST,
  DELETE_FEED_SUCCESS,
  DELETE_FEED_FAILURE,
} from 'action/feedAction';
import { StateType } from '@/types/feed';

export const initialState: StateType = {
  feed: null,
  createFeedCreating: false,
  createFeedDone: false,
  createFeedError: null,
  loadFeedLoading: false,
  loadFeedDone: false,
  loadFeedError: null,
  loadFeedsLoading: false,
  loadFeedsDone: false,
  loadFeedsError: null,
  updateFeedUpdating: false,
  updateFeedDone: false,
  updateFeedError: null,
  deleteFeedDeleting: false,
  deleteFeedDone: false,
  deleteFeedError: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    //CREATE//

    case CREATE_FEED_REQUEST:
      console.log('reducer!!', action);

      return {
        ...state,
        createFeedCreating: true,
        createFeedDone: false,
        createFeedError: null,
      };

    case CREATE_FEED_SUCCESS:
      console.log('reducer!!', action);
      return {
        ...state,
        loadFeedDone: true,
        createFeedCreating: false,
        createFeedDone: true,
        feed: action.data,
      };

    case CREATE_FEED_FAILURE:
      return {
        ...state,
        createFeedCreating: false,
        createFeedError: action.error,
      };

    //READ//

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
        feed: action.data,
        loadFeedDone: true,
      };

    case LOAD_FEED_FAILURE:
      return {
        ...state,
        loadFeedLoading: false,
        loadFeedError: action.error,
      };

    case LOAD_FEEDS_REQUEST:
      return {
        ...state,
        loadFeedsLoading: true,
        loadFeedsError: null,
        loadFeedsDone: false,
      };

    case LOAD_FEEDS_SUCCESS:
      console.log('reducer 액션', action);
      return {
        ...state,
        loadFeedsLoading: false,
        feed: [action.data],
        loadFeedsDone: true,
      };

    case LOAD_FEEDS_FAILURE:
      return {
        ...state,
        loadFeedsLoading: false,
        loadFeedsError: action.error,
      };

    //UPDATE//

    case UPDATE_FEED_REQUEST:
      return {
        ...state,
        updateFeedUpdating: true,
        updateFeedError: null,
        updateFeedDone: false,
      };

    case UPDATE_FEED_SUCCESS:
      return {
        ...state,
        updateFeedUpdating: false,
        updateFeedDone: true,
        feed: action.data,
      };

    case UPDATE_FEED_FAILURE:
      return {
        ...state,
        updateFeedUpdating: false,
        updateFeedError: action.error,
      };

    //DELETE//

    case DELETE_FEED_REQUEST:
      return {
        ...state,
        deleteFeedDeleting: true,
        deleteFeedError: null,
        deleteFeedDone: false,
      };

    case DELETE_FEED_SUCCESS:
      return {
        ...state,
        deleteFeedDeleting: false,
        deleteFeedDone: true,
        feed: action.data,
      };

    case DELETE_FEED_FAILURE:
      return {
        ...state,
        deleteFeedDeleting: false,
        deleteFeedError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
