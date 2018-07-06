import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, Button } from 'semantic-ui-react';

import { fetchPrinterJobs } from '../../actions/printers';
import { selectPrinter } from '../../reducers/selectors';
import PrinterJobs from './PrinterJobs';

class PrinterDetail extends Component {
  refreshPrinterJobs(printerid) {
    const { fetchPrinterJobs } = this.props;
    fetchPrinterJobs(printerid);
  }

  render() {
    const { printer } = this.props;
    return (
      <Card fluid style={{ padding: '1.5em' }}>
        <Card.Content>
          <Button
            floated="right"
            icon="refresh"
            onClick={() => this.refreshPrinterJobs(printer.id)}
          />
          <Card.Header>{printer.displayName}</Card.Header>
          <Card.Meta>{printer.name}</Card.Meta>
        </Card.Content>

        <PrinterJobs printerid={printer.id} />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    printer: selectPrinter(state)
  };
};

const mapDispatchToProps = { fetchPrinterJobs };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrinterDetail);
