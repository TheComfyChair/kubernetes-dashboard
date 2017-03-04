import { reducers } from './storeChunk';
import { HelloWorldContainer } from './components';
import {
  MODULE_TITLE,
  ROUTE_LINK,
  ROUTE_PATTERN,
} from './constants';
import { rootSaga } from './sagas';

export default {
  reducers,
  rootSaga,
  route: {
    link: ROUTE_LINK,
    pattern: ROUTE_PATTERN,
    components: {
      content: HelloWorldContainer,
    },
    clickable: true,
  },
  title: MODULE_TITLE,
};