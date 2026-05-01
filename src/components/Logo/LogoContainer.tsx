import React from 'react';
import style from './LogoContainer.module.css';
import logotipo from "../../assets/img/logo.png";

const LogoContainer: React.FC = () => {
  return (
    <div className={style.logoContainer}>
      <img src={logotipo} alt="logotipo da Clínica Uemura" />
      <div>
        <p>CLÍNICA</p>
        <p>UEMURA</p>
      </div>
    </div>
  )
}

export default LogoContainer;