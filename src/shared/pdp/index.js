import React, { Component } from 'react';
import './pdp.css';
import Description from '../components/description/description';
import { httpGetRequest } from '../../utils/utils';

class PDP extends Component {
  constructor(props) {
    super(props);
    let initialData;
    if (typeof  window !== 'undefined') {
      initialData = window.__initialData__;
      delete window.__initialData__;
    } else {
      initialData = props.staticContext.initialData;
    }
    this.state = {
      initialData
    };
  }

  componentDidMount() {
    if(!this.state.initialData) {
      PDP.requestInitialData(this.props.match.params.id).then((initialData) => {
        this.setState({initialData});
      });
    }
  }

  static requestInitialData(id) {
    return new Promise((resolve, reject) => {
      httpGetRequest(`https://node-sample-api.herokuapp.com/api/products/${id}`)
        .then(res => {
          resolve({pdpData: res});
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  render() {
    let pdpData;
    console.log('pdp state',this.state);
    if(this.state.initialData) {
      pdpData = this.state.initialData.pdpData;
    }
    return <div className={'pdp'}>{pdpData && <Description info={pdpData} />}</div>;
  }
}

export default PDP;
