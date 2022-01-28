import Input from 'components/input';
import React, { useState } from 'react';

import { REGEX } from 'utils/regex/regex';

import style from './style.module.scss';

const SignInFormEmail = ({ value, error, setErrorEmail, setEmail }) => {
   const [isFocused, setIsFocused] = useState(false);

   const validatValue = (text, regex) => {
      const result = regex.test(text);

      if (!result) {
         setErrorEmail(false);
      } else {
         setErrorEmail(true);
      }
   };

   const onTextChangeHandler = (e) => {
      const text = e.target.value;

      validatValue(text, REGEX.email);

      setEmail(text);
   };

   const onBlurHandler = () => {
      setIsFocused(false);
   };

   const onFocusHandler = () => {
      setIsFocused(true);
   };

   return (
      <div className={style.login_email__form}>
         <Input
            value={value}
            onTextChangeHandler={onTextChangeHandler}
            onBlurHandler={onBlurHandler}
            onFocusHandler={onFocusHandler}
         >
            <input placeholder="Email" className={style.login_email_input} />
         </Input>

         {!isFocused && error === false ? (
            <div className={style.error__email__input}>
               {'Enter a valid email'}
            </div>
         ) : null}
      </div>
   );
};

export default SignInFormEmail;
