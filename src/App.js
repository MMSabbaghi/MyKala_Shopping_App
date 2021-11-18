import { ToastContainer } from "react-toastify";
import CartProvider from "./context/CartProvider/Provider";
import AuthProvider from "./context/AuthProvider/Provider";
import RoutesComponent from "./routes/RoutesComponent";

const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <CartProvider>
          <RoutesComponent />
        </CartProvider>
        <ToastContainer />
      </AuthProvider>
    </div>
  );
};

export default App;
