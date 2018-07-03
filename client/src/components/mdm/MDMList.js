import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Item } from 'semantic-ui-react';

import { fetchMDMMobile } from '../../actions/printers';

class MDMList extends Component {
  componentDidMount() {
    this.props.fetchMDMMobile();
  }

  renderMobiles() {
    const { mobiles } = this.props;
    return mobiles
      .filter(mobile => mobile.wifiMacAddress !== '')
      .map(mobile => {
        return (
          <Item>
            <Item.Content>
              <Item.Header>{mobile.name[0]}</Item.Header>
              <Item.Meta>{mobile.model}</Item.Meta>
              <Item.Description>
                <p>{mobile.wifiMacAddress}</p>
                <p>{mobile.email[0]}</p>
              </Item.Description>
            </Item.Content>
          </Item>
        );
      });
  }

  render() {
    return (
      <div>
        <Item.Group>{this.renderMobiles()}</Item.Group>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchMDMMobile
};

const mapStateToProps = state => {
  return {
    mobiles: state.mdm
  };
};
MDMList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MDMList);

export default MDMList;
