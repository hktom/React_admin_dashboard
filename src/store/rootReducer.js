import {combineReducers} from 'redux';
import apprenantReducer from './reducer/apprenantReducer';
import userReducer from './reducer/userReducer';

const RootReducer = combineReducers({
    apprenantReducer : apprenantReducer,
    userReducer : userReducer,
}) 

export default RootReducer;