import React from 'react';
import { mount } from 'enzyme';

import DataList from '../data_list';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    data: [
      { name: 'user1', phone:'0911', email: 'one@yahoo.com.tw' },
      { name: 'user2', phone:'0922', email: 'two@gmail.com' },
    ]
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <DataList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('creates one LI per user', () => {
  // one default li with title + two test li 
  expect(wrapped.find('li').length).toEqual(3);
});

it('shows the name, phone and email for each user', () => {
  expect(wrapped.render().text()).toContain('user1');
  expect(wrapped.render().text()).toContain('user2');
  expect(wrapped.render().text()).toContain('0911');
  expect(wrapped.render().text()).toContain('0922');
  expect(wrapped.render().text()).toContain('one@yahoo.com.tw');
  expect(wrapped.render().text()).toContain('two@gmail.com');
});