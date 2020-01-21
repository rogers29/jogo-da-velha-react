import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Game from  './Game';

// ========================================

ReactDOM.render(
  <Router>
    <Game />
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);