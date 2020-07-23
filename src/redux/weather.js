// Подключение API 
import {weatherAPI} from '../api/api';

// Префиксер redux ducks
let prfx = (v) => "weatherapp/whether/"+v;

// Типы событий
const UPDATE_CITY = prfx("UPDATE_CITY");        // Обновление значения input (стоит перевести на redux form)
const WEATHER_SUCCESS = prfx("WEATHER_SUCCESS");// Установка ответа от погодного сервиса
const SET_FAVORIT = prfx("SET_FAVORIT");        // Установка города по умолчанию
const ADD_IN_LIST = prfx("ADD_IN_LIST")         // Запомнить город
const REMOVE_FROM_LIST = prfx("REMOVE_FROM_LIST")//Удалить город
const RESTORE_LIST =prfx("RESTORE_LIST")        // Получить все мои города

// Стартовое состояние
let initialState = {
  city: "",
  favoritCity: "",
  cityList: ['moscow','piter','sochi','chshelkovo'],
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
    case SET_FAVORIT:{
      return {
        ...state,
        favoritCity: action.favoritCity
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
export const updateCity = (city) => ({type: UPDATE_CITY,city});
export const weatherSuccess = (answer) => ({type: WEATHER_SUCCESS,answer})
export const setFavoritAC = (favoritCity) => ({type: SET_FAVORIT,favoritCity})
export const addInListAC = (city) =>({type: ADD_IN_LIST,city})
export const removeFromListAC = (city) => ({type: REMOVE_FROM_LIST, city})
export const restoreListAC = (cityList) => ({type: RESTORE_LIST, cityList})

// Саночки
// Запрос за погодой к сервису
export const query = () => async (dispatch,getState) => {
  const city = getState().weather.city;
  let response;
  try{
    //response = await weatherAPI.query(city);
    response = await weatherAPI.test(city);
    if (response.status === 200)
      dispatch(weatherSuccess(response.data.body));
  } catch (error){
    alert(error.response.status);
    alert(error.response.data);
  }
}

export const setFavorit = (favoritCity) => (dispatch) => {
  localStorage.setItem("favoritCity",favoritCity);
  dispatch(setFavoritAC(favoritCity));
}

export const getFavorit = () => (dispatch) => {
  const favoritCity = localStorage.getItem("favoritCity");
  if (favoritCity)
    dispatch(setFavoritAC(favoritCity));
  return favoritCity;
}

export const removeFavorit = () => (dispatch) => {
  localStorage.removeItem("favoritCity");
  dispatch(setFavoritAC(""));
}

export const addInList = (city) => (dispatch,getState) => {
  dispatch(addInListAC(city))
  localStorage.setItem("cityList",getState().weather.cityList)
}

export const removeFromList = (city) => (dispatch,getState) => {
  dispatch(removeFromListAC(city));
  localStorage.setItem("cityList",getState().weather.cityList)
}

export const initList = () => (dispatch) => {
  const cityList = localStorage.getItem("cityList");
  if (cityList)
    dispatch(restoreListAC(cityList.split(',')));
}