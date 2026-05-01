import React from 'react';
import styles from './FloatingButtonArea.module.css';
import FloatingButton from '../../components/FloatingButton/FloatingButton';

import { WHATSAPP_LINK } from '../../utils/constants';

const FloatingButtonArea: React.FC = () => {
  return (
    <div className={styles.floatArea}>
        <FloatingButton 
            link={{ href: WHATSAPP_LINK, ariaLabel: "Abrir conversa no WhatsApp" }}
            bgColor="#25D366"
        >
            <i className="fa-brands fa-whatsapp"></i>
        </FloatingButton>
        {/* <FloatingButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
            <i className="fa-solid fa-chevron-up" style={{fontSize: '25px'}}></i>
        </FloatingButton> */}
    </div>
  )
};

export default FloatingButtonArea;