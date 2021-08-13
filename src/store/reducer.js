import { combineReducers } from "redux";

import { reducer as ModalReducer } from "../redux/Modals";
import { reducer as LoginReducer } from "../redux/Login";

export default combineReducers({
  modals: ModalReducer,
  login: LoginReducer,
});
