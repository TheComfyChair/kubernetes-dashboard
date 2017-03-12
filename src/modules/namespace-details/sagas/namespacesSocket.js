//@flow
import {
  eventChannel,
  take,
  fork,
  call,
  put,
} from 'redux-saga/effects';
import { namespacesApiToStore } from '../utils/mappings';
import {
  UPDATE_NAMESPACES,
  OPEN_NAMESPACE_SOCKET,
  CLOSE_NAMESPACE_SOCKET,
} from './constants';


const namespacesSocket = () =>
  eventChannel((emitter) => {
    const ws = new WebSocket('/api/namespaces');

    ws.onopen = () => {
      console.info('Opening socket for namespaces...');
      ws.send('Hai server!');
    };

    ws.onerror = (error: Event) => console.error(error);

    ws.onmessage = (event: { data: any }) => {
      try {
        return emitter({
          type: UPDATE_NAMESPACES,
          payload: namespacesApiToStore(JSON.parse(event.data)),
        });
      } catch (error) {
        console.error(`An error occurred whilst parsing namespaces websocket response: ${ error.message }`);
      }
    };

    return () => console.info('Closing socket for namespaces...');
  });


export function* watchNamespacesSocket(): Generator<any, any, any> {
  const channel = yield call(namespacesSocket);
  try {
    while (true) {
      yield put(yield take(channel));
    }
  } catch (error) {
    console.error(`An error occured in watchNamespacesSocket: ${ error.message }`);
  } finally {
    channel();
  }
}


export function* controlNamespacesSocket(): Generator<any, any, any> {
  while (true) {
    yield take(OPEN_NAMESPACE_SOCKET);
    const socketSaga = fork(watchNamespacesSocket);
    yield take(CLOSE_NAMESPACE_SOCKET);
    socketSaga.cancel();
  }
}


export const connectNamespacesSocketAction = () => ({ type: OPEN_NAMESPACE_SOCKET });
export const disconnectNamespacesSocketAction = () => ({ type: CLOSE_NAMESPACE_SOCKET });