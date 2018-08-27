import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments_reducer';
import authReducer from 'reducers/auth_reducer';

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
});
