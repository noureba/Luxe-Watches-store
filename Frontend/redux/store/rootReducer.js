import { combineReducers } from "redux";
import cartReducer from "../reducers/cartReducer";
import authReducer from "../reducers/authReducer";
import dataReducer from "../reducers/dataReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  data: dataReducer,
});

export default rootReducer;
