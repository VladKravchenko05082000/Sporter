import React, { useState } from "react";

import ButtonPurple from "components/purple-button";
import Input from "components/input";
import Modals from "components/modals";
import ForgetPassword from "components/modals/forget-password";

import style from "./style.module.scss";

const SignInFormContainer = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={style.signIn__form__container}>
      <div className={style.signIn__form__title}>
        <h1>Sign In</h1>
      </div>
      <div className={style.signIn__form__input__container}>
        <div className={style.signIn__form__email__login}>
          <div className={style.login_email__form}>
            <Input placeholder="Email" type="email" setValue={setEmail} />
          </div>
        </div>
        <div className={style.signIn__form__password}>
          <div>
            <div className={style.password_form}>
              {
                <Input
                  placeholder="Password"
                  type="password"
                  rightIcon
                  setValue={setPassword}
                />
              }
            </div>

            <div className={style.forgot__password}>
              <p
                className={style.forgot__password__modal__text}
                onClick={() => setModalActive(true)}
              >
                Forgot password?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ButtonPurple text="Sign In" disabled={!!email && !!password} />
      </div>

      <Modals active={modalActive} setActive={setModalActive}>
        <ForgetPassword setModalActive={setModalActive} />
      </Modals>
    </div>
  );
};

export default SignInFormContainer;
