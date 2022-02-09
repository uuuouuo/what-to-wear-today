import user from './user';
import comment from './comment';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  index: (state = {}, action) => state,
  user,
  comment,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
