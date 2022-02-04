import React, { useState } from "react";

import style from "./style.module.scss";

import Input from "components/input";
import ButtonPurple from "components/purple-button";

import { IMAGES } from "utils/images-constant";
import { useDispatch } from "react-redux";
import { requestResetPasswordSendCode } from "store/reducers/auth/action";

const ForgetPassword = ({ setModalActive }) => {
  const [emailModal, setEmailModal] = useState("");
  const [emailModalError, setEmailModalError] = useState("");

  const dispatch = useDispatch();

  const handleRestorePasswordSendCode = () => {
    dispatch(requestResetPasswordSendCode(emailModal))
      .then(() => setEmailModal(""))
      .then(() => setModalActive(false))
      .then(() => window.location.reload())
      .catch((e) => setEmailModalError(e));
  };
  return (
    <div className={style.modals__container}>
      <h2 className={style.forgotPassword__Title}>Forgot Password?</h2>
      <p className={style.forgotPassword__text}>
        Please, provide your email box
      </p>
      <Input
        placeholder="Email"
        type="email"
        setValue={setEmailModal}
        setIsWhite
      />
      {!!emailModalError ? (
        <div className={style.wrong__email}>Wrong email</div>
      ) : null}
      <div className={style.button__container}>
        <ButtonPurple
          text="Next"
          onClick={handleRestorePasswordSendCode}
          disabled={!!emailModal}
        />
      </div>
      <img
        src={IMAGES.CLOSE_BTN}
        alt="close"
        className={style.Close}
        onClick={() => setModalActive(false)}
      />
    </div>
  );
};

export default ForgetPassword;
