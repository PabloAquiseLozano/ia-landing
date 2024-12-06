import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components/layout/BaseLayout.jsx";
import { Home } from "../pages/index.js";

export const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/menu" element={<BaseLayout>a</BaseLayout>} />
      <Route path="*" element={<h1>Error 404</h1>} />
    </Routes>
  );
};
