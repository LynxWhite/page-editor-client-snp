import { combineReducers } from 'redux';
import header from './header';
import content from './content';
import footer from './footer';

const rootReducer = combineReducers({
  header,
  content,
  footer
});

export default rootReducer;