import { createStore, combineReducers } from "redux"; //combining all the reducer to create root reducer;

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  natioanlID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
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
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
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

function costumerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "costumer/createCostumer":
      return {
        ...state,
        fullName: action.payload.fullName,
        natioanlID: action.payload.natioanlID,
        createdAt: action.payload.createdAt,
      };

    case "costumer/updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}
const rootReducer = combineReducers({
  account: accountReducer, // giving reducer a meaningfull name
  costumer: costumerReducer,
});

const store = createStore(rootReducer); // we are creating the store here and the reducer store receives are always called root reducers

// store.dispatch({ type: "account/deposit", payload: 1000 }); // this is same as we return dispatch function while calling useReducer hook

// console.log(store.getState()); //to get the current state of the store

// store.dispatch({ type: "account/withdraw", payload: 300 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 3000, loanPurpose: "buy a buggati 🚗" }, // passing an object for the very first time( pasing multiple pieces of data)
// });
// console.log(store.getState())

// store.dispatch({type:"account/payloan"})

// console.log(store.getState())

//-----creaeting action creator-----

function requestLoan(amount, loanPurpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, loanPurpose }, // passing an object for the very first time( pasing multiple pieces of data)
  };
}
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function payloan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, "buy a car"));
console.log(store.getState());

store.dispatch(payloan());
console.log(store.getState());

// Costumer action creator
function createCostumer(fullName, natioanlID) {
  return {
    type: "costumer/createCostumer",
    payload: {
      fullName,
      natioanlID,
      createdAt: new Date().toISOString(), // we can do this in reduecr function but it will be side effect in reducer function(bcoz they are pure function) so do that here not in reudcer function
    },
  };
}

function updateName(fullName) {
  return {
    type: "costumer/updateName",
    payload: fullName,
  };
}
