import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SpeechProvider } from "@speechly/react-client";

import {Provider } from './context/context'


ReactDOM.render(
  <SpeechProvider appId="f45f4575-aa53-4d5c-91bc-cf352a4c694a" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>  ,
  document.getElementById('root')
);