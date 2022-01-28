import Modals from 'components/modals';
import ButtonPurple from 'components/purple-button';
import React, { useState } from 'react';
import style from './style.module.scss';
import { IMAGES } from 'utils/images-constant';
import { REGEX } from 'utils/regex/regex';
import PasswordInput from 'components/input';
import ModalInput from 'components/input';
import ForgetPassword from 'components/modals/forget-password';

const SignInFormPassword = ({
   value,
   setPassword,
   setErrorPassword,
   error,
}) => {
   const [modalActive, setModalActive] = useState(false);

   const [eyeActive, setEyeActive] = useState(false);

   const [isFocused, setIsFocused] = useState(false);

   const [emailPopUp, setEmailPopUp] = useState('');

   const [errorEmailPopUp, setErrorEmailPopUp] = useState(false);

   const validatValue = (text, regex) => {
      const result = regex.test(text);

      if (!result) {
         setErrorPassword(false);
      } else {
         setErrorPassword('Use valid password');
      }
   };

   const onTextChangeHandler = (e) => {
      const text = e.target.value;

      validatValue(text, REGEX.password);

      setPassword(text);
   };

   const validatValuePopUp = (text, regex) => {
      const result = regex.test(text);
      if (!result) {
         setErrorEmailPopUp(false);
      } else {
         setErrorEmailPopUp('Use valid email');
      }
   };

   const onTextChangeHandlerPopUp = (e) => {
      const text = e.target.value;

      validatValuePopUp(text, REGEX.email);

      setEmailPopUp(text);
   };

   const onBlurHandler = () => {
      setIsFocused(false);
   };

   const onFocusHandler = () => {
      setIsFocused(true);
   };

   const toggleIcon = () => {
      if (eyeActive === false) {
         setEyeActive(true);
      } else {
         setEyeActive(false);
      }
   };

   return (
      <div>
         <div className={style.password_form}>
            <PasswordInput
               value={value}
               onTextChangeHandler={onTextChangeHandler}
               onBlurHandler={onBlurHandler}
               onFocusHandler={onFocusHandler}
            >
               <input
                  className={style.password__input}
                  type={eyeActive ? 'text' : 'password'}
                  placeholder="Password"
               />
            </PasswordInput>

            {!isFocused && error === false ? (
               <div className={style.error__password__input}>
                  {'Enter the password'}
               </div>
            ) : null}

            <label className={style.eye__label}>
               <input
                  className={style.eye}
                  type="checkbox"
                  onChange={() => toggleIcon()}
               />
               <span></span>
            </label>
         </div>

         <div className={style.forgot__password}>
            <p
               className={style.forgot__password__modal__text}
               onClick={() => setModalActive(true)}
            >
               Forgot password?
            </p>
            <div className={style.modals__container}>
               {
                  <Modals active={modalActive} setActive={setModalActive}>
                     <ForgetPassword
                        emailPopUp={emailPopUp}
                        onTextChangeHandlerPopUp={onTextChangeHandlerPopUp}
                        onBlurHandler={onBlurHandler}
                        onFocusHandler={onFocusHandler}
                        isFocused={isFocused}
                     />
                  </Modals>
               }
            </div>
         </div>
      </div>
   );
};

export default SignInFormPassword;
