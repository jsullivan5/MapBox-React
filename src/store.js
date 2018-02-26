/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import storeGeoJson from './sweetgreenGeoJson';

const initialState = { stores: storeGeoJson };
const enhancers = [];
const middleWare = [thunk];

// if (window.__REDUX_DEVTOOLS_EXTENSION__) {
//   enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
// }

const composeEnhancers = compose(
  applyMiddleware(...middleWare),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers,
);

export default store;
