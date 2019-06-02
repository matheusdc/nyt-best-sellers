import {
  call, put, takeEvery, all, select,
} from 'redux-saga/effects';

import * as TYPES from '../actions/types';

import { getBooks } from '../services/NytBooksApi';

export function* workerGetBooks() {
  try {
    const filters = yield select(state => state.filters);

    const { data: { results: list, num_results: numberOfResults } } = yield call(getBooks, filters);

    yield put({ type: TYPES.GET_BOOKS_SUCCESS, payload: { list, numberOfResults } });
  } catch (error) {
    yield put({ type: TYPES.GET_BOOKS_FAILURE });
  }
}

export function* watchGetBooks() {
  yield takeEvery(TYPES.GET_BOOKS_REQUEST, workerGetBooks);
}

export function* workerSetFilters() {
  yield put({ type: TYPES.GET_BOOKS_REQUEST });
  yield call(workerGetBooks);
}

export function* watchSetFilters() {
  yield takeEvery(TYPES.SET_FILTERS, workerSetFilters);
}

export default function* rootSaga() {
  yield all([
    watchSetFilters(),
    workerGetBooks(),
  ]);
}
