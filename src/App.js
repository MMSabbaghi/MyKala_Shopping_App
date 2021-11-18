import AppPage from "./pages/AppPage";
import { Route, Routes } from "react-router";
import routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import CartProvider from "./context/CartProvider/Provider";
import AuthProvider from "./context/AuthProvider/Provider";

const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <CartProvider>
          <Routes>
            {routes.map(
              ({ title, path, Page, Layout, subRoutes, authorize }) => {
                return (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <AppPage title={title} authorize={authorize} path={path}>
                        <Layout>
                          <Page />
                        </Layout>
                      </AppPage>
                    }
                  >
                    {subRoutes.map(({ path: subPath, Element }) => (
                      <Route
                        key={path + subPath}
                        path={subPath}
                        index={true}
                        element={<Element />}
                      />
                    ))}
                  </Route>
                );
              }
            )}
          </Routes>
        </CartProvider>
        <ToastContainer />
      </AuthProvider>
    </div>
  );
};

export default App;
