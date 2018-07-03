import React, { Component } from 'react';
import { Header, Grid } from 'semantic-ui-react';

import PrinterList from './printer/PrinterList';
import PrinterToken from './printer/PrinterToken';
import MDMList from './mdm/MDMList';

class LandingAuth extends Component {
  render() {
    return (
      <div>
        <Header as="h2" textAlign="center">
          Printer Manager
        </Header>
        <Grid columns={2}>
          <Grid.Column>
            <PrinterToken />
          </Grid.Column>
          <Grid.Column>
            {/* <PrinterList /> */}
            <MDMList />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LandingAuth;
