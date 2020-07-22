import React, { Component } from 'react';
import Weather from './Weather';
import {connect} from 'react-redux';
import {updateCity,query} from '../../../redux/weather';

class WeatherContainer extends Component {
  render() {
    return <Weather 
      city={this.props.city}
      updateCity={this.props.updateCity}
      query={this.props.query}
      answer={this.props.answer}
    />
  }
}

const mstp = (state) =>{
  return {
    city: state.weather.city,
    answer: state.weather.answer
  }
}

export default connect(mstp,{updateCity,query})(WeatherContainer);