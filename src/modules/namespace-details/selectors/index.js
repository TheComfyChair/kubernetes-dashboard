import { createSelector } from 'reselect';
import { NAMESPACES_REDUCER } from '../constants';
import { selectors } from '../storeChunk';


export const selectNamespaces = createSelector(
  selectors[NAMESPACES_REDUCER],
  namespaces => namespaces
);