import filterReducer, { INITIAL_STATE } from './filters';

import { getFilters, setFilters } from '../actions';

describe('Filter Reducer', () => {
  it('Should have an initial state with an keyword property and empty value', () => {
    expect(
      filterReducer(
        undefined,
        getFilters(),
      ),
    ).toStrictEqual(INITIAL_STATE);
  });

  it('Should update keyword property correctly', () => {
    expect(
      filterReducer(
        INITIAL_STATE,
        setFilters({ keyword: 'filter' }),
      ),
    ).toStrictEqual({ keyword: 'filter' });
  });

  it('Should add a filter property correctly', () => {
    expect(
      filterReducer(
        INITIAL_STATE,
        setFilters({ offset: 1 }),
      ),
    ).toStrictEqual({ keyword: '', offset: 1 });
  });

  it('Should replace a filter property correctly', () => {
    expect(
      filterReducer(
        { keyword: '', offset: 1 },
        setFilters({ offset: 5 }),
      ),
    ).toStrictEqual({ keyword: '', offset: 5 });
  });
});
