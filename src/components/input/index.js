import React, { useState } from "react";

import { validate } from "utils/validate/validate";

import EyeIcon from "components/eye-icon";

import style from "./style.module.scss";
import EyeIconBlack from "components/eye-icon-black";

const errors = {
  email: "Введите валидный Email",
  password:
    "Пароль должен содержать больше 8 символов, заглавные буквы, цифры и специальные знаки: !#$%^&*",
};

const Input = ({
  placeholder,
  type, // email, password
  setValue,
  rightIcon, // true or false, if true next to input appear IconComponent
  rightIconBlack,
  setIsWhite,
  setIsFocusedModal,
  onFocusOff,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [eyeActive, setEyeActive] = useState(false);
  const [innerValue, setInnerValue] = useState("");

  const [error, setError] = useState("");

  const isPassword = type === "password";

  const validateValue = (value) => {
    const result = validate(value, type);

    if (!result && !!value) {
      setError(errors[type]);
    } else {
      setError("");
    }

    return result;
  };

  const onTextChangeHandler = ({ target: { value } }) => {
    setInnerValue(value);

    const isValidValue = validateValue(value);

    if (isValidValue) {
      setValue(value);
    } else {
      setValue("");
    }
  };

  const onBlurHandler = () => {
    setIsFocused(false);
    setIsFocusedModal(false);
  };

  const onFocusHandler = () => {
    setIsFocused(true);
    setIsFocusedModal(true);
  };

  const toggleIcon = () => {
    setEyeActive(!eyeActive);
  };

  return (
    <div className={style.input__container}>
      <input
        type={eyeActive || !isPassword ? "text" : "password"}
        placeholder={placeholder}
        value={innerValue}
        className={
          setIsWhite ? style.sighIn__input__white : style.sighIn__input
        }
        onChange={onTextChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />
      {!isFocused && !!error && !onFocusOff ? (
        <div className={style.error__massage}>{error}</div>
      ) : null}
      {rightIcon ? (
        <EyeIcon toggleIcon={toggleIcon} eyeActive={eyeActive} />
      ) : null}
      {rightIconBlack ? (
        <EyeIconBlack toggleIcon={toggleIcon} eyeActive={eyeActive} />
      ) : null}
    </div>
  );
};

export default Input;
