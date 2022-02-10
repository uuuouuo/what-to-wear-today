import user from './user';
import comment from './comment';
import feed from './feed';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  index: (state = {}, action) => state,
  user,
  comment,
  feed,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
