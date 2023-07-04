import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/Manrope/static/Manrope-Regular.ttf';
import './assets/Manrope/static/Manrope-Bold.ttf';
import './assets/Manrope/static/Manrope-Medium.ttf'
//import 'bootstrap/dist/css/bootstrap.css';
import '../src/scss/main.scss';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
