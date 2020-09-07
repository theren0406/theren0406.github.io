import DataReducer from '../data';
import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM  } from '../../actions/index';

it('handles actions of type ADD_ITEM', () => {
  const action = {
    type: ADD_ITEM,
    payload: { name: 'newUser', phone:'0965', email: 'test@yahoo.co.jp' }
  };

  const newState = DataReducer([], action);
  expect(newState).toEqual([{ name: 'newUser', phone:'0965', email: 'test@yahoo.co.jp' }]);
});

it('handles actions of type DELETE_ITEM', () => {
  const action = {
    type: DELETE_ITEM,
    payload: { name: 'newUser', phone:'0965', email: 'test@yahoo.co.jp' }
  };

  const newState = DataReducer([{ name: 'newUser', phone:'0965', email: 'test@yahoo.co.jp' }], action);
  expect(newState).toEqual([]);
});

it('handles actions of type EDIT_ITEM', () => {
  const action = {
    type: EDIT_ITEM,
    payload: { name: 'newUser', phone:'0977', email: 'test77@yahoo.co.jp' },
    prevName: 'newUser'
  };

  const newState = DataReducer([{ name: 'newUser', phone:'0965', email: 'test@yahoo.co.jp' }], action);
  expect(newState).toEqual([{ name: 'newUser', phone:'0977', email: 'test77@yahoo.co.jp' }]);
});