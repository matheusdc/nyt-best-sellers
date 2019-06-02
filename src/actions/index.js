import store from '../store';
import * as TYPES from './types';

export const action = (type, payload) => store.dispatch({ type, payload });

export const getBooks = params => action(TYPES.GET_BOOKS_REQUEST, params);

export const setFilters = params => action(TYPES.SET_FILTERS, params);
export const getFilters = () => action(TYPES.GET_FILTERS);
