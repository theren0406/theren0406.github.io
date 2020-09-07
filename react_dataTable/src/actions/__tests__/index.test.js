import { selectItem, SELECT_ITEM, addItem, ADD_ITEM, deleteItem, DELETE_ITEM,
  editItem, EDIT_ITEM } from '../index';

describe('selectItem', () => {
  it('has the correct type', () => {
    const action = selectItem();
    expect(action.type).toEqual(SELECT_ITEM);
  });

  it('has the correct payload', () => {
    const action = selectItem({ name: 'user2', phone:'0922', email: 'two@gmail.com' });
    expect(action.payload).toEqual({ name: 'user2', phone:'0922', email: 'two@gmail.com' });
  });
});

describe('addItem', () => {
  it('has the correct type', () => {
    const action = addItem();
    expect(action.type).toEqual(ADD_ITEM);
  });

  it('has the correct payload', () => {
    const action = addItem({ name: 'user5', phone:'0955', email: 'five@gmail.com' });
    expect(action.payload).toEqual({ name: 'user5', phone:'0955', email: 'five@gmail.com' });
  });
});

describe('deleteItem', () => {
  it('has the correct type', () => {
    const action = deleteItem();
    expect(action.type).toEqual(DELETE_ITEM);
  });

  it('has the correct payload', () => {
    const action = deleteItem({ name: 'user6', phone:'0966', email: 'six@gmail.com' });
    expect(action.payload).toEqual({ name: 'user6', phone:'0966', email: 'six@gmail.com' });
  });
});

describe('editItem', () => {
  it('has the correct type', () => {
    const action = editItem();
    expect(action.type).toEqual(EDIT_ITEM);
  });

  it('has the correct payload and prevname', () => {
    const action = editItem({ name: 'user10', phone:'0910', email: 'ten@gmail.com' }, 'user1');
    expect(action.payload).toEqual({ name: 'user10', phone:'0910', email: 'ten@gmail.com' });
    expect(action.prevName).toEqual('user1');
  });
});
