import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
 
const InitialState = {}
const Middleware = [thunk]

import RootReducer from './rootReducer';
export const store = createStore(RootReducer, InitialState, composeWithDevTools(applyMiddleware(...Middleware)));