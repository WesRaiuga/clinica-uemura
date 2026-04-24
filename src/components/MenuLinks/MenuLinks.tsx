import { Link } from "react-router-dom";

interface MenuLinksProps {
  className?: string;
}

const MenuLinks = ({ className }: MenuLinksProps) => {
  return (
    <nav className={`${className ? " " + className : ""}`}>
      <Link to="/" state={{ scrollTo: "symptoms" }}>
        Sobre Nós
      </Link>

      <Link to="/" state={{ scrollTo: "how-it-works" }}>
        Especialidades
      </Link>

      <Link to="/" state={{ scrollTo: "about-me" }}>
        Contato
      </Link>

      <Link to="/" state={{ scrollTo: "services" }}>
        FAQ
      </Link>

      <Link to="/" state={{ scrollTo: "faq" }}>
        Agendar Consulta
      </Link>
    </nav>
  );
};

export default MenuLinks;
