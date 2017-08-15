import { combineReducers } from 'redux';
import header from './header';
import content from './content';
import footer from './footer';
import pages from './pages';

const rootReducer = combineReducers({
  header,
  content,
  footer,
  pages
});

export default rootReducer;