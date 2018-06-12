import { FETCH_PRINTERS, FETCH_PRINTERS_SUCCESS } from '../actions/types';

export default (state = { printers: [] }, action) => {
  switch (action.type) {
    case FETCH_PRINTERS:
      return Object.assign({ isFetching: true }, state);
    case FETCH_PRINTERS_SUCCESS:
      return {
        list: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
