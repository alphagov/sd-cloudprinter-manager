import axios from 'axios';

import {
  FETCH_PRINTERS,
  FETCH_PRINTERS_SUCCESS,
  FETCH_PRINTER,
  FETCH_PRINTER_JOBS,
  FETCH_JOBS_SUCCESS,
  DELETE_PRINTER_JOB
} from './types';

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
