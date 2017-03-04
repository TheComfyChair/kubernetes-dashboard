//@flow
import { combineReducers } from 'redux';
import { configureStore } from './utils/configure-store';
import helloWorld from './modules/hello-world';
import helloWorld2 from './modules/hello-world-2';

export const store = configureStore(combineReducers({
  ...helloWorld.reducers,
  ...helloWorld2.reducers,
}));

