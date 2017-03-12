//@flow
import { takeEvery } from 'redux-saga';
import {
  call,
} from 'redux-saga/effects';
import {
  namespacesSocket,
} from '../api';
import {
  UPDATE_NAMESPACES,
} from './constants';


type Namespaces = {
  name: string,
  uid: string,
}[]


export function* updateNamespaces(namespacesArray: Namespaces): Generator<any, any, any> {
  console.log(`Namespaces!`, namespacesArray);
}


export function* watchUpdateNamespaces(): Generator<any, any, any> {
  yield call(takeEvery, UPDATE_NAMESPACES, updateNamespaces);
}


export const updateNamespacesAction = (namespacesArray: Namespaces) => ({
  type: UPDATE_NAMESPACES,
  payload: namespacesArray,
});