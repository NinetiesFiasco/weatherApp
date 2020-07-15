import React,{useState} from 'react';
import s from './Tst.module.css';
import axios from 'axios';

const Tst = () => {

  let [apiCall,setApiCall] = useState("no answer");

  axios.get('/api/tst').then((response) => {
    setApiCall(response.data.message);
  });

  return (
    <div className={s.container}>
      <div>Try call to API</div>
      <div>{apiCall}</div>
    </div>
  );
};

export default Tst;