import React from 'react';
// import logo from '../../assets/img/logos/logotipo-principal-1.png';
import style from './Loader.module.css';

const Loader: React.FC<{ loading: boolean }> = ({loading}) => {
  return (
    <div
      style={{
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? 'auto' : 'none',
      }}
      className={style.loaderContainer}
    >
      <p>UEMURA</p>
      {/* <img 
        className={style.loaderImage}
        src={logo} alt="logotipo da psicóloga Dayana Mendes" /> */}
    </div>
  )
}

export default Loader;