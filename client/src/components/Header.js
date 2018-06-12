import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, Menu, Icon } from 'semantic-ui-react';

class Header extends Component {
  renderContent(auth) {
    if (!auth) {
      return (
        <Button secondary href="/auth/google">
          <Icon name="google" />
          Login with Google
        </Button>
      );
    } else {
      return (
        <Button secondary href="/api/logout">
          Logout
        </Button>
      );
    }
  }
  render() {
    const { auth } = this.props;
    return (
      <div>
        <Menu size="huge" inverted borderless fixed="top">
          <Menu.Item header as={Link} to={auth ? '/landingauth' : '/'}>
            GDS Cloud Printer Manager
          </Menu.Item>
          <Menu.Menu position="right">{this.renderContent(auth)}</Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { auth } = state;
  return { auth };
};

export default connect(mapStateToProps)(Header);
