import { ADD_TO_CART } from "./Types";

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const itemIndex = state.findIndex((p) => p._id === payload._id);
      if (itemIndex < 0) {
        return [...state, { ...payload, quantity: 1 }];
      }
      else{
        const updatedItem = {...state[itemIndex]};
        updatedItem.quantity +=1;
        const newState = [...state];
        newState[itemIndex] = updatedItem;
        return newState;
      }

    default:
      return state;
  }
};

export default cartReducer;
