import React, { useState } from "react";
import { LoginFormContaine } from "./components/Login";
import "./style.css";
import { RegisterFormContaine } from "./components/Register";

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleOnCLickChangeForm = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="login__container">
      <div className="login__container-leftside">
        {isLogin ? (
          <div className="loginfrom__container">
            <img className="image__logo" src="/public/nmp_log.png" alt="logo" />
            <div className="loginfrom__container-title">
              <h2>Inicia Sesión</h2>
            </div>
            <LoginFormContaine />
            <button
              className="login__login-button-register"
              onClick={handleOnCLickChangeForm}
            >
              Registrate
            </button>
          </div>
        ) : (
          <>
            <div className="loginfrom__container">
              <img
                className="image__logo"
                src="/public/nmp_log.png"
                alt="logo"
              />
              <div className="loginfrom__container-title">
                <h2>Registrate</h2>
              </div>
              <RegisterFormContaine />
              <button
                className="login__login-button-register"
                onClick={handleOnCLickChangeForm}
              >
                Ya tengo una cuenta
              </button>
            </div>
          </>
        )}
      </div>
      <div className="login__container-rightside"></div>
    </div>
  );
};
