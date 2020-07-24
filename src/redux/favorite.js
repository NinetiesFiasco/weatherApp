// Префиксер redux ducks
let prfx = (v) => "weatherapp/cities/"+v;

// Типы событий
const SET_FAVORIT = prfx("SET_FAVORIT");        // Установка города по умолчанию
// Стартовое состояние
let initialState = {
  favoritCity: "",
};

// Редюсер 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORIT:{
      return {
        ...state,
        favoritCity: action.favoritCity
      }
    }
    default: return state;
  }
}

// Возврат редюсера по умолчанию
export default reducer;

// Создание событий

export const setFavoritAC = (favoritCity) => ({type: SET_FAVORIT,favoritCity})

// Thunk
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
