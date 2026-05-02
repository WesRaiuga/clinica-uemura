import { Link } from 'react-router-dom';

import UnderlinedTitle from '@/components/UnderlinedTitle/UnderlinedTitle';
import { WHATSAPP_LINK } from '@/utils/constants';

import style from './ContactSection.module.css';

const ContactSection = () => {
  const contactData = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: '(11) 98742-8888',
      link: WHATSAPP_LINK,
      icon: 'fa-brands fa-whatsapp',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      value: '@clinica.uemura',
      link: 'https://www.instagram.com/clinica.uemura/',
      icon: 'fa-brands fa-instagram',
    },
    {
      id: 'email',
      label: 'E-mail',
      value: 'contato@clinicauemura.com.br',
      link: 'mailto:contato@clinicauemura.com.br',
      icon: 'fa-regular fa-envelope',
    },
  ];

  return (
    <section id="contact" className={style.contactSection}>
      <div className={style.container}>
        <div className={style.content}>
          <UnderlinedTitle align="left">Entre em Contato</UnderlinedTitle>
          <p className={style.description}>
            Estamos à disposição para tirar suas dúvidas, ouvir sugestões e agendar sua consulta. 
            Escolha o canal de sua preferência.
          </p>
        </div>

        <div className={style.infoList}>
          {contactData.map((item) => (
            <Link 
              key={item.id} 
              to={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={style.infoItem}
              title={item.label}
            >
              <div className={style.iconWrapper}>
                <i className={item.icon}></i>
              </div>
              <div className={style.infoText}>
                <h4>{item.label}</h4>
                <p>{item.value}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
