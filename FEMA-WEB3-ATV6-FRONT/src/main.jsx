import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./styles/globalStyles";

import { Login } from "./page/Login";
import { Register } from "./page/Register";
import { Perfil } from "./page/Perfil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Login />
  </React.StrictMode>
);
