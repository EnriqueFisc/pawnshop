import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const LoginFormContaine = () => {
  const navigate = useNavigate();
  const [formValues, setformValues] = useState({
    email: "",
    password: "",
  });
  const [notification, setNotification] = useState({
    load: false,
    data: "",
  });

  const { email, password } = formValues;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formValues);

    fetch("http://localhost:4000/users/auth", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          localStorage.setItem("token", data.token);
          navigate("/prices");
          return;
        }

        setNotification({
          load: true,
          data: data.msg,
        });
      });
  };

  const handleOnChange = (e) => {
    setformValues((prevFormValues) => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="Login__form-container" onSubmit={handleOnSubmit}>
      {notification.load && <div>{notification.data}</div>}
      <input
        className="login__login-input"
        type="email"
        name="email"
        value={email}
        placeholder="Ingrese su correo electrónico"
        onChange={handleOnChange}
        autoComplete="off"
      />
      <input
        className="login__login-input"
        type="password"
        name="password"
        value={password}
        placeholder="Ingrese su contraseña"
        onChange={handleOnChange}
      />
      <button className="login__login-button">Login</button>
    </form>
  );
};
