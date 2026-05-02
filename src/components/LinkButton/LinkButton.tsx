import type { AnchorHTMLAttributes, ReactNode } from 'react';

import style from './LinkButton.module.css';

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

const LinkButton = ({ children, href }: LinkButtonProps) => {
  return (
    <a className={style.linkButton} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default LinkButton;
