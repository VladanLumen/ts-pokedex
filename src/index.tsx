import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { AuthProvider } from "./component/Register/AuthContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </BrowserRouter>
);
