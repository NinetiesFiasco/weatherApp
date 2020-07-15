import React,{useState,useEffect} from 'react';
import s from './Tst.module.css';

const Tst = (props) => {
  debugger;
  let [apiCall,setApiCall] = useState("no answer");

  useEffect(()=>{
    setApiCall(props.apiCall);
  },[props.apiCall]);

  return (
    <div className={s.container}>
      <div>
        Try call to API
        <button onClick={props.tstThunk}>Try</button>
      </div>
      <div>{apiCall}</div>
    </div>
  );
};

export default Tst;