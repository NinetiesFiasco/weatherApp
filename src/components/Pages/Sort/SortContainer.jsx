import React from 'react';
import Sort from './Sort';
import {connect} from 'react-redux';
import {changeVal,addVal,sortArray,clear} from '../../../redux/arrayReducer';


const SortContainer = (props) => {
  return <Sort 
    array={props.array}
    newValue={props.newValue}
    changeVal={props.changeVal}
    addVal={props.addVal}  
    sortedArray={props.sortedArray}
    sortArray={props.sortArray}
    clear={props.clear}
  />
};

const mstp = (state) => {
  return {
    array: state.arrayReducer.array,
    newValue: state.arrayReducer.newValue,
    sortedArray: state.arrayReducer.sortedArray
  }
}

export default connect(mstp,{changeVal,addVal,sortArray,clear})(SortContainer);