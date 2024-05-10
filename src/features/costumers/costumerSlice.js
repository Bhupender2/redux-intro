// initial State

const initialStateCustomer = {
  fullName: "",
  natioanlID: "",
  createdAt: "",
};

// Costumer reducer

export default function costumerReducer(state = initialStateCustomer, action) {
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

// Costumer action creator
export function createCostumer(fullName, natioanlID) {
  return {
    type: "costumer/createCostumer",
    payload: {
      fullName,
      natioanlID,
      createdAt: new Date().toISOString(), // we can do this in reducerr function but it will be side effect in reducer function(bcoz they are pure function) so do that here not in reudcer function
    },
  };
}

export function updateName(fullName) {
  return {
    type: "costumer/updateName",
    payload: fullName,
  };
}
