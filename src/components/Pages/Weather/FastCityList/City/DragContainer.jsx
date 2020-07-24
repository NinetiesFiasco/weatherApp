import React from 'react';
import { useDrag } from 'react-dnd'
import { DragTypes } from './DragTypes'

const DragContainer = ({children,setStartDraggingPos,position}) => {
  
  const [{isDragging},drag] = useDrag({
    item: {type: DragTypes.CITY},
    begin: ()=>{setStartDraggingPos(position)},
    end:()=>{setStartDraggingPos(-1)},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })
  return(
    <>  
  <div   
    ref={drag} 
    style={{
      cursor: isDragging ? "move" : "pointer",
      opacity: isDragging ? 0.5 : 1,
    }}   
  >
    {children}
  </div>
  </>)
}

export default DragContainer;