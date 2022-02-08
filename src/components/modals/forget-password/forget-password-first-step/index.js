import React, { useState } from "react";

import style from "./style.module.scss";

import Input from "components/input";
import ButtonPurple from "components/purple-button";

import { IMAGES } from "utils/images-constant";
import { useDispatch, useSelector } from "react-redux";
import { requestResetPasswordSendCode } from "store/reducers/auth/action";
import { STATUSES } from "utils/status-constant/status-constant";
import LoaderBox from "components/loaderBox";

const ForgetPasswordFirstStep = ({ closeModal, setStep }) => {
  const { READY, PENDING } = STATUSES;
  const { status } = useSelector((state) => state.authReducer);

  const [emailModal, setEmailModal] = useState("");
  const [emailModalError, setEmailModalError] = useState("");
  const [fetchStatus, setFetchStatus] = useState(status);

  const dispatch = useDispatch();

  const handleRestorePasswordSendCode = () => {
    setFetchStatus(PENDING);
    dispatch(requestResetPasswordSendCode(emailModal))
      .then(() => {
        setEmailModal(emailModal);
        setFetchStatus(READY);
        setStep(1);
      })
      .catch((e) => {
        setEmailModalError(e);
        setEmailModal("");
        setFetchStatus(READY);
      });
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
      {emailModalError && !emailModal ? (
        <div className={style.wrong__email}>No such user</div>
      ) : null}
      {fetchStatus === PENDING ? <LoaderBox /> : null}
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
        onClick={closeModal}
      />
    </div>
  );
};

export default ForgetPasswordFirstStep;
