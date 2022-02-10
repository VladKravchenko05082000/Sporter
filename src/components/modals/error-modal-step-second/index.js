import React from "react";

import style from "./style.module.scss";

export const RegexErrorMassage = () => {
  return (
    <div className={style.error__massage}>
      Пароль должен содержать больше 8 символов, заглавные буквы, цифры и
      специальные знаки: !#$%^&*
    </div>
  );
};

export const ConfrimErrorMassage = () => {
  return (
    <div className={style.error__massage}>
      <div>Введите пароль и подтвердите его </div>
    </div>
  );
};
