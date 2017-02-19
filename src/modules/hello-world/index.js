import { reducers } from './storeChunk';
import { HelloWorldContainer } from './components';
import {
  MODULE_TITLE,
  ROUTE_LINK,
  ROUTE_PATTERN,
} from './constants';

export default {
  reducers,
  route: {
    link: ROUTE_LINK,
    pattern: ROUTE_PATTERN,
    components: {
      content: HelloWorldContainer,
    },
  },
  title: MODULE_TITLE,
};