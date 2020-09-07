import React from 'react';
import { mount } from 'enzyme';
// import 'bootstrap';

import Root from '../../Root';
import AddModal from '../add_modal';
import Input from '../../components/Input';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <AddModal />
    </Root>
  );  
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a modal for adding new item', () => {
  expect(wrapped.find(Input).length).toEqual(3);
  // two button in Form + one close button in Modal
  expect(wrapped.find('button').length).toEqual(3);
});

describe('the inputs of form', () => {

  beforeEach(() => {
    wrapped.find('input#name').simulate('change', { 
      target: { value: 'new user' }
    });
    wrapped.update();

    wrapped.find('input#phone').simulate('change', { 
      target: { value: '1234' }
    });
    wrapped.update();

    wrapped.find('input#email').simulate('change', { 
      target: { value: 'test@gmail.com' }
    });
    wrapped.update();
  });
  
  it('has name input that users can type in', () => {
    expect(wrapped.find('input#name').prop('value')).toEqual('new user');
  });

  it('has phone input that users can type in', () => {
    expect(wrapped.find('input#phone').prop('value')).toEqual('1234');
  });
  
  it('has email input that users can type in', () => {
    expect(wrapped.find('input#email').prop('value')).toEqual('test@gmail.com');
  });

  it('when form submitted, inputs gets emptied', () => {
    // wrapped.find('#submitBtn').simulate('click');
    // wrapped.update();
    // expect(wrapped.find('input#name').prop('value')).toEqual('');
    // expect(wrapped.find('input#phone').prop('value')).toEqual('');
    // expect(wrapped.find('input#email').prop('value')).toEqual('');
  });
});