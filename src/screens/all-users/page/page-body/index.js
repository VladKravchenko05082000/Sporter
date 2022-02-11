import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "utils/routes-constant/constant-routes";

import style from "./style.module.scss";

const PageBody = () => {
  return (
    <div>
      <Link to={ROUTES.USER_INFO + "/:userId/:tabItem/"} className={style.some}>
        Тут редирект=)
      </Link>
    </div>
  );
};

export default PageBody;
