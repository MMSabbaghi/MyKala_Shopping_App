import { createContext, useContext, useReducer } from "react";
import cartReducer from "./Reducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
export const useCartDispatch = () => useContext(CartContextDispatcher);
