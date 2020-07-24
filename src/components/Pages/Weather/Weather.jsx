import React from 'react';
import Show from './Show/ShowContainer';
import Title from '../../Common/Title/Title';
import Search from './Search/SearchContainer'
import FavoritCity from './FavoritCity/FavoritCityContainer';
import FastCityList from './FastCityList/FastCityListContainer';

const Weather = () => {
 
  return (
    <div>
      <Title text="Погода"/>
      <div>
        <Search />
        <FavoritCity />
      </div>
      <Show />
      <FastCityList/>
    </div>
  );
};

export default Weather;