import { createSelector } from 'reselect';
import { USER_DETAILS_REDUCER } from '../constants';
import { selectors } from '../storeChunk';


export const selectUserName = createSelector(
  selectors[USER_DETAILS_REDUCER],
  ({ name }) => name
);