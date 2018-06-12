import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import { fetchUser } from '../actions';

import Header from './Header';
import Landing from './Landing';
import PrinterDetail from './printer/PrinterDetail';
import LandingAuth from './LandingAuth';

class App extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Container style={{ marginTop: '6em' }}>
              <Route exact path="/" component={Landing} />
              <Route exact path="/landingauth" component={LandingAuth} />
              <Route
                exact
                path="/printers/:printerId"
                component={PrinterDetail}
              />
            </Container>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = { fetchUser };

export default connect(null, mapDispatchToProps)(App);
