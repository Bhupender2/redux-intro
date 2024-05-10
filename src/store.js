import { createStore, combineReducers } from "redux"; //combining all the reducer to create root reducer;
import accountReducer from "./features/accounts/accountSlice";
import costumerReducer from "./features/costumers/costumerSlice";

const rootReducer = combineReducers({
  account: accountReducer, // giving reducer a meaningfull name
  costumer: costumerReducer,
});

const store = createStore(rootReducer); // we are creating the store here and the reducer store receives are always called root reducers

export default store  // importing the store in our application

//connecting redux from our react app using react-redux library and use provider componnet to wrap our whole app inside the provider component and pass store as a prop now every component inside provide can read data from store and dispatch action to it and to read data fom store we use useSelector hook from react-redux library while takes store as an argumnent 