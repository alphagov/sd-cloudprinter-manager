import { FETCH_PRINTER_TOKEN, FETCH_TOKEN_SUCCESS } from '../actions/types';

export default (state = { token: {} }, action) => {
  switch (action.type) {
    case FETCH_PRINTER_TOKEN:
      return Object.assign({ isFetching: true }, state);
    case FETCH_TOKEN_SUCCESS:
      return {
        token: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
