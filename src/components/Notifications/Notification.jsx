import React, { useEffect } from "react";
import "./style.css";

export const Notification = ({ msg, ok, setNotification }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setNotification({
        load: false,
        msg: "",
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`notification__container ${ok ? "success" : "error"}`}>
      <p>Error:</p>
      <span>{msg}</span>
    </div>
  );
};
