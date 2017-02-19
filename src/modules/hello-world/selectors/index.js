import { createSelector } from 'reselect';
import { selectors } from '../storeChunk';


export const selectUserName = createSelector(
  selectors.userDetails,
  ({ name }) => name
);