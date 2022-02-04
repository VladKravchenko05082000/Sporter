import React from "react";
import { TailSpin } from "react-loader-spinner";
import style from "./style.module.scss";

const LoaderBox = () => {
  return (
    <div className={style.loader}>
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default LoaderBox;
