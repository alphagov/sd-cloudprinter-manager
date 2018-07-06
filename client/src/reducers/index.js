import { combineReducers } from 'redux';

import authReducer from './authReducer';
import printerReducer from './printerReducer';
import printerDetailReducer from './printerDetailReducer';
import printerJobsReducer from './printerJobsReducer';

const reducer = combineReducers({
  auth: authReducer,
  printers: printerReducer,
  printer: printerDetailReducer,
  jobs: printerJobsReducer
});

export default reducer;
