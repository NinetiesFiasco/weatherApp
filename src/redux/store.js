import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import arrayReducer from './arrayReducer';

let reducers = combineReducers({
  arrayReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;