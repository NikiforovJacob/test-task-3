import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/configureStore';
import Routes from './components/Routes';

import './styled/GlobalStyles';

const store = configureStore();

const App = () => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
