import React from 'react';
import SignInForm from './sign-in-form';
import style from './style.module.scss';

const SignInScreen = () => {
   return (
      <div className={style.signIn__container}>
         <SignInForm />
      </div>
   );
};

export default SignInScreen;
