import { combineReducers } from 'redux';
import items from './items';
import content from './content';
import footer from './footer';

const rootReducer = combineReducers({
  items,
  content,
  footer
});

export default rootReducer;