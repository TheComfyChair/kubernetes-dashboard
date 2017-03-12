import axios from 'axios';
import { omit } from 'lodash';

export function api(options = {}) {
  return axios.create({
    baseURL: '/api/',
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json; charset=utf-8',
      ...options.headers,
    },
    ...omit(options, ['headers']),
  });
}

export const wasCancelled = axios.isCancel;

export const cancelToken = axios.CancelToken.source;