import { combineReducers, createStore } from "redux";
import reducer from "../components/reducer";
import { authReducer } from "./auth";
import { calculatorReducer } from "../calculate/calculatorReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: reducer,
  calculator: calculatorReducer,
});

export const store = createStore(rootReducer);
