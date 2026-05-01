import React, { useState } from "react";
import style from "./Menu.module.css";
import logotipo from "../../assets/img/logo.png";
import HomeLinks from "../../components/MenuLinks/MenuLinks";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const toggleMenu = () => setMenuAtivo((value) => !value);

  return (
    <div className={style.navbar}>
      <header>
        <div className={style.titulo}>
          <Link to="/" state={{ scrollTo: "banner" }}>
            <img src={logotipo} alt="logotipo da clínica" />
            <div>
              <p>Clínica</p>
              <p>Uemura</p>
            </div>
          </Link>
        </div>

        <div className={`${style.menuHamburguer} ${menuAtivo ? style.ativo : ""}`} onClick={toggleMenu}>
          <span className={`${style.traco} ${style.traco1}`}></span>
          <span className={`${style.traco} ${style.traco2}`}></span>
          <span className={`${style.traco} ${style.traco3}`}></span>
        </div>

        <HomeLinks className={style.filtros} />
      </header>

      <HomeLinks className={`${style.filtros} ${style.mobile} ${menuAtivo ? style.ativo : ""}`} />
    </div>
  );
};

export default Menu;
