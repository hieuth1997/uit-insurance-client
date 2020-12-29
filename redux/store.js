import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import reducer from './reducer';

const exampleState = {};

const middleware = [thunk];

// if (process.env.NODE_ENV === `development`) {
//   const { createLogger } = require('redux-logger');
//   const logger = createLogger({
//     collapsed: true,
//     diff: true
//   });
//   middleware.push(logger);
// }

export function initializeStore(initialState = exampleState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}

export default initializeStore;
