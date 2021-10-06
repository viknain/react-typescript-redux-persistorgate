import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import {store,persistor} from './store/store'
//import "./assets/scss/index.scss"
//import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>'
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
