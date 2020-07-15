// Подключение API 
import {tstAPI} from '../api/api';

// Название типа события
const GET_TST = "GET_TST";

// Стартовое состояние
let initialState = {
  apiCall: "no answer"
};

// Редюсер 
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TST: {
      return {
        ...state,
        apiCall: action.apiCall
      }
    }
    default: return state;
  }
}

// Возврат редюсера по умолчанию
export default reducer;

// Создание событий
const setTST = (apiCall) => ( {type: GET_TST , apiCall});

// Саночки
export const tstThunk = () => (dispatch) => {
  tstAPI.getTST()
    .then(response => {
      if (response.status === 200)
        dispatch(setTST(response.data.message));
    });
}