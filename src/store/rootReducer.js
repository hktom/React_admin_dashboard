import { combineReducers } from "redux";
import apprenantReducer from "./reducer/apprenantReducer";
import userReducer from "./reducer/userReducer";
import competenceReducer from "./reducer/competenceReducer";
import promotionReducer from "./reducer/promotionReducer";

const RootReducer = combineReducers({
  apprenantReducer: apprenantReducer,
  userReducer: userReducer,
  competenceReducer: competenceReducer,
  promotionReducer: promotionReducer,
});

export default RootReducer;
