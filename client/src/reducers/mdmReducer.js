import { ADDING_MDM } from '../actions/types';

const INITIAL_STATE = [];

export const mdmReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDING_MDM:
      return action.payload;

    default:
      return state;
  }
};
