import React, { useState } from "react";
import { useSelector } from "react-redux";

import Input from "components/input";
import LoaderBox from "components/loaderBox";
import ButtonPurple from "components/purple-button";

import { IMAGES } from "utils/images-constant";
import { STATUSES } from "utils/status-constant/status-constant";

import style from "./style.module.scss";

const ForgetPasswordSecondStep = ({ closeModal }) => {
  const { READY, PENDING } = STATUSES;
  const { status } = useSelector((state) => state.authReducer);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fetchStatus, setFetchStatus] = useState(status);
  const [isFocusedModal, setIsFocusedModal] = useState(false);

  const compare = (!!newPassword,
  !!confirmPassword && newPassword === confirmPassword)
    ? true
    : false; //first, we compare input value by boolean condition, then we compare if the strings are equal

  const comprasionPassword = () => {
    setFetchStatus(PENDING);
    setTimeout(() => {
      setFetchStatus(READY);
      closeModal();
      window.location.reload();
    }, 2000);
  };

  console.log(fetchStatus);

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
            onFocusOff={true}
            setIsFocusedModal={setIsFocusedModal}
          />
        </div>
        <div className={style.input__container}>
          <Input
            placeholder="Confirm a new password"
            type="password"
            rightIconBlack
            setValue={setConfirmPassword}
            setIsWhite
            onFocusOff={true}
            setIsFocusedModal={setIsFocusedModal}
          />
        </div>
      </div>

      {!isFocusedModal && !compare ? (
        <div className={style.error__massage}>
          <div>Введите пароль и подтвердите его</div>
          <br />
          <div>
            Пароль должен содержать больше 8 символов, заглавные буквы, цифры и
            специальные знаки: !#$%^&*
          </div>
        </div>
      ) : null}
      {fetchStatus === PENDING ? <LoaderBox /> : null}
      <div className={style.button__container}>
        <ButtonPurple
          text="Save"
          disabled={compare}
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
