import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchPrinters,
  fetchPrinter,
  fetchPrinterJobs
} from '../../actions/printers';

import { List, Header, Segment, Dimmer, Loader } from 'semantic-ui-react';

class PrinterList extends Component {
  componentDidMount() {
    const { fetchPrinters } = this.props;
    fetchPrinters();
  }
  getPrinterDetails(printerId) {
    const { fetchPrinter, fetchPrinterJobs } = this.props;
    fetchPrinter(printerId);
    fetchPrinterJobs(printerId);
  }

  renderPrinters() {
    const { printersList } = this.props;
    if (!printersList) {
      return (
        <Dimmer active>
          <Loader indeterminate>Fetching Printers</Loader>
        </Dimmer>
      );
    }
    return printersList.map(printer => {
      return (
        <List.Item
          key={printer.id}
          onClick={() => this.getPrinterDetails(printer.id)}
        >
          {printer.type === 'DRIVE' ? (
            <List.Icon name="google" verticalAlign="middle" size="large" />
          ) : (
            <List.Icon name="print" verticalAlign="middle" size="large" />
          )}
          <List.Content>
            <List.Header as={Link} to={`/printers/${printer.id}`}>
              {printer.defaultDisplayName}
            </List.Header>
            <List.Description>{printer.description}</List.Description>
          </List.Content>
        </List.Item>
      );
    });
  }

  render() {
    return (
      <div>
        <Segment>
          <Header as="h2" textAlign="center">
            Cloud Printers
          </Header>

          <List>{this.renderPrinters()}</List>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { printers } = state;
  const isFetching = printers.isFetching;
  const printersList = printers.list;
  return { printersList, isFetching };
};

const mapDispatchToProps = { fetchPrinters, fetchPrinter, fetchPrinterJobs };

export default connect(mapStateToProps, mapDispatchToProps)(PrinterList);
