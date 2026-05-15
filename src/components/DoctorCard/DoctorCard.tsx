import React from 'react';

import QuoteCard from '@/components/QuoteCard/QuoteCard';
import { cn } from '@/utils/cn';

import style from './DoctorCard.module.css';

interface DoctorCardProps {
  name: string;
  cro: string;
  specialization: string;
  bio: string;
  quote: string;
  photo?: string;
  photoAlt?: string;
  /** Se true, inverte a ordem (imagem à direita no desktop) */
  reversed?: boolean;
  className?: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  cro,
  specialization,
  bio,
  quote,
  photo,
  photoAlt,
  reversed = false,
  className,
}) => {
  return (
    <article className={cn(style.doctorCard, reversed && style.reversed, className)}>
      {/* Image + Quote overlay */}
      <div className={style.imageWrapper}>
        {photo ? (
          <img
            src={photo}
            alt={photoAlt}
            className={style.image}
          />
        ) : (
          <div className={style.imagePlaceholder} aria-hidden="true">
            <span>📷</span>
          </div>
        )}
        <div className={style.quoteOverlay}>
          <QuoteCard quote={quote} />
        </div>
      </div>

      {/* Content */}
      <div className={style.content}>
        <p className={style.specialty}>{specialization}</p>
        <h3 className={style.name}>{name}</h3>
        <p className={style.cro}>{cro}</p>
        <div className={style.divider} aria-hidden="true" />
        <p className={style.bio}>{bio}</p>
      </div>
    </article>
  );
};

export default DoctorCard;
