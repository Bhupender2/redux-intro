// initial State

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

// Costumer reducer

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
}

// Costumer action creator
export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(), // we can do this in reducerr function but it will be side effect in reducer function(bcoz they are pure function) so do that here not in reudcer function
    },
  };
}

export function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}
