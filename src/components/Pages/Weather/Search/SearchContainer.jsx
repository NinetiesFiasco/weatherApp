import React, { Component } from 'react';
import Search from './Search';
import {connect} from 'react-redux'
import {
  updateCity,
  query,
} from '../../../../redux/weather';

class SearchContainer extends Component {
  render() {
    return <Search  
        updateCity={this.props.updateCity} 
        city={this.props.city}
        query={this.props.query}
      />
  }
}

const mstp = (state) => {
  return {
    city: state.weather.city,
  }
}

export default connect(mstp,{updateCity,query})(SearchContainer);