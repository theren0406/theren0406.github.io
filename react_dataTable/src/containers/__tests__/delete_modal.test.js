import React from 'react';
import { mount } from 'enzyme';

import DeleteModal from '../delete_modal';
import DataList from '../data_list';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    data: [
      { name: 'user1', phone: '0911', email: 'one@yahoo.com.tw' },
      { name: 'user2', phone: '0922', email: 'two@gmail.com' },
    ],
    item: {
      name: 'user1',
      phone: '0911',
      email: 'one@yahoo.com.tw'
    }
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <div>
        <DeleteModal />
        <DataList />
      </div>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has deleted the selected item in data table', () => {
  wrapped.find('#deleteBtn').simulate('click');
  wrapped.update();

  expect(wrapped.render().text()).toEqual(expect.not.stringContaining('user1'));
  expect(wrapped.render().text()).toEqual(expect.not.stringContaining('0911'));
  expect(wrapped.render().text()).toEqual(expect.not.stringContaining('one@yahoo.com.tw'));

});