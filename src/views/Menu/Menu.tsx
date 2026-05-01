import React, { useState } from "react";
import style from "./Menu.module.css";
import MenuLinks from "../../components/MenuLinks/MenuLinks";
import { Link } from "react-router-dom";
import LogoContainer from "../../components/Logo/LogoContainer";

const Menu: React.FC = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const toggleMenu = () => setMenuAtivo((value) => !value);

  return (
    <div className={style.navbar}>
      <header>
        <div className={style.titulo}>
          <Link to="/" state={{ scrollTo: "banner" }}>
            <LogoContainer />
          </Link>
        </div>

        <div className={`${style.menuHamburguer} ${menuAtivo ? style.ativo : ""}`} onClick={toggleMenu}>
          <span className={`${style.traco} ${style.traco1}`}></span>
          <span className={`${style.traco} ${style.traco2}`}></span>
          <span className={`${style.traco} ${style.traco3}`}></span>
        </div>

        <MenuLinks className={style.menuLinks} />

      </header>

      <MenuLinks className={`${style.menuLinks} ${style.mobile} ${menuAtivo ? style.ativo : ""}`} />
    </div>
  );
};

export default Menu;
