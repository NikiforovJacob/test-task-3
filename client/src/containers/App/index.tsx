import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Routes from './components/Routes';
import rootReducer from './redux/reducers';

import './styled/GlobalStyles';

const store = configureStore({
  reducer: rootReducer,
});

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
