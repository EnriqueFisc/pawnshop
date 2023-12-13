import React, { useState } from "react";
import { Notification } from "../../Notifications/Notification";

export const CreateMaterial = () => {
  const [formValues, setformValues] = useState({
    materialId: "",
    gramsPrice: 0,
    name: "",
  });
  const [notification, setNotification] = useState({
    load: false,
    data: "",
  });

  const { materialId, gramsPrice, name } = formValues;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    fetch("http://167.71.17.236:3000/materials/create", {
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
          setNotification({
            load: true,
            data: data.msg,
            ok: true,
          });
          return;
        }

        setNotification({
          load: true,
          data: data.msg,
          ok: false,
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
    <form className="prices__form-container" onSubmit={handleOnSubmit}>
      {notification.load && (
        <Notification
          msg={notification.data}
          ok={notification.ok}
          setNotification={setNotification}
        />
      )}
      <h3>Crear nuevo producto</h3>
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
        type="text"
        name="name"
        value={name}
        placeholder="Ingresa el nombre del material"
        onChange={handleOnChange}
      />
      <input
        className="prices__form-inputs"
        type="number"
        name="gramsPrice"
        value={gramsPrice}
        placeholder="Ingresa el precio por gramo"
        onChange={handleOnChange}
      />
      <button className="prices__form-button">Crear</button>
    </form>
  );
};
