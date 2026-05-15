import React from 'react';

import { cn } from '@/utils/cn';

import style from './QuoteCard.module.css';

interface QuoteCardProps {
  quote: string;
  className?: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, className }) => {
  return (
    <blockquote className={cn(style.quoteCard, className)} aria-label="Citação">
      <span className={style.quoteIcon} aria-hidden="true">❝</span>
      <p className={style.quoteText}>{quote}</p>
    </blockquote>
  );
};

export default QuoteCard;
