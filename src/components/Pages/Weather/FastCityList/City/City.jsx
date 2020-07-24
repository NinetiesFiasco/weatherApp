import React from 'react'
import s from './City.module.css'
import { button } from '../../../../Common/Forms/Forms';
import Hover from './Hover';
import DragContainer from './DragContainer'

const City = ({name,removeFromList,position,startPosition,setStartDraggingPos,moveCity,query}) => {
  
  return (
  <div className={s.container}>

    <Hover show={startPosition!==-1} startPosition={startPosition} selfPosition={position} moveCity={moveCity} />

    <DragContainer setStartDraggingPos={setStartDraggingPos} position={position}>
      <div 
        className={s.city}
        style={{
          cursor: startPosition !==-1 ? "move" : "pointer"
        }}
      >
        {name}
        {button(()=>{removeFromList(name)},"danger","Убарть")}
        {button(()=>{query(name)},"primary","Показать")}
      </div>
    </DragContainer>  
  </div>
  )
};

export default City;