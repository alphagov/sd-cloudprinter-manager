import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
import printerReducer from './printerReducer';
import printerDetailReducer from './printerDetailReducer';
import printerJobsReducer from './printerJobsReducer';
import printerTokenReducer from './printerTokenReducer';
import { mdmReducer } from './mdmReducer';

const reducer = combineReducers({
  auth: authReducer,
  printers: printerReducer,
  printer: printerDetailReducer,
  jobs: printerJobsReducer,
  token: printerTokenReducer,
  mdm: mdmReducer,
  form: reduxForm
});

export default reducer;
