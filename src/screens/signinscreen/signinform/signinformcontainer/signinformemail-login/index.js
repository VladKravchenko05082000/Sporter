import React from 'react';
import style from './style.module.scss';

const SignInFormEmailLogin = () => {
   return (
      <div className={style.Login_Email__Form}>
         <input placeholder="Email" className={style.Login_Email_Input} />
      </div>
   );
};

export default SignInFormEmailLogin;
