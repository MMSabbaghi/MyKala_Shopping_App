import routes from "./routes";
import AppPage from "./AppPage";
import { Route, Routes } from "react-router";

const RoutesComponent = () => {
  return (
    <Routes>
      {routes.map(({ title, path, Page, Layout, subRoutes, authorize }) => {
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
      })}
    </Routes>
  );
};

export default RoutesComponent;
