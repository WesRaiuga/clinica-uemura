import React from 'react';

import { cn } from '@/utils/cn';

import style from './Card.module.css';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, className }) => {
  return (
    <article className={cn(style.card, className)}>
      {image && (
        <div className={style.imageWrapper}>
          <img src={image} alt={title} className={style.image} />
        </div>
      )}
      <div className={style.content}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
      </div>
    </article>
  );
};

export default Card;
