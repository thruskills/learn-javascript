import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
ReactDOM.render(<input value="hi" />, document.getElementById('root'));

setTimeout(function() {
  ReactDOM.render(<input value={null} />, document.getElementById('root'));
}, 1000);