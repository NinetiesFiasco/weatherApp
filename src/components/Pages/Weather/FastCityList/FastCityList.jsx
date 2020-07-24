import React from 'react';
import s from './FastCityList.module.css'
import City from './City/CityContainer'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const FastCityList = ({removeFromList,cityList}) => {
  
  const cityListUI = cityList.map((city, key) => 
    <City 
      key={key}
      name={city}
      removeFromList={removeFromList}
      position={key}
    />
  )

  return (
  <div className={s.cityList}>
    <DndProvider backend={HTML5Backend}>
      { cityListUI }
    </DndProvider>
  </div>)
};

export default FastCityList;