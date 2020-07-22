import React from 'react';

export const textInput = (changeHandler, value, props) => {
  return  <input type='text' value={value} onChange={changeHandler} className="form-control" {...props}></input>
};

export const numberInput = (changeHandler, value, props) => {
  return <input type='number' value={value} onChange={changeHandler} className="form-control" {...props}></input>
}

export const button = (clickHandler,type,text,props) => {
  return <button onClick={clickHandler} className={"btn btn-"+type} {...props}>{text}</button>
}