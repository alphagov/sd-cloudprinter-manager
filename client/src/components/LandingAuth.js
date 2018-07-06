import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react';

import PrinterList from './printer/PrinterList';

class LandingAuth extends Component {
  render() {
    return (
      <div>
        <Header as="h2" textAlign="center">
          Printer Manager
        </Header>
        <Grid centered>
          <Grid.Column>
            <PrinterList />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LandingAuth;
