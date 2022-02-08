import React from "react";

import style from "./style.module.scss";

const EyeIconBlack = ({ toggleIcon }) => {
  return (
    <label className={style.eye__label}>
      <input className={style.eye} type="checkbox" />
      <span onClick={() => toggleIcon()}></span>
    </label>
  );
};

export default EyeIconBlack;
