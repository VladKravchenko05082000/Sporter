import React from "react";
import style from "./style.module.scss";

const NotFoundPage = () => {
  return (
    <div className={style.not_found}>
      <span>404</span>
      <h1>Page not found</h1>
    </div>
  );
};

export default NotFoundPage;
