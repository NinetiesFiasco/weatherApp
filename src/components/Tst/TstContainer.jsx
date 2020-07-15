import React,{Component} from 'react';
import {connect} from 'react-redux';

import Tst from './Tst';

import {tstThunk} from '../../redux/tst';

class TstContainer extends Component{
  render(){
    return <Tst {...this.props}/>;
  }
};

let mstp = (state) => {
  return {
    apiCall: state.tst.apiCall
  }
}

export default connect(mstp,{tstThunk})(TstContainer);