import React from 'react';

import implantImg from '@/assets/img/implant.png';
import orthoImg from '@/assets/img/orthodontics.png';
import pediatricImg from '@/assets/img/pediatric.png';
import whiteningImg from '@/assets/img/whitening.png';
import Card from '@/components/Card/Card';
import UnderlinedTitle from '@/components/UnderlinedTitle/UnderlinedTitle';

import style from './ServicesSection.module.css';

const services = [
  {
    title: 'Implantes Dentários',
    description: 'A solução definitiva para a perda de dentes, utilizando tecnologia de ponta para restaurar sua função mastigatória e estética.',
    image: implantImg,
  },
  {
    title: 'Ortodontia Moderna',
    description: 'Aparelhos estéticos e alinhadores invisíveis para corrigir o posicionamento dos dentes com conforto e discrição.',
    image: orthoImg,
  },
  {
    title: 'Clareamento Dental',
    description: 'Tratamentos seguros e eficazes para devolver o brilho natural ao seu sorriso, com resultados rápidos e duradouros.',
    image: whiteningImg,
  },
  {
    title: 'Odontopediatria',
    description: 'Cuidado especializado e lúdico para a saúde bucal das crianças, criando uma experiência positiva desde cedo.',
    image: pediatricImg,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services">
      <UnderlinedTitle>Nossos Serviços</UnderlinedTitle>
      <div className={style.grid}>
        {services.map((service, index) => (
          <div key={index} className={style.cardWrapper}>
            <Card
              title={service.title}
              description={service.description}
              image={service.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
