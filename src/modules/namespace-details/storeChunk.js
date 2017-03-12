import { Types, buildStoreChunk } from 'redux-scc';
import { NAMESPACES_REDUCER } from './constants';


const namespacesSchema = Types.reducer(Types.arrayOf(Types.shape({
  name: Types.string(),
  uid: Types.string(),
})));


export const { reducers, selectors, actions } = buildStoreChunk('namespaces', {
  [NAMESPACES_REDUCER]: namespacesSchema,
});