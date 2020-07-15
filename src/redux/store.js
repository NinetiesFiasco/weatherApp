import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import tst from './tst';

let reducers = combineReducers({
  tst
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;