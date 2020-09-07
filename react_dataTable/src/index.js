import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app';
import Root from './Root';

ReactDOM.render(
  <Root>
    <App />
  </Root>
  , document.querySelector('.myContainer'));
