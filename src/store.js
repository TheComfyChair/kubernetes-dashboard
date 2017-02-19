//@flow
import { combineReducers } from 'redux';
import { configureStore } from './utils/configure-store';
import helloWorld from './modules/hello-world';

export const store = configureStore(combineReducers({
  ...helloWorld.reducers,
}));

