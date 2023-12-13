import React, { useState } from "react";
import "./styles.css";
import { CreateMaterial } from "./components/CreateMaterial";
import { Notification } from "../Notifications/Notification";

export const Prices = () => {
  const [formValues, setformValues] = useState({
    materialId: "",
    grams: 0,
  });
  const [price, setPrice] = useState("");
  const [notification, setNotification] = useState({
    load: false,
    data: "",
  });

  const { materialId, grams } = formValues;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    fetch("http://167.71.17.236:3000/materials/price", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-type": "application/json",
        Access: token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          setPrice(data.price);
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
    <div className="prices__window-container">
      {notification.load && (
        <Notification
          msg={notification.data}
          setNotification={setNotification}
        />
      )}
      <div className="prices__container">
        <div className="prices__calculation-container">
          <h3>Resultado</h3>
          <div className="prices__calculation">
            <div className="prices__calculation-name">
              <p>Monto del prestamo: {`${price}$`}</p>
            </div>
          </div>
        </div>
        <form className="prices__form-container" onSubmit={handleOnSubmit}>
          <h3>Ingresa productos para calcular</h3>
          <div className="prices__form-material-data">
            <input
              className="prices__form-inputs"
              type="text"
              name="materialId"
              value={materialId}
              placeholder="Ingresa el codigo del material"
              onChange={handleOnChange}
            />
            <input
              className="prices__form-inputs"
              type="number"
              name="grams"
              value={grams}
              placeholder="Ingresa los gramos"
              onChange={handleOnChange}
            />
          </div>
          <button className="prices__form-button">Calcular Precio</button>
        </form>
        <CreateMaterial />
      </div>
    </div>
  );
};
