import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const authData = localStorage.getItem("authState") || false;
    setAuth(JSON.parse(authData));
  }, []);

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={auth}>
      <AuthContextDispatcher.Provider value={setAuth}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
export const useSetAuth = () => useContext(AuthContextDispatcher);
