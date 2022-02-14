import {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
} from 'action/commentAction';
import { StateType } from '@/types/comment';

export const initialState: StateType = {
  comments: [],
  loadCommentsLoading: false,
  loadCommentsDone: false,
  loadCommentsError: null,
  createCommentAdding: false,
  createCommentDone: false,
  createCommentError: null,
  deleteCommentDeleting: false,
  deleteCommentDone: false,
  deleteCommentError: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_COMMENTS_REQUEST:
      return {
        ...state,
        loadCommentsLoading: true,
        loadCommentsError: null,
        loadCommentsDone: false,
      };

    case LOAD_COMMENTS_SUCCESS:
      return {
        ...state,
        loadCommentsLoading: false,
        comments: action.data,
        loadCommentsDone: true,
      };

    case LOAD_COMMENTS_FAILURE:
      return {
        ...state,
        loadCommentsLoading: false,
        loadCommentsError: action.error,
      };

    ////

    case CREATE_COMMENT_REQUEST:
      return {
        ...state,
        createCommentsAdding: true,
        createCommentError: null,
        createCommentDone: false,
      };

    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        createCommentsAdding: false,
        comments: [...state.comments, action.data],
        createCommentDone: true,
      };

    case CREATE_COMMENT_FAILURE:
      return {
        ...state,
        createCommentsAdding: false,
        createCommentError: action.error.status,
      };

    ////

    case DELETE_COMMENT_REQUEST:
      return {
        ...state,
        deleteCommentDeleting: true,
        deleteCommentDone: false,
        deleteCommentError: null,
      };

    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        deleteCommentDeleting: false,
        comments: [...state.comments],
        deleteCommentDone: true,
      };

    case DELETE_COMMENT_FAILURE:
      return {
        ...state,
        deleteCommentDeleting: false,
        deleteCommentError: action.error.status,
      };

    default:
      return state;
  }
};

export default reducer;
