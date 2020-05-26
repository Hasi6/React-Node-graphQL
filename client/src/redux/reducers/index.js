import { combineReducers } from "redux";

import asyncAction from "./async/asyncReducer";

const rootReducer = combineReducers({
  async: asyncAction
});

export default rootReducer;
