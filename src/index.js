import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import theme from './theme';
import { ThemeProvider } from 'styled-components';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './reducers/rootReducer';

import './index.css';
import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
