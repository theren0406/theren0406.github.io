import React, { Component } from 'react';

import Calculator from './containers/calculator';
import ResultList from './containers/result_list';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-6">
          <Calculator />
        </div>
        <div className="col-12 col-md-6">
          <ResultList />
        </div>
      </div>
    );
  }
}
