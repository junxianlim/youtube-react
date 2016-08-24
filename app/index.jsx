import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main.jsx';
import CONFIG from './config/index';

console.log(CONFIG);

ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
