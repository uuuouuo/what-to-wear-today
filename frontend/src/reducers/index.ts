import { HYDRATE } from 'next-redux-wrapper';
import user from './user';
import comment from './comment';
import feed from './feed';
import feeds from './feeds';
import myPageFeeds from './myPageFeeds';
import myPageComments from './myPageComments';
import searchedFeeds from './searchedFeeds';
import { combineReducers } from 'redux';

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return { ...action.payload };
    default: {
      const combineReducer = combineReducers({
        index: (state = {}, action) => state,
        user,
        comment,
        feed,
        feeds,
        myPageFeeds,
        myPageComments,
        searchedFeeds,
      });
      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
