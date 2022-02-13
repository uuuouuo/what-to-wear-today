import { HYDRATE } from 'next-redux-wrapper';
import user from './user';
import comment from './comment';
import createComment from './createComment';
import feed from './feed';
import { combineReducers } from 'redux';

const rootReducer = (state: any, action: any) => {
  console.log('dd', action);
  switch (action.type) {
    case HYDRATE:
      return { ...action.payload };
    default: {
      const combineReducer = combineReducers({
        index: (state = {}, action) => state,
        user,
        comment,
        createComment,
        feed,
      });
      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
