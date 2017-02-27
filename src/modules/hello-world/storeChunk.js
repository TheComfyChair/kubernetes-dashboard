import { Types, buildStoreChunk } from 'redux-scc';
import { USER_DETAILS_REDUCER } from './constants';


const userDetailsSchema = Types.reducer(Types.shape({
  name: Types.string('react-app-skeleton'),
}));


export const { reducers, selectors, actions } = buildStoreChunk('hello-world', {
  [USER_DETAILS_REDUCER]: userDetailsSchema,
});