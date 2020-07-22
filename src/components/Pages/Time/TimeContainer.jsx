import React, { Component } from 'react';
import Time from './Time';
import {connect} from 'react-redux';
import {get} from '../../../redux/time';

class TimeContainer extends Component {
  render() {
    return <Time 
      get={this.props.get}
      now={this.props.now}
    />
  }
}

const mstp = (state) => {
  return {
    now: state.time.now
  }
}

export default connect(mstp,{get})(TimeContainer);