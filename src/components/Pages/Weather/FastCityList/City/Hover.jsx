import React from 'react';
import { useDrop } from 'react-dnd'
import { DragTypes } from './DragTypes'

const style= {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}

const Hover = ({show,startPosition,selfPosition,moveCity}) => {
  
  const [{ isOver, canDrop },drop] = useDrop({
    accept: DragTypes.CITY,
    drop: ()=>{
      if (startPosition===selfPosition) return;
      moveCity(startPosition,selfPosition);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  })

  let display = show?"block":"none";
  if (startPosition===selfPosition)
    display = "none";

  let background;
  if (canDrop)
    background = 'rgba(250,250,0,0.3)';
  if (isOver) 
    background = 'rgba(0,250,0,0.3)';
  return (
    <div style={{
      ...style,
      display,
      background
    }} ref={drop}/>
  );
};

export default Hover;