import React, { Component } from 'react';
import DataTable from './data_table';
import AddModal from './add_modal';
import DeleteModal from './delete_modal';

export default class App extends Component {
  render() {
    return (
      <div>
      	<AddModal />
      	<DataTable />
				<DeleteModal />
      </div>
    );
  }
}
