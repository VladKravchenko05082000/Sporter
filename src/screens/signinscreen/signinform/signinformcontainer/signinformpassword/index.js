import Modals from 'components/modals';
import ButtonPurple from 'components/purple-button';
import React, { useState } from 'react';
import style from './style.module.scss';
import { IMAGES } from 'utils/constants/images-constant';

const SignInFormPassword = () => {
   const [modalactive, setModalActive] = useState(false);
   return (
      <div>
         <div className={style.Password_Form}>
            <input className={style.Password__Input} placeholder="Password" />
            <img src={IMAGES.EYE__OPEN} alt="Eye" className={style.Eye} />
         </div>
         <div className={style.Forgot__Password}>
            <p
               className={style.Forgot__Password__Modal__Text}
               onClick={() => setModalActive(true)}
            >
               Forgot password?
            </p>
            <div className={style.Modals__container}>
               <Modals active={modalactive} setActive={setModalActive}>
                  <h2 className={style.ForgotPassword__Title}>
                     Forgot Password?
                  </h2>
                  <p className={style.ForgotPassword__Text}>
                     Please, provide you`re email box
                  </p>
                  <input
                     placeholder="Email"
                     className={style.ForgotPassword__Input}
                  />
                  <ButtonPurple>
                     <span className={style.Button_Text}>Next</span>
                  </ButtonPurple>
                  <img
                     src={IMAGES.CLOSE_BTN}
                     alt="close"
                     className={style.Close}
                     onClick={() => setModalActive(false)}
                  />
               </Modals>
            </div>
         </div>
      </div>
   );
};

export default SignInFormPassword;
