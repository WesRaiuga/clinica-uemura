import { useState } from 'react';

import { Link } from 'react-router-dom';

import LogoContainer from '@/components/Logo/LogoContainer';
import MenuLinks from '@/components/MenuLinks/MenuLinks';
import { cn } from '@/utils/cn';

import style from './Menu.module.css';

const Menu = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const toggleMenu = () => setMenuAtivo((value) => !value);
  const closeMenu = () => setMenuAtivo(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <div className={style.navbar}>
      <header>
        <div className={style.titulo}>
          <Link to="/" state={{ scrollTo: 'hero2' }}>
            <LogoContainer />
          </Link>
        </div>

        <div
          className={cn(style.menuHamburguer, menuAtivo && style.ativo)}
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Toggle Menu"
          aria-expanded={menuAtivo}
        >
          <span className={cn(style.traco, style.traco1)}></span>
          <span className={cn(style.traco, style.traco2)}></span>
          <span className={cn(style.traco, style.traco3)}></span>
        </div>

        <MenuLinks className={style.menuLinks} />
      </header>

      <MenuLinks
        className={cn(style.menuLinks, style.mobile, menuAtivo && style.ativo)}
        onLinkClick={closeMenu}
      />
    </div>
  );
};

export default Menu;
