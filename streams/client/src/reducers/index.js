import { combineReducers } from "redux";
import { reducer } from "redux-form";
import AuthReducer from "./AuthReducer";
export default combineReducers({
  auth: AuthReducer,
  form: reducer,
});
