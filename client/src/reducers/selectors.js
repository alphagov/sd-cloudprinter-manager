import { createSelector } from 'reselect';

export const selectPrinters = state => state.printers;
export const selectPrinter = state => state.printer;
export const selectPrinterJobs = state => state.jobs;
export const selectPrinterJobsList = state => state.jobs.list;

export const selectPrinterJobsError = createSelector(
  selectPrinterJobs,
  jobs => {
    if (!jobs.isFetching && jobs.isFetching !== undefined) {
      return jobs.list.filter(job => job.status === 'ERROR');
    }
  }
);

// need to change status filter
