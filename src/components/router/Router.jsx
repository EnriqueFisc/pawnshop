import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Auth } from "../Auth";
import { Prices } from "../price";

export const ContainerRoutes = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://167.71.17.236:5000/token/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.ok) {
            navigate("/prices");
          }
        });
    }
  }, []);

  return (
    <div>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/prices" element={<Prices />} />
        <Route path="/" element={<Auth />} />
        <Route path="*" element={<Auth />} />
      </Routes>
    </div>
  );
};
