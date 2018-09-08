import React from 'react';
import { shallow } from 'enzyme';

import App from '../app';
import DataTable from '../data_table';
import AddModal from '../add_modal';
import DeleteModal from '../delete_modal';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);  
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a data table', () => {
  expect(wrapped.find(DataTable).length).toEqual(1);
});

it('has a modal for adding items', () => {
  expect(wrapped.find(AddModal).length).toEqual(1);
});

it('has s modal for deleting selected item', () => {
  expect(wrapped.find(DeleteModal).length).toEqual(1);
});