import React, { Component } from 'react';
import Weather from './Weather';
import {connect} from 'react-redux';
import {
  updateCity,
  query,
  setFavorit,
  getFavorit,
  removeFavorit,
  addInList,
  removeFromList,
  initList
} from '../../../redux/weather';

class WeatherContainer extends Component {

  componentDidMount() {
    const favoritCity = this.props.getFavorit();
    this.props.initList();
    if (favoritCity)
      this.props.query(favoritCity);
  }

  render() {
    return <Weather 
      city={this.props.city}
      updateCity={this.props.updateCity}
      query={this.props.query}
      answer={this.props.answer}
      setFavorit={this.props.setFavorit}
      favoritCity={this.props.favoritCity}
      removeFavorit={this.props.removeFavorit}
      addInList={this.props.addInList}
      removeFromList={this.props.removeFromList}
      cityList={this.props.cityList}
    />
  }
}

const mstp = (state) =>{
  return {
    city: state.weather.city,
    answer: state.weather.answer,
    favoritCity: state.weather.favoritCity,
    cityList: state.weather.cityList
  }
}

export default connect(mstp,{
  updateCity,query,
  setFavorit,getFavorit,removeFavorit,
  addInList,removeFromList,initList
})(WeatherContainer);