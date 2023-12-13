import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const RegisterFormContaine = () => {
  const navigate = useNavigate();
  const [formValues, setformValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    lastname: "",
  });
  const [notification, setNotification] = useState({
    load: false,
    data: "",
  });

  const { email, password, passwordConfirm, name, lastname } = formValues;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setNotification({
        load: true,
        data: "Las contraseñas deben ser iguales",
      });
      return;
    }
    for (const value in formValues) {
      if (!formValues[value]) {
        setNotification({
          load: true,
          data: "Por favor llena todos los campos",
        });
        return;
      }
    }
    fetch("http://167.71.17.236:4000/users", {
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
        type="text"
        name="name"
        value={name}
        placeholder="Ingrese sus nombres"
        onChange={handleOnChange}
        autoComplete="off"
      />
      <input
        className="login__login-input"
        type="text"
        name="lastname"
        value={lastname}
        placeholder="Ingrese sus apellidos"
        onChange={handleOnChange}
        autoComplete="off"
      />
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
      <input
        className="login__login-input"
        type="password"
        name="passwordConfirm"
        value={passwordConfirm}
        placeholder="Confirme su contraseña"
        onChange={handleOnChange}
      />
      <button className="login__login-button">Registrarme</button>
    </form>
  );
};
