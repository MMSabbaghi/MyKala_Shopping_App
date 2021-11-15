import {
  ADD_TO_CART,
  INCREMENT_PRODUCT_QTY,
  DECREMENT_PRODUCT_QTY,
} from "./Types";

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      return [...state, { ...payload, quantity: 1 }];
    }
    case INCREMENT_PRODUCT_QTY:
    case DECREMENT_PRODUCT_QTY: {
      const itemIndex = state.findIndex((p) => p._id === payload);
      const updatedItem = { ...state[itemIndex] };
      if (type === DECREMENT_PRODUCT_QTY) {
        if (updatedItem.quantity > 1) {
          updatedItem.quantity -= 1;
        } else {
          return state.filter((p) => p._id !== payload);
        }
      } else {
        updatedItem.quantity += 1;
      }
      const newState = [...state];
      newState[itemIndex] = updatedItem;
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
