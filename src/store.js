import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import costumerReducer from "./features/customers/customerSlice";

const store = configureStore({ //here using configure store makes devtools , combining reducers , applying middleware thunk automatically
  reducer: {
    account: accountReducer,
    customer: costumerReducer,
  },
}); // we are creating the store here and the reducer store receives are always called root reducers and we wrap our middleware inside composeWithDevTools

export default store; // importing the store in our application
