import React from 'react';
import s from './Show.module.css';
import { windDirrection,formatTemp } from '../../../../utils/utils';
import {button} from '../../../Common/Forms/Forms';

const Show = ({answer,setFavorit,addInList}) => {
  if (!answer)
    return null;
  return (
  <div className={s.card+" card"}>
    <div className="card-title">
      Город: {answer.name} 
    </div>
    <div className="card-subtitle text-muted">          
      Координаты: {answer.coord.lon + " " + answer.coord.lat}              
    </div>
    <div className="card-body">
      <div>
        {button(()=>{setFavorit(answer.name)},"primary","В избранное")}
        {button(()=>{addInList(answer.name)},"secondary","Добавить в список")}
      </div>
      Температура: {formatTemp(answer.main.temp)}<br/>
      Ветер: {answer.wind.speed} м/с {windDirrection(answer.wind.deg)}<br/>
      <br/>
      {answer.weather[0].main}<br/>
      {answer.weather[0].description}<br/>
    </div>
  </div>
  );
};

export default Show;