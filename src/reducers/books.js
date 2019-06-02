import * as TYPES from '../actions/types';

const loadingBook = { skeleton: true };
const loadingBookList = size => new Array(size).fill().map(() => ({ book_details: [loadingBook] }));

export const INITIAL_STATE = {
  loading: true,
  error: false,
  list: loadingBookList(10),
};

const books = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TYPES.GET_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        list: loadingBookList(10),
      };
    case TYPES.GET_BOOKS_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        list: [],
      };
    case TYPES.GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        list: payload.list,
        numberOfResults: payload.numberOfResults,
      };
    default:
      return state;
  }
};

export default books;
