// Подключение API 
import {arrayAPI} from '../api/api';

// Префиксер redux ducks
let prfx = (v) => "weatherapp/array/"+v;

// Типы событий
const ADD_VAL = prfx("ADD_VAL");
const CHANGE_VAL = prfx("CHANGE_VAL");
const SORT_ARRAY_SUCCESS = prfx("SORT_ARRAY_SUCCESS");
const CLEAR = prfx("CLEAR");

// Стартовое состояние
let initialState = {
  array: [],
  newValue: '',
  sortedArray: []
};

// Редюсер 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VAL: {
      return Number.isNaN(state.newValue)
        ? {...state}      
        :{
          ...state,
          array: [...state.array,parseFloat(state.newValue)],
          newValue: ''
        }
    }
    case CHANGE_VAL: {
      return{
        ...state,
        newValue: action.value
      }
    }
    case SORT_ARRAY_SUCCESS: {
      return{
        ...state,
        sortedArray: action.sortedArray
      }
    }
    case CLEAR: {
      return{
        ...state,
        array: [],
        sortedArray: []
      }
    }
    default: return state;
  }
}

// Возврат редюсера по умолчанию
export default reducer;

// Создание событий
export const addVal = () => ({type: ADD_VAL});
export const changeVal = (value) => ({type: CHANGE_VAL , value});
export const sortArraySuccess = (sortedArray) => ({type: SORT_ARRAY_SUCCESS, sortedArray});
export const clear = () => ({type: CLEAR});

// Саночки
export const sortArray = () => (dispatch,getState) => {
  const arr = getState().arrayReducer.array;
  
  arrayAPI.sort(arr).then((response)=>{     
    if (response.status === 200)
      dispatch(sortArraySuccess(response.data.sortedArray));
  }).catch((error)=>{
    alert(error.response.status);
    alert(error.response.data);
    
  });
    
}