import { Types, buildStoreChunk } from 'redux-scc';
import { NAMESPACES_REDUCER } from './constants';


const userDetailsSchema = Types.reducer(Types.shape({
  name: Types.string('react-app-skeleton, hello world 2'),
}));


export const { reducers, selectors, actions } = buildStoreChunk('hello-world-2', {
  [NAMESPACES_REDUCER]: userDetailsSchema,
});