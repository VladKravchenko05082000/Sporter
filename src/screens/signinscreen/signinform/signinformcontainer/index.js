import ButtonPurple from 'components/purple-button';
import React from 'react';
import SignInFormEmailLogin from './signinformemail-login';
import SignInFormPassword from './signinformpassword';
import style from './style.module.scss';

const SignInFormContainer = () => {
   return (
      <div className={style.SignIn__Form__Container}>
         <div className={style.SignIn__Form__Title}>
            <h1>Sign In</h1>
         </div>
         <div className={style.SignIn__Form__Input__Container}>
            <div className={style.SignIn__Form__Email__Login}>
               <SignInFormEmailLogin />
            </div>
            <div className={style.SignIn__Form__Password}>
               <SignInFormPassword />
            </div>
         </div>
         <div>
            <ButtonPurple>
               <p>SignIn</p>
            </ButtonPurple>
         </div>
      </div>
   );
};

export default SignInFormContainer;
