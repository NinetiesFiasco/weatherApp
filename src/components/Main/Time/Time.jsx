import React,{useState} from 'react';
import axios from 'axios';

const fZero = (val) => val<10?'0'+val:val;

const dateToHHMMSS = (_date) => {
  const date = new Date(_date);
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  return  fZero(h) + ":" + fZero(m) + ":" + fZero(s);
}

const Time = (props) => {

  let [serverTime,setServerTime] = useState(null);

  const getTime = () => {
    axios.get('/api/now')
      .then((response)=>{
        if (response.status===200){
          setServerTime(response.data.now);
        }      
      });
  }

  return (
    <div>
      <button onClick={getTime}>Получить время с сервера</button>
      { serverTime &&
        <div><b>Время с сервера: </b> {dateToHHMMSS(serverTime)} </div>
      }
    </div>
  );
};

export default Time;