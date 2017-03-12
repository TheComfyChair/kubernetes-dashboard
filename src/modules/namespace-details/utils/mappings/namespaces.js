//@flow
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';

export type NamespacesApi = {
  metadata: {
    name: string,
    uid: string,
  },
};
export type NamespacesStore = {
  name: string,
  uid: string,
}[];


const getMetaData = (property: string) => get('metadata', property);


export const namespacesApiToStore = map((namespace: NamespacesApi) => ({
  name: getMetaData('name')(namespace),
  uid: getMetaData('uid')(namespace),
}));