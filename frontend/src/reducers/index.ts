import user from './user';
import comment from './comment';
import mypageFeeds from './mypageFeeds';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  index: (state = {}, action) => state,
  user,
  comment,
  mypageFeeds,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
