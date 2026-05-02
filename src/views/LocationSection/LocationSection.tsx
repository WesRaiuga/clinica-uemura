import UnderlinedTitle from "@/components/UnderlinedTitle/UnderlinedTitle";

import style from "./LocationSection.module.css";

const LocationSection = () => {
  const address = "Rua Engenheiro Paulo Mauriti, 37 - Santana, São Paulo - SP, 02460-120";
  const mapsUrl = "https://maps.app.goo.gl/hfEVjsHYbvzAQu3r5";
  
  // Google Maps Embed URL for address
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3659.2614518447044!2d-46.6428686!3d-23.4870905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7ba6758218b%3A0xa0756091a0197764!2sCl%C3%ADnica%20Uemura!5e0!3m2!1spt-BR!2sbr!4v1777735737640!5m2!1spt-BR!2sbr";

  return (
    <section id="location" className={style.locationSection}>
      <div className={style.container}>
        <div className={style.content}>
          <UnderlinedTitle align="left">Nossa Localização</UnderlinedTitle>
          <p className={style.description}>
            Com uma ótima localização, a Clínica Uemura oferece fácil acesso e uma infraestrutura moderna para o seu conforto e bem-estar.
          </p>
          
          <div className={style.infoList}>
            <a 
              href={mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={style.infoItem}
            >
              <div className={style.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className={style.infoText}>
                <h4>Endereço</h4>
                <p>{address}</p>
              </div>
            </a>
          </div>
        </div>

        <div className={style.mapWrapper}>
          <iframe 
            src={embedUrl}
            className={style.mapFrame}
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Clínica Uemura"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
