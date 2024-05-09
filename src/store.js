const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) { // in redux wala reudcer we pass state as a default state in case we havent go
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return state; //current state
      return {
        ...state,
        loan: action.payload, // this thing is not right
      };

    case "account/payloan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        loanPurpose:""
      };
    default:
      return state; // in reducer function in redux we retrun state not throw error like in useReducer function reducer
  }
}
