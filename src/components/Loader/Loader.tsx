import React from 'react';

import LogoContainer from '@/components/Logo/LogoContainer';

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
      <LogoContainer />
    </div>
  )
}

export default Loader;