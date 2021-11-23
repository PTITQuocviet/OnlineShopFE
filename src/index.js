import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss'
import reportWebVitals from './reportWebVitals';
import './assets/boxicons-2.0.9/css/boxicons.css';
import Layout from './components/Layout';

import { store } from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
  <Provider store = { store }>
  <Layout />
  </Provider>
    {/* <Layout /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
