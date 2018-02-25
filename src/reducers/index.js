import { combineReducers } from 'redux';
import activeStoreReducer from './activeStoreReducer';
import storeReducer from './storeReducer';
import mapReducer from './mapReducer';

export default combineReducers({
  activeStore: activeStoreReducer,
  stores: storeReducer,
  map: mapReducer,
});
