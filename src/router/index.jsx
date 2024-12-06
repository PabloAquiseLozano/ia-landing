import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components/layout/BaseLayout.jsx";
import { Home, MenuSection, IaComponent } from "../pages/index.js";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="/menu"
        element={
          <BaseLayout>
            <MenuSection />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/ia"
        element={
          <BaseLayout>
            <IaComponent />
          </BaseLayout>
        }
      />
      <Route exact path="/systems" element={<BaseLayout></BaseLayout>} />
      <Route exact path="/cibersecurity" element={<BaseLayout></BaseLayout>} />
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  );
};
