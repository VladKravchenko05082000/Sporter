import React from "react";
import "./style.scss";

const ButtonPurple = ({ disabled, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className={disabled ? "Button white" : "Button"}
      disabled={disabled ? "" : "disable"}
    >
      <span>{text}</span>
    </button>
  );
};

export default ButtonPurple;
