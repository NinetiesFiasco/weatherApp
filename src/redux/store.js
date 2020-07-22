import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import arrayReducer from './arrayReducer';
import weather from './weather';
import time from './time';

let reducers = combineReducers({
  arrayReducer,
  weather,
  time
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;