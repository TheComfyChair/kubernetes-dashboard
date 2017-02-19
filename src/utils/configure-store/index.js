import { createStore, compose } from 'redux';

export function configureStore(rootReducer) {
  if (!rootReducer) throw new Error('Cannot configure a store if the rootReducer is not passed in!');
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return {
    ...createStore(
      rootReducer,
      composeEnhancers()
    ),
  };
}