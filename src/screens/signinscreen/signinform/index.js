import React from 'react';
import { IMAGES } from 'utils/constants/images-constant';
import SignInFormContainer from './signinformcontainer';
import style from './style.module.scss';

const SignInForm = () => {
   return (
      <div>
         <div className={style.SignIn__Header}>
            <div className={style.SignIN__Header__Logo}>
               <img src={IMAGES.SPORTER__LOGO} alt="Sporter__Logo" />
            </div>
            <div className={style.SignIN__Header__Title}>
               <h2>Admin panel</h2>
            </div>
         </div>
         <div className={style.SignIn__Form__Container}>
            <SignInFormContainer />
         </div>
      </div>
   );
};

export default SignInForm;
