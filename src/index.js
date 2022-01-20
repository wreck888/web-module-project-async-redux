import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { provider } from 'react-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from './App';

import {reducer} from './reducers';

import './index.css';
import { Provider } from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
