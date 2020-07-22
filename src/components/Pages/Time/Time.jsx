import React,{useState,useEffect} from 'react';
import s from './Time.module.css';
import Title from '../../Common/Title/Title';
import { timeFromDate } from '../../../utils/utils';

const Time = ({get,now}) => {

  let [serverTime,setServerTime] = useState(now);
  
  useEffect(()=>{
    setServerTime(now);
  },[now]);

  return (
    <div>
      <Title text="Время с сервера" />
      <div>
        <button onClick={get} className="btn btn-primary">Запросить</button>
      </div>
      { serverTime &&        
        <div>
          <Badge text={"Время UTC: "+serverTime}/>
          <Badge text={"Текущее время: " +timeFromDate(serverTime) }/>
          <Badge text={"Смещение: " + (new Date()).getTimezoneOffset() + " минут"}/>
        </div>
      }
    </div>
  );
};

export default Time;

const Badge = ({text}) => {
  return (
    <div>
      <div className={s.bage+" badge badge-success"}>{text}</div>
    </div>
  );
};