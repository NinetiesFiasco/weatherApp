import React from 'react';
import FavoritCity from './FavoritCity';
import { connect } from 'react-redux'
import {removeFavorit,getFavorit} from '../../../../redux/favorite'
import {query} from '../../../../redux/weather'



class FavoritCityContainer extends React.Component {
  
  componentDidMount(){
    const favoritCity = this.props.getFavorit();
    if (favoritCity)
      this.props.query(favoritCity);
  }

  render() {
    return <FavoritCity
      favoritCity={this.props.favoritCity}
      removeFavorit={this.props.removeFavorit}
    />
  }
}

const mstp = (state) => {
  return {    
    favoritCity: state.favorite.favoritCity,
  }
}

export default connect(mstp,{query,removeFavorit,getFavorit})(FavoritCityContainer);