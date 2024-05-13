//INITIAL STATE

import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

// we are using createSlice for making slices here we give it name and multiple reducers here we can automatically create action creators , it makes writing reducers lot easier (no longer need switch and default case this is will generated automatically)
// we can mutate our own state.

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan(state, action) {
      if (state.loan > 0) return; //in createslice we only returned the modified data not the whole state if there is nothing to return we return nothing.
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.loanPurpose;
      state.balance += action.payload.amount;
    },
    payLoan(state, action) {
      state.loan = 0;
      state.loanPurpose = "";
      state.balance -= action.payload;
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;

// export default function accountReducer(state = initialStateAccount, action) {
//   // in redux wala reudcer we pass state as a default state in case we havent go
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload , isLoading:false};

//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };

//     case "account/requestLoan":
//       if (state.loan > 0) return state; //current state
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.loanPurpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/convertingCurrency":
//       return {
//         ...state,
//         isLoading: true,
//       };

//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         balance: state.balance - state.loan,
//         loanPurpose: "",
//       };
//     default:
//       return state; // in reducer function in redux we retrun state not throw error like in useReducer function reducer
//   }
// }

// //-----creaeting action creator-----

// export function requestLoan(amount, loanPurpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, loanPurpose }, // passing an object for the very first time( passing multiple pieces of data)
//   };
// }
// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };

//   return async function (dispatch, getState) {
//     dispatch({ type: "account/convertingCurrency" });

//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     const converted = data.rates.USD;

//     dispatch({ type: "account/deposit", payload: converted });
//   };
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function payloan() {
//   return { type: "account/payLoan" };
// }
