import {
  FETCH_PRINTER_JOBS,
  FETCH_JOBS_SUCCESS,
  DELETE_PRINTER_JOB
} from '../actions/types';

export default (state = { jobs: [] }, action) => {
  switch (action.type) {
    case FETCH_PRINTER_JOBS:
      return Object.assign({ isFetching: true }, state);
    case FETCH_JOBS_SUCCESS:
      return {
        list: action.payload,
        isFetching: false
      };
    case DELETE_PRINTER_JOB:
      return {
        list: state.list.filter(item => item.id !== action.payload),
        isFetching: false
      };
    default:
      return state;
  }
};
