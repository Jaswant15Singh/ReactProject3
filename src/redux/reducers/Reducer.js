const initial_state = {
  carts: [],
};

export const cartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return { ...state, carts: [...state.carts, action.payload] };
    default:
      return state;
  }
};
