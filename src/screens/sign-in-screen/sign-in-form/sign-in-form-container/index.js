import React, { useState } from "react";
import { useDispatch } from "react-redux";

import ButtonPurple from "components/purple-button";
import Input from "components/input";
import Modals from "components/modals";
import ForgetPasswordFirstStep from "components/modals/forget-password/forget-password-first-step";

import { requestLogin } from "store/reducers/auth/action";

import style from "./style.module.scss";
import ForgetPasswordSecondStep from "components/modals/forget-password/forget-password-second-step";

const SignInFormContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [signInError, setSignInError] = useState("");
  const [step, setStep] = useState(0);

  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(requestLogin(email, password)).catch((e) => setSignInError(e));
  };

  const closeModal = () => {
    setStep(0);
    setModalActive(false);
  };

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
      {!!signInError ? (
        <div className={style.wrong__password__or__email}>
          Wrong password or email
        </div>
      ) : null}
      <div className={style.signIn__button}>
        <ButtonPurple
          text="Sign In"
          disabled={!!email && !!password}
          onClick={handleSignIn}
        />
      </div>
      {step === 0 ? (
        <Modals active={modalActive} setActive={setModalActive}>
          <ForgetPasswordFirstStep closeModal={closeModal} setStep={setStep} />
        </Modals>
      ) : (
        <Modals active={modalActive} setActive={setModalActive}>
          <ForgetPasswordSecondStep
            closeModal={closeModal}
            setModalActive={setModalActive}
          />
        </Modals>
      )}
    </div>
  );
};

export default SignInFormContainer;
