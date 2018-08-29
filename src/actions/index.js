import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';

export function saveComment(comment, callback) {
  callback();

  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments(callback) {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');

  callback();
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}
