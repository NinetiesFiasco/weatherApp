import React from 'react';
import Show from './Show';
import Title from '../../Common/Title/Title';
import { textInput, button } from '../../Common/Forms/Forms';

const answer = ({city,answer,query,updateCity}) => {

  const locUpdateCity = (e) => {
    updateCity(e.target.value);
  }
 
  return (
    <div>
      <Title text="Погода"/>
      <div>
        <b>Город: </b>
        {textInput(locUpdateCity,city)}
        <br/>
        {button(query,"primary","Запрос")}
      </div>
      { answer && <Show answer={answer}/>}
    </div>
  );
};

export default answer;