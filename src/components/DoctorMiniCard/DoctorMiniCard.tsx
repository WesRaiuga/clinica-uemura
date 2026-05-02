import React from 'react';
import style from './DoctorMiniCard.module.css';

interface DoctorMiniCardProps {
  photo?: string;
  altText?: string;
  name: string;
  cro?: string;
  specialization: string;
}

const DoctorMiniCard: React.FC<DoctorMiniCardProps> = ({ photo, altText: text, name, cro, specialization }) => {
  return (
    <div className={style.miniCard}>
      <img src={photo} alt={text} />
      <div>
        <h1>{name}</h1>
        <p>{cro}</p>
        <p>{specialization}</p>
      </div>
    </div>
  )
}

export default DoctorMiniCard;