import AppPage from "./pages/AppPage";
import { Route, Routes } from "react-router";
import routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import CartProvider from "./context/CartProvider/Provider";

const App = () => {
  return (
    <div className="app">
      <CartProvider>
        <Routes>
          {routes.map(({ title, path, Page, Layout, subRoutes }) => {
            return (
              <Route
                key={path}
                path={path}
                element={
                  <AppPage title={title}>
                    <Layout>
                      <Page />
                    </Layout>
                  </AppPage>
                }
              >
                {subRoutes.map(({ path: subPath, Element }) => (
                  <Route
                    key={path + subPath}
                    path={path}
                    element={<Element />}
                  />
                ))}
              </Route>
            );
          })}
        </Routes>
      </CartProvider>
      <ToastContainer />
    </div>
  );
};

export default App;
