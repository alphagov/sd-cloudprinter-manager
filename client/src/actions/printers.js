import axios from 'axios';

import {
  FETCH_PRINTERS,
  FETCH_PRINTERS_SUCCESS,
  FETCH_PRINTER,
  FETCH_PRINTER_JOBS,
  FETCH_JOBS_SUCCESS,
  DELETE_PRINTER_JOB,
  FETCH_PRINTER_TOKEN,
  FETCH_TOKEN_SUCCESS,
  ADDING_MDM
} from './types';

export const fetchMDMMobile = () => async dispatch => {
  const res = await axios.get('/api/google/mdm');
  console.log(res.data);
  dispatch({ type: ADDING_MDM, payload: res.data.mobiledevices });
};

export const fetchPrinters = () => async dispatch => {
  dispatch(fetchingPrinters());
  const res = await axios.get('/api/google/printer/search');
  dispatch(printersSuccess(res.data));
};

function fetchingPrinters() {
  return {
    type: FETCH_PRINTERS
  };
}

function printersSuccess(printersList) {
  return {
    type: FETCH_PRINTERS_SUCCESS,
    payload: printersList
  };
}

export const fetchPrinterJobs = printerId => async dispatch => {
  dispatch(fetchingJobs());
  const res = await axios.get(`/api/google/printer/jobs/${printerId}`);
  dispatch(jobsSuccess(res.data));
};

function fetchingJobs() {
  return {
    type: FETCH_PRINTER_JOBS
  };
}

function jobsSuccess(jobsList) {
  return {
    type: FETCH_JOBS_SUCCESS,
    payload: jobsList
  };
}

export const fetchPrinterToken = () => async dispatch => {
  dispatch(fetchingPrinterToken());
  const res = await axios.get(`/api/printer/token`);
  console.log(res.data);
  dispatch(tokenSuccess(res.data));
};

// this is for dev only delete in production
export const createPrinterToken = () => async dispatch => {
  let tokenO = {
    tokenname: 'test_token',
    token: 'cassaf-cmhfwejwjqixjxakjdbjkabTTTT'
  };
  const res = await axios.post('/api/printer/token', tokenO);
  // console.log(res.data);
  dispatch(tokenSuccess(res.data));
};

export const rotatePrinterToken = gcpAdmin => async dispatch => {
  const res = await axios.post('/api/printer/token/rotate', gcpAdmin);
  if (res.status === 200) {
    // check contents of data......while we dev
    console.log(res.data);
    // if it is what I think it will be then
    //  dispatch(tokenSuccess(res.data));
    // also need to clear the form
  } else {
    // need to handle the error in some way
    console.log(res.status, res.data);
  }
};

function tokenSuccess(tokenDetails) {
  return {
    type: FETCH_TOKEN_SUCCESS,
    payload: tokenDetails
  };
}

function fetchingPrinterToken() {
  return {
    type: FETCH_PRINTER_TOKEN
  };
}

export const fetchPrinter = printerId => async dispatch => {
  const res = await axios.get(`/api/google/printer/${printerId}`);
  dispatch({ type: FETCH_PRINTER, payload: res.data });
};

export const deletePrinterJob = jobid => async dispatch => {
  const res = await axios.get(`/api/google/printer/deletejob/${jobid}`);
  if (res.data.success) {
    dispatch({ type: DELETE_PRINTER_JOB, payload: jobid });
  } else {
    // need to convey some sort of error
  }
};

// will need to do the following :
// get the printer jobs but use the pc token....
// delete the printer jobs  but use the pc token....
// pc token never stored on the client???? Or only stored on the client for the session
// server/client fetch pc token from the db....check age of token....if token is
// older than an agreed time.....before any deleting can be done...refresh the token
// to refresh the pc token......it will need the correct credentials......where/what???
