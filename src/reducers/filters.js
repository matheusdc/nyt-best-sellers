import * as TYPES from '../actions/types';

export const INITIAL_STATE = { offset: 0 };

const filters = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TYPES.GET_FILTERS:
      return {
        ...state,
        ...payload,
      };
    case TYPES.SET_FILTERS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default filters;
