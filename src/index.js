import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import App from './App';
import messages from './translation/game';
import store from './store';

const locale = 'pt-BR';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <App />
      </IntlProvider>
    </Provider>
  </Router>,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);