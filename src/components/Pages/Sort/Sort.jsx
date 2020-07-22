import React from 'react';
import s from './Sort.module.css';
import Title from '../../Common/Title/Title';
import { numberInput, button } from '../../Common/Forms/Forms';


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
      <Title text="Сортировка массива"/>
        <table className={s.tab}>
          <tbody>
            <tr>
              <td className={s.vals}>            
                <h3>Массив</h3>
                <div><b>Длина:</b> {props.array.length}</div>
                <div><b>Значения:</b> {arrValsUI}</div>
              </td>
              <td className={s.adding}>
                <h3>Добавить значение</h3>
                {numberInput(changeVal,props.newValue)}
                <br/>
                {button(props.addVal,"primary","Добавить",{disabled:props.newValue === ""})}
                {button(props.clear,"warning","Очистить")}
              </td>
            </tr>
            <tr>
              <td colSpan='2'>
                {button(props.sortArray,"success","Отсортировать")}
              </td>
            </tr>
            <tr>
              <td colSpan='2'>
                {sortedUI}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default Sort;