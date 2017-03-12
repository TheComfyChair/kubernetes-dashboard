//@flow
import { fork } from 'redux-saga/effects';
import {
  controlNamespacesSocket,
  connectNamespacesSocketAction,
  disconnectNamespacesSocketAction,
} from './namespacesSocket';

export function* rootSaga(): Generator<any, any, any> {
  yield fork(controlNamespacesSocket);

  yield console.info('namespace details saga initialised!');
}


export {
  connectNamespacesSocketAction,
  disconnectNamespacesSocketAction,
};