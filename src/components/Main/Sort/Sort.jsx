import React from 'react';
import s from './Sort.module.css';


const Sort = (props) => {

  const arrValsUI = props.array.map((v,key)=>{
    return <span key={key} className={s.val}>{v}</span>
  });

  const sortedUI = props.sortedArray.map((v,key)=>{
    return <span key={key} className={s.val}>{v}</span>
  });

  const changeVal = (e) => {
    props.changeVal(e.target.value);
  }

  return (
    <div>
      <h1>Сортировка массива</h1>
      <div>
        <h3>Массив</h3>
        <div>
          <b>Длина:</b>{props.array.length}
        </div>
        <div>
          <b>Значения:</b> {arrValsUI}
        </div>
      </div>
      <div>
        <h3>Добавить значение</h3>
        <input type='number' value={props.newValue} onChange={changeVal}></input>
        <button onClick={props.addVal}>Добавить</button>
        <button onClick={props.clear}>Очистить</button>
      </div>
      <div>
        <h3>Сортировка</h3>
        <button onClick={props.sortArray}>Отсортировать</button>
        <div>
          {sortedUI}
        </div>
      </div>
    </div>
  );
};

export default Sort;