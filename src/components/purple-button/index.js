import React from 'react';
import style from './style.module.scss';

const ButtonPurple = ({ children }) => {
   return <div className={style.Button}>{children}</div>;
};

export default ButtonPurple;
