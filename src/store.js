import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  // in redux wala reudcer we pass state as a default state in case we havent go
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return state; //current state
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
        balance:state.balance+action.payload.amount
      };

    case "account/payloan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        loanPurpose: "",
      };
    default:
      return state; // in reducer function in redux we retrun state not throw error like in useReducer function reducer
  }
}

const store = createStore(reducer); // we are creating the store here

store.dispatch({ type: "account/deposit", payload: 1000 }); // this is same as we return dispatch function while calling useReducer hook

console.log(store.getState()); //to get the current state of the store

store.dispatch({ type: "account/withdraw", payload: 300 });
console.log(store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 3000, loanPurpose: "buy a buggati 🚗" }, // passing an object for the very first time( pasing multiple pieces of data)
});
console.log(store.getState())

store.dispatch({type:"account/payloan"})

console.log(store.getState())
