import { combineReducers } from "redux";
import logReducer from "./logReducer";
import TechReducers from "./TechReducers";
export default combineReducers({ log: logReducer, tech: TechReducers });
