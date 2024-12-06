import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
);
