import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPrinterToken, createPrinterToken } from '../../actions/printers';
import Moment from 'react-moment';
import { Header, Segment, Dimmer, Loader, Card } from 'semantic-ui-react';
import momentjs from 'moment';

import PrinterTokenRotate from './PrinterTokenRotate';

class PrinterToken extends Component {
  componentDidMount() {}

  refreshToken() {
    // this.props.createPrinterToken();
    // refresh the token
    // need the admin credentials to do this
    // .....
  }

  render() {
    const { isFetching, pToken } = this.props;
    const nDate = momentjs();
    const dDiff = nDate.diff(pToken.updatedAt, 'hours');

    if (isFetching || isFetching === undefined)
      return (
        <Dimmer active>
          <Loader indeterminate>Fetching Token</Loader>
        </Dimmer>
      );

    return (
      <Segment>
        <Header as="h2" textAlign="center">
          Printer Token
        </Header>
        <Card fluid>
          <Card.Content>
            <Card.Header>{pToken.tokenname}</Card.Header>
            <Card.Meta>
              Rotated &nbsp;
              <Moment fromNow>{pToken.updatedAt}</Moment>
            </Card.Meta>
            <Card.Description>Token Id: {pToken.token}</Card.Description>
          </Card.Content>
          {/* {dDiff > 1 && ( */}
          <Card.Content extra>
            <PrinterTokenRotate />
          </Card.Content>
          {/* )} */}
        </Card>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  const { token } = state;
  const isFetching = token.isFetching;
  const pToken = token.token;
  return { isFetching, pToken };
};

const mapDispatchToProps = {
  fetchPrinterToken,
  createPrinterToken
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrinterToken);
