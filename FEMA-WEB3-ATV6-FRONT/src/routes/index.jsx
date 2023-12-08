import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Login } from "../pages/Login";
import { Perfil } from "../pages/Perfil";
import { Register } from "../pages/Register";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Login />}>
      <Route path="/" element={<Login />} />,
      <Route path="/register" element={<Register />} />,
      <Route path="/perfil" element={<Perfil />} />
      {/* <Route path="*" element={<Login />} /> */}
    </Route>
  )
);
