import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApplicationRoot } from './modules/application-root';
import { store } from './store';

ReactDOM.render(
  <Provider store={ store }>
    <ApplicationRoot />
  </Provider>,
  document.getElementById('react-app'),
);