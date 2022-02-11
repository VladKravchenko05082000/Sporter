import React, { useState } from "react";

import Input from "components/input";
import LoaderBox from "components/loaderBox";
import ButtonPurple from "components/purple-button";

import { IMAGES } from "utils/images-constant";
import { STATUSES } from "utils/status-constant/status-constant";

import style from "./style.module.scss";
import {
  ConfrimErrorMassage,
  RegexErrorMassage,
} from "components/modals/error-modal-step-second";

const ForgetPasswordSecondStep = ({
  closeModal,
  fetchStatus,
  setFetchStatus,
}) => {
  const { READY, PENDING } = STATUSES;

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFocusedModal, setIsFocusedModal] = useState(false);
  const [errorCompareHandler, setErrorCompareHandler] = useState(false);

  const equality = (!!newPassword,
  !!confirmPassword && newPassword === confirmPassword)
    ? true
    : false; //first, we compare input value by boolean condition, then we compare if the strings are equal

  const regexError =
    !isFocusedModal && errorCompareHandler && !newPassword && !confirmPassword; //if focus on input and regex template is false

  const confirmError = !isFocusedModal && errorCompareHandler && !equality; //if value in both input not compare

  const comprasionPassword = () => {
    setFetchStatus(PENDING);
    setTimeout(() => {
      setFetchStatus(READY);
      closeModal();
      window.location.reload();
    }, 2000);
  };

  return (
    <div className={style.modals__container}>
      <h2 className={style.forgotPassword__Title}>Enter the security code</h2>
      <p className={style.forgotPassword__text}>
        <span>
          We just sent security code to your email box. Please, check your email
        </span>
        <span>box and provide this code to the field below.</span>
      </p>
      <div>
        <div className={style.input__container}>
          <Input
            placeholder="Enter a new password"
            type="password"
            rightIconBlack
            setValue={setNewPassword}
            setIsWhite
            onFocusParentHandler={setIsFocusedModal}
            isUseInputError={false}
            setErrorCompareHandler={setErrorCompareHandler}
          />
        </div>
        <div className={style.input__container}>
          <Input
            placeholder="Confirm a new password"
            type="password"
            rightIconBlack
            setValue={setConfirmPassword}
            setIsWhite
            onFocusParentHandler={setIsFocusedModal}
            isUseInputError={false}
            setErrorCompareHandler={setErrorCompareHandler}
          />
        </div>
      </div>
      {regexError ? <RegexErrorMassage /> : null}
      {confirmError ? <ConfrimErrorMassage /> : null}
      {fetchStatus === PENDING ? <LoaderBox /> : null}
      <div className={style.button__container}>
        <ButtonPurple
          text="Save"
          disabled={equality}
          onClick={comprasionPassword}
        />
      </div>
      <img
        src={IMAGES.CLOSE_BTN}
        alt="close"
        className={style.Close}
        onClick={closeModal}
      />
    </div>
  );
};

export default ForgetPasswordSecondStep;
