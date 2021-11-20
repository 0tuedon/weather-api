import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {WeatherctxProvider} from './store/weatherContext'


ReactDOM.render(
  <WeatherctxProvider>
     <App />
  </WeatherctxProvider>
 ,
  document.getElementById('root')
)