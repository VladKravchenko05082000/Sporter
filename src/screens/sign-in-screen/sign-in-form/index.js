import React from "react";
import { IMAGES } from "utils/images-constant";
import SignInFormContainer from "./sign-in-form-container";
import style from "./style.module.scss";

const SignInForm = () => {
  return (
    <div className={style.signIn__container}>
      <div className={style.signIn__header}>
        <div className={style.signIN__header__logo}>
          <img src={IMAGES.SPORTER__LOGO} alt="Sporter__Logo" />
        </div>
        <div className={style.signIn__header__title}>
          <h2>Admin panel</h2>
        </div>
      </div>
      <div className={style.signIn__form__container}>
        <SignInFormContainer />
      </div>
    </div>
  );
};

export default SignInForm;
