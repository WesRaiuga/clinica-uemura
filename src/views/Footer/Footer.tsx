import { Link } from 'react-router-dom';

import style from './Footer.module.css';
import DoctorMiniCard from '../../components/DoctorMiniCard/DoctorMiniCard';
import LogoContainer from '../../components/Logo/LogoContainer';
import MenuLinks from '../../components/MenuLinks/MenuLinks';
import { WHATSAPP_LINK } from '../../utils/constants';
import { DOCTOR_HARUO } from '../../utils/constants';
import { DOCTOR_LEANDRO } from '../../utils/constants';

const Footer = () => {
  return (
    <footer>
      <div className={style.firstRow}>
        <div className={style.clinicInfo}>
          <div className={style.logo}>
            <Link to="/" state={{ scrollTo: "banner" }}>
              <LogoContainer />
            </Link>
          </div>

          <DoctorMiniCard
            photo={DOCTOR_HARUO.photo}
            altText={DOCTOR_HARUO.photoAlt}
            name={DOCTOR_HARUO.name}
            cro={DOCTOR_HARUO.cro}
            specialization={DOCTOR_HARUO.specialization}
          />
          <DoctorMiniCard
            photo={DOCTOR_LEANDRO.photo}
            altText={DOCTOR_LEANDRO.photoAlt}
            name={DOCTOR_LEANDRO.name}
            cro={DOCTOR_LEANDRO.cro}
            specialization={DOCTOR_LEANDRO.specialization}
          />
        </div>

        <MenuLinks className={style.footerLinks} />

        <div className={style.socialIcons}>
          <Link to={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" title="Whatsapp">
            <i className="fa-brands fa-whatsapp"></i>
            <span className={style.socialText}>
              (11) 98742-8888
            </span>
          </Link>
          <Link to="https://www.instagram.com/clinica.uemura/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <i className="fa-brands fa-instagram"></i>
            <span className={style.socialText}>
              @clinica.uemura
            </span>
          </Link>
          <Link to="mailto:contato@clinicauemura.com.br" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fa-regular fa-at"></i>
            <span className={style.socialText}>
              contato@clinicauemura.com.br
            </span>
          </Link>
        </div>
      </div>

      <div>
        <hr />

        <div className={style.rightsInfo}>
          <p>Clínica Uemura</p>
          <p>© 2026. Todos os direitos reservados.</p>
        </div>

        <div className={style.devInfo}>
          <p>
            Desenvolvido por: <span> </span>
            <Link to="https://www.linkedin.com/in/wesraiuga/" target="_blank" rel="noopener noreferrer">
              Weslley Aguiar
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
