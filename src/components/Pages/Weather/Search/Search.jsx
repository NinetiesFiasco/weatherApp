import React from 'react';
import { button, textInput } from '../../../Common/Forms/Forms';
import s from './Search.module.css';


const Search = ({updateCity,city,query}) => {
  
  const locUpdateCity = (e) => {
    updateCity(e.target.value);
  }

  return (
    <div>
      <b>Город: </b>
      <div className={s.inliner}>
        {textInput(locUpdateCity,city)}
      </div>
      <div className={s.inliner}>
        {button(()=>{query(city)},"primary","Узнать погоду")}
      </div>
    </div>
  );
};

export default Search;