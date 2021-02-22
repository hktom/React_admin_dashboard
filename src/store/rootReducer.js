import {combineReducers} from 'redux';
import apprenantReducer from './reducer/apprenantReducer';
import userReducer from './reducer/userReducer';

const RootReducer = combineReducers({
    apprenantReducer : ReducerArticle,
    userReducer : ReducerArticleDesk,
}) 

export default RootReducer;