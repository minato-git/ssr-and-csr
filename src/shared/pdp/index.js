import React, { Component } from 'react';
import './pdp.css';
import Description from '../components/description/description';
import { Constants } from '../constants';

class PDP extends Component {
  constructor() {
    super();
    this.state = {
      pdpInfo: Constants.pdpInfo
    };
  }

  static initiaize() {}

  render() {
    return (
      <div className={'pdp'}>{this.state.pdpInfo && <Description info={this.state.pdpInfo} />}</div>
    );
  }
}

export default PDP;
