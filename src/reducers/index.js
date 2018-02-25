import { combineReducers } from 'redux';
import activeStoreReducer from './activeStoreReducer';
import storeReducer from './storeReducer';

export default combineReducers({
  activeStore: activeStoreReducer,
  stores: storeReducer,
});
