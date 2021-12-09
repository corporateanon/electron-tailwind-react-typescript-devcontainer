import { render } from 'react-dom';
import React from 'react';
import { App } from './App';

const domContainer = document.querySelector('#app');
render(<App />, domContainer);
