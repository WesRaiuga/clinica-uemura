import React from 'react';

import DoctorCard from '@/components/DoctorCard/DoctorCard';
import UnderlinedTitle from '@/components/UnderlinedTitle/UnderlinedTitle';
import { DOCTOR_HARUO, DOCTOR_LEANDRO } from '@/utils/constants';

import style from './AboutDoctorsSection.module.css';

const DOCTORS = [DOCTOR_HARUO, DOCTOR_LEANDRO];

const AboutDoctorsSection: React.FC = () => {
  return (
    <section id="about-doctors" className={style.aboutDoctorsSection}>
      <UnderlinedTitle>Nossos Profissionais</UnderlinedTitle>

      <div className={style.doctorsList}>
        {DOCTORS.map((doctor) => (
          <DoctorCard
            key={doctor.name}
            name={doctor.name}
            cro={doctor.cro}
            specialization={doctor.specialization}
            bio={doctor.bio}
            quote={doctor.quote}
            photo={doctor.photo}
            photoAlt={doctor.photoAlt}
            reversed={doctor.reversed}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutDoctorsSection;
