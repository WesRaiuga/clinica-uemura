import React from "react";
import styles from "./FloatingButton.module.css";

type FloatingButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  link?: {
    href: string;
    ariaLabel?: string;
  };
  bgColor?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const FloatingButton: React.FC<FloatingButtonProps> = ({ link, bgColor, children, className, onClick }: FloatingButtonProps) => {
  if (link) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel} 
      className={`${styles.floatButton} ${className ? " " + className : ""}`}
      style={{ backgroundColor: bgColor || 'var(--button-color)' }}
      >
        <span className={styles.content}>{children}</span>
      </a>
    );
  } else {
    return (
      <div 
        className={`${styles.floatButton} ${className ? " " + className : ""}`} 
        style={{ backgroundColor: bgColor || 'var(--button-color)' }}
        onClick={onClick}
      >
        <span className={styles.content}>{children}</span>
      </div>
    );
  }
};

export default FloatingButton;
