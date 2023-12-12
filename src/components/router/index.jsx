import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Auth } from "../Auth";
import { Prices } from "../price";
import { ContainerRoutes } from "./Router";
export const MainRouter = () => {
  return (
    <Router>
      <ContainerRoutes />
    </Router>
  );
};
