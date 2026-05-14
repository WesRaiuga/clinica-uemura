import React from 'react';

import clinicBathroom from '@/assets/img/banheiro.jpg';
import clinicFront from '@/assets/img/clinica-uemura-fachada.jpg';
import GallerySlider from '@/components/GallerySlider/GallerySlider';
import UnderlinedTitle from '@/components/UnderlinedTitle/UnderlinedTitle';

import style from './AboutClinicSection.module.css';

const clinicImages = [
  clinicFront,
  clinicBathroom,
  'https://placehold.co/600x450/cbd5e1/0f172a?text=Recep%C3%A7%C3%A3o',
  'https://placehold.co/600x450/e2e8f0/1e293b?text=Consult%C3%B3rio+1',
];

const AboutSection: React.FC = () => {
  return (
    <section id="about-clinic" className={style.aboutSection}>
      {/* Clínica Introduction */}
      <div className={style.clinicIntro}>
        <UnderlinedTitle>Conheça nossa clínica</UnderlinedTitle>

        <div className={style.clinicContent}>
          {/* Clinic Images */}
          <div className={style.clinicImageWrapper}>
            <GallerySlider images={clinicImages} className={style.clinicGallery} />
          </div>

          {/* Clinic Info */}
          <div className={style.clinicInfo}>
            <p className={style.clinicText}>
              A Clínica Uemura é dedicada à excelência em odontologia, combinando
              tecnologia de ponta com um atendimento humanizado. Nosso objetivo é
              não apenas cuidar da sua saúde bucal, mas transformar sua experiência
              no dentista em algo positivo e acolhedor.
            </p>

            <p className={style.clinicText}>
              Fundada com o propósito de oferecer tratamentos preventivos e
              restauradores com a máxima qualidade, a Clínica Uemura se destaca
              pelo comprometimento com o bem-estar de cada paciente.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className={style.divider}></div>
    </section>
  );
};

export default AboutSection;
