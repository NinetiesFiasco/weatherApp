// Префиксер redux ducks
let prfx = (v) => "weatherapp/cities/"+v;

// Типы событий
const START_DRAGGING_POSITION = prfx("START_DRAGGING_POSITION");
const REPLACE = prfx("REPLACE");
const ADD_IN_LIST = prfx("ADD_IN_LIST")         // Запомнить город
const REMOVE_FROM_LIST = prfx("REMOVE_FROM_LIST")//Удалить город
const RESTORE_LIST =prfx("RESTORE_LIST")        // Получить все мои города

// Стартовое состояние
let initialState = {
  startPosition: -1,
  cityList: ['Moscow','Saint Petersburg','Sochi','Shchelkovo'],
};

// Редюсер 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_DRAGGING_POSITION: {
      return {
          ...state,          
          startPosition: action.startPosition
        }
    }
    case REPLACE: {
      return{
        ...state,
      }
    }
    case ADD_IN_LIST: {
      return {
        ...state,
        cityList: [...state.cityList,action.city]
      }
    }
    case REMOVE_FROM_LIST: {
      return {
        ...state,
        cityList: state.cityList.filter((city)=>{return city !== action.city})
      }
    }
    case RESTORE_LIST: {
      return {
        ...state,
        cityList: action.cityList
      }
    }
    default: return state;
  }
}

// Возврат редюсера по умолчанию
export default reducer;

// Создание событий
export const addInListAC = (city) =>({type: ADD_IN_LIST,city})
export const removeFromListAC = (city) => ({type: REMOVE_FROM_LIST, city})
export const restoreListAC = (cityList) => ({type: RESTORE_LIST, cityList})

export const setStartDraggingPos = (startPosition) => ({type: START_DRAGGING_POSITION,startPosition});

// Thunk
export const initFastCityList = () => (dispatch) => {
  const list = localStorage.getItem("cityList");
  if (list)
    dispatch(restoreListAC(list.split(',')));
}

export const addInList = (city) => (dispatch,getState) => {
  dispatch(addInListAC(city))
  localStorage.setItem("cityList",getState().cities.cityList)
}

export const removeFromList = (city) => (dispatch,getState) => {
  dispatch(removeFromListAC(city));
  localStorage.setItem("cityList",getState().cities.cityList)
}

export const moveCity = (posStart,posEnd) => (dispatch,getState) =>{
  let cityList = [...getState().cities.cityList];
  let elem = cityList[posStart];
  cityList.splice(posStart,1);
  cityList.splice(posEnd,0,elem);
  dispatch(restoreListAC(cityList));
}