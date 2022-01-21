import React from 'react';
import SignInForm from './signinform';
import style from './style.module.scss';

const SignInScreen = () => {
   return (
      <div className={style.SignIn__container}>
         <SignInForm />
      </div>
   );
};

export default SignInScreen;
