import ItemReducer from '../selectedItem';
import { SELECT_ITEM } from '../../actions/index';

it('handles actions of type SELECT_ITEM', () => {
  const action = {
    type: SELECT_ITEM,
    payload: { name: 'user', phone:'0987', email: 'test@gmail.com' }
  };

  const newState = ItemReducer({}, action);

  expect(newState).toEqual({ name: 'user', phone:'0987', email: 'test@gmail.com' });
});