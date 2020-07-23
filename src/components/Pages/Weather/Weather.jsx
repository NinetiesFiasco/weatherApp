import React from 'react';
import Show from './Show';
import Title from '../../Common/Title/Title';
import { textInput, button } from '../../Common/Forms/Forms';
import s from './Weather.module.css'

const answer = ({city,answer,query,updateCity,setFavorit,favoritCity,removeFavorit,addInList,removeFromList,cityList}) => {

  const locUpdateCity = (e) => {
    updateCity(e.target.value);
  }
  
  const cityListUI = cityList.map( (city, key) => <div key={key}>{ city }</div> )
 
  return (
    <div>
      <Title text="Погода"/>
      <div>
        <b>Город: </b>
        {textInput(locUpdateCity,city)}
        <br/>
        {button(query,"primary","Запрос")}
        <div>
          <b>Избранный город: </b>{favoritCity}
          { favoritCity &&
            <div>
              {button(removeFavorit,"warning","Удалить")}
            </div>
          }
        </div>
      </div>
      { answer && <Show answer={answer} setFavorit={setFavorit} removeFavorit={removeFavorit} addInList={addInList}/>}
      <div className={s.cityList}>
        { cityListUI }
      </div>
    </div>
  );
};

export default answer;