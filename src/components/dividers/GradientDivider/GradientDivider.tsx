import React from 'react';

import { cn } from '@/utils/cn';

import style from './GradientDivider.module.css';

interface GradientDividerProps {
  /** Classes CSS adicionais */
  className?: string;
}

const GradientDivider: React.FC<GradientDividerProps> = ({ className }) => {
  return <div className={cn(style.divider, className)}></div>;
};

export default GradientDivider;
