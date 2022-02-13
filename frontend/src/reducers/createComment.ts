import {
  COMMENT_CREATE,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAILURE,
} from 'action/createCommentAction';

import { StateType } from '@/types/createComment';

export const initialState: StateType = {
  comments: [],
  CommentAdding: false,
  createCommentDone: false,
  createCommentError: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        CommentsAdding: true,
        createCommentError: null,
        createCommentDone: false,
      };

    case COMMENT_CREATE_SUCCESS:
      return {
        ...state,
        CommentsAdding: false,
        comments: action.data,
        createCommentDone: true,
      };

    case COMMENT_CREATE_FAILURE:
      return {
        ...state,
        CommentsAdding: false,
        createCommentError: action.error.status,
      };

    default:
      return state;
  }
};

export default reducer;
