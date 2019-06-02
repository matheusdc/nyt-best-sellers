import { combineReducers } from 'redux';

import filters from './filters';
import books from './books';

export default combineReducers({
  books,
  filters,
});
