import React from 'react';
import style from './Loader.module.css';
import LogoContainer from "../Logo/LogoContainer";

const Loader: React.FC<{ loading: boolean }> = ({loading}) => {
  return (
    <div
      style={{
        opacity: loading ? 1 : 0,
        pointerEvents: loading ? 'auto' : 'none',
      }}
      className={style.loaderContainer}
    >
      <LogoContainer />
    </div>
  )
}

export default Loader;