import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments_reducer';

export default combineReducers({
  comments: commentsReducer
});
