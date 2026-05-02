import style from "./Hero.module.css";
import logo from "../../assets/img/logo.png";
import bgImage from "../../assets/img/monte-fuji.gif";
import { WHATSAPP_LINK } from "@/utils/constants";

const Hero = () => {
  return (
    <section 
      id="hero2" 
      className={style.heroContainer}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={style.overlay}></div>
      
      <div className={style.content}>
        <div className={style.textContent}>
          <img src={logo} alt="Clínica Uemura Logo" className={style.logo} />
          
          <h1 className={style.title}>
            <span className={style.highlight}>Odontologia</span> de excelência para o seu sorriso
          </h1>
          
          <p className={style.description}>
            Cuidamos da sua saúde bucal com humanidade, tecnologia avançada e muito amor. 
            Venha conhecer a Clínica Uemura e transforme sua experiência no dentista.
          </p>
          
          <div className={style.ctaGroup}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={style.primaryButton}>Agendar Consulta</a>
            <a href="#services" className={style.secondaryButton}>Nossos Serviços</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
