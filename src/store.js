import { createStore, combineReducers } from "redux"; //combining all the reducer to create root reducer;
import accountReducer from "./features/accounts/accountSlice";
import costumerReducer from "./features/costumers/costumerSlice";

const rootReducer = combineReducers({
  account: accountReducer, // giving reducer a meaningfull name
  costumer: costumerReducer,
});

const store = createStore(rootReducer); // we are creating the store here and the reducer store receives are always called root reducers
