import commentsReducer from 'reducers/comments_reducer';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment'
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(['new comment']);
});

it('handles action with unknow type', () => {
  const newState = commentsReducer([], { type: 'EOEDLLDO' });

  expect(newState).toEqual([]);
});
