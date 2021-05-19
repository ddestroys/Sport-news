import {createBrowserHistory} from 'history';
import {BrowserRouter } from 'react-router-dom';
import React, {Component} from 'react';

import './App.scss';

import MainLayout from './components/mainPages/MainLayout';

const history = createBrowserHistory();

export class App extends Component {
  render() {
    return (
          <BrowserRouter  history={history}>
              <MainLayout />
          </BrowserRouter >
    );
  }
}

export default App;