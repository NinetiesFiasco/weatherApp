import React, { Component } from 'react';
import FastCityList from './FastCityList';
import {connect} from 'react-redux'
import {
  removeFromList,
  initFastCityList
} from '../../../../redux/cities'

class FastCityListContainer extends Component {
  
  componentDidMount() {
    this.props.initFastCityList();      
  }

  render() {
    return <FastCityList
      cityList = {this.props.cityList}
      removeFromList = {this.props.removeFromList}
    />
  }

}

const mstp = (state) =>{
  return {
    cityList: state.cities.cityList
  }
}

export default connect(mstp,{removeFromList,initFastCityList})(FastCityListContainer);