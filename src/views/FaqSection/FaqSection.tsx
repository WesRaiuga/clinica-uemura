import { useState, useRef, useEffect } from 'react';

import UnderlinedTitle from '@/components/UnderlinedTitle/UnderlinedTitle';

import { FAQ_DATA } from './FaqData.tsx';
import style from './FaqSection.module.css';

interface FaqItemData {
  question: string;
  answer: React.ReactNode[];
}

const FaqItem = ({ item, isOpen, onClick, id }: { item: FaqItemData, isOpen: boolean, onClick: () => void, id: number }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className={style.questionContainer}>
      <button 
        className={`${style.question} ${isOpen ? style.questionActive : ""}`} 
        onClick={onClick} 
        aria-expanded={isOpen} 
        aria-controls={`faq-answer-${id}`}
      >
        <span>{item.question}</span>
        <span className={style.icon}></span>
      </button>
      <div 
        id={`faq-answer-${id}`} 
        className={`${style.answer} ${isOpen ? style.answerOpen : ""}`}
        style={{ height: height }}
      >
        <div ref={contentRef} className={style.answerInner}>
          {item.answer.map((text: React.ReactNode, i: number) => (
            <div key={i}>{text}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className={style.faqSection}>
      <UnderlinedTitle>Dúvidas Frequentes</UnderlinedTitle>
      <div className={style.sectionContent}>
        {FAQ_DATA.map((item, idx) => (
          <FaqItem 
            key={idx} 
            item={item} 
            isOpen={openIndex === idx} 
            onClick={() => handleToggle(idx)} 
            id={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
