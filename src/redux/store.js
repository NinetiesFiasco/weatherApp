import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import arrayReducer from './arrayReducer';
import weather from './weather';
import time from './time';
import cities from './cities';
import favorite from './favorite';

let reducers = combineReducers({
  arrayReducer,
  weather,
  time,
  cities,
  favorite
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.store= store;

export default store;