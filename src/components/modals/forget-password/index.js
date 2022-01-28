import React, { useState } from "react";

import style from "./style.module.scss";

import Input from "components/input";
import ButtonPurple from "components/purple-button";

import { IMAGES } from "utils/images-constant";

const ForgetPassword = ({ setModalActive }) => {
  // const { status, error } = useAppSelector((state) => state.signin);
  const [emailModal, setEmailModal] = useState("");

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
      <div className={style.button__container}>
        <ButtonPurple
          text="Next"
          // isLoading={status === "pending"}
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
