import React from 'react';
import { mount } from 'enzyme';
// import 'bootstrap';

import Root from '../../Root';
import DataTable from '../data_table';
import DataList from '../data_list';
import Input from '../../components/Input';

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
      <DataTable />
    </Root>
  );  
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a data table', () => {
  expect(wrapped.find(DataList).length).toEqual(1);
  expect(wrapped.find(Input).length).toEqual(3);  
  // two button in Form + one close button in Modal + one button for adding new item
  expect(wrapped.find('button').length).toEqual(4);
});

describe('the inputs of form', () => {

  beforeEach(() => {
    wrapped.find('input#name').simulate('change', { 
      target: { value: 'user3' }
    });
    wrapped.update();

    wrapped.find('input#phone').simulate('change', { 
      target: { value: '0988' }
    });
    wrapped.update();

    wrapped.find('input#email').simulate('change', { 
      target: { value: 'new@yahoo.co.jp' }
    });
    wrapped.update();
  });
  
  it('has name input that users can type in', () => {
    expect(wrapped.find('input#name').prop('value')).toEqual('user3');
  });

  it('has phone input that users can type in', () => {
    expect(wrapped.find('input#phone').prop('value')).toEqual('0988');
  });
  
  it('has email input that users can type in', () => {
    expect(wrapped.find('input#email').prop('value')).toEqual('new@yahoo.co.jp');
  });

  it('after from submitted, the data in data table get editted', () => {
    // wrapped.find('#editBtn').simulate('click');
    // wrapped.update();

    // expect(wrapped.render().text()).toContain('user3');
    // expect(wrapped.render().text()).toContain('0988');
    // expect(wrapped.render().text()).toContain('new@yahoo.co.jp');
  });
});


