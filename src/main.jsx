import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/ahaworks/">
      <App />
    </BrowserRouter>
  </StrictMode>
);
