import { combineReducers } from "redux";
import bars from "./bars/bars.duck";

const rootReducer = combineReducers({
  bars,
});

export default rootReducer;
