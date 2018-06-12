import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePrinterJob, fetchPrinterJobs } from '../../actions/printers';
import { Dimmer, Loader, Feed } from 'semantic-ui-react';

class PrinterJobs extends Component {
  renderPrinterJobs(jobs) {
    const { isFetching, deletePrinterJob } = this.props;
    if (isFetching || isFetching === undefined)
      return (
        <Dimmer active>
          <Loader indeterminate>Fetching Printer Jobs</Loader>
        </Dimmer>
      );
    if (jobs.length > 0) {
      return jobs.map(job => {
        return (
          <Feed.Event
            as="a"
            key={job.id}
            onClick={() => deletePrinterJob(job.id)}
          >
            <Feed.Label icon="trash" />
            <Feed.Content>
              <Feed.Summary content={job.title} />

              <Feed.Extra text>{job.ownerId}</Feed.Extra>
              <Feed.Meta>{job.status}</Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        );
      });
    } else {
      return (
        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>No Printer Jobs found</Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      );
    }
  }

  render() {
    const { jobsList } = this.props;
    return <Feed>{this.renderPrinterJobs(jobsList)}</Feed>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { jobs } = state;
  const jobsList = jobs.list;
  const isFetching = jobs.isFetching;
  return { jobsList, isFetching, printerid: ownProps.printerid };
};

const mapDispatchToProps = { deletePrinterJob, fetchPrinterJobs };

export default connect(mapStateToProps, mapDispatchToProps)(PrinterJobs);
