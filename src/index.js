import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <div>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </div>,
  document.getElementById('root')
);


reportWebVitals();
