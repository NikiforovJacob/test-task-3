import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default () => {
  const store = createStore(
    combineReducers(rootReducer),
    composeWithDevTools(
      applyMiddleware(thunk),
    ),
  );
  return store;
};
