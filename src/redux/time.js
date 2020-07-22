// Подключение API 
import {timeAPI} from '../api/api';

// Префиксер redux ducks
let prfx = (v) => "weatherapp/time/"+v;

// Типы событий
const GET_SUCCESS = prfx("GET_SUCCESS");

// Стартовое состояние
let initialState = {
  now: null,
};

// Редюсер 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUCCESS: {
      return {
          ...state,          
          now: action.now
        }
    }
    default: return state;
  }
}

// Возврат редюсера по умолчанию
export default reducer;

// Создание событий
export const getSuccess = (now) => ({type: GET_SUCCESS,now});

// Саночки
// Запрос за временем 
export const get = () => async (dispatch) => {  
  let response = await timeAPI.get();
  
  if (response.status === 200)
    dispatch(getSuccess(response.data.now));
}