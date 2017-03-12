//@flow
import { combineReducers } from 'redux';
import { configureStore } from './utils/configure-store';
import namespaceDetails from './modules/namespace-details';

export const store = configureStore(combineReducers({
  ...namespaceDetails.reducers,
}));

