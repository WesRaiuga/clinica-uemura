import React from 'react';

import { cn } from '@/utils/cn';

import style from './UnderlinedTitle.module.css';

interface UnderlinedTitleProps {
  /** Conteúdo do título (texto ou elementos React) */
  children: React.ReactNode;
  /** 
   * Alinhamento no Desktop. 
   * No Mobile será sempre centralizado conforme regras do projeto. 
   */
  align?: 'left' | 'center';
  /** Classes CSS adicionais para o container */
  className?: string;
}

/**
 * Componente padronizado para títulos de seção com uma linha vermelha inferior.
 * Segue a regra de ser sempre centralizado no mobile e opcionalmente à esquerda no desktop.
 */
const UnderlinedTitle: React.FC<UnderlinedTitleProps> = ({ 
  children, 
  align = 'center', 
  className 
}) => {
  return (
    <div 
      className={cn(
        style.container, 
        align === 'left' && style.alignLeft, 
        className
      )}
    >
      <h2 className={style.title}>{children}</h2>
    </div>
  );
};

export default UnderlinedTitle;
