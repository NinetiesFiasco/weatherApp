// Подключение API 
import {weatherAPI} from '../api/api';

// Префиксер redux ducks
let prfx = (v) => "weatherapp/whether/"+v;

// Типы событий
const UPDATE_CITY = prfx("UPDATE_CITY");        // Обновление значения input (стоит перевести на redux form)
const WEATHER_SUCCESS = prfx("WEATHER_SUCCESS");// Установка ответа от погодного сервиса

// Стартовое состояние
let initialState = {
  city: "",
  answer: null
};

// Редюсер 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CITY: {
      return {
          ...state,          
          city: action.city
        }
    }
    case WEATHER_SUCCESS: {
      return {
        ...state,
        answer: action.answer
      }
    }
    default: return state;
  }
}

// Возврат редюсера по умолчанию
export default reducer;

// Создание событий
export const updateCity = (city) => ({type: UPDATE_CITY,city});
export const weatherSuccess = (answer) => ({type: WEATHER_SUCCESS,answer})

// Саночки
// Запрос за погодой к сервису
export const query = (city) => async (dispatch,getState) => {
  let response;
  try{
    response = await weatherAPI.query(city);
    //response = await weatherAPI.test(city);
    if (response.status === 200)
      dispatch(weatherSuccess(response.data.body));
  } catch (error){
    alert(error.response.status);
    alert(error.response.data);
  }
}